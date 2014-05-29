(function ($){
    listarunidadmedida();
    listartipoMaterial();
    $('#btnGuardar').on('click', valing);
    $('#btnBuscarId').on('click',consultarMateriales);
    $('#btnLimpiar').on('click',limpiar);
    
    init();
    function init(){
        var vm = new validadores();
        $('#txtidmaterial').blur(vm.validarnumerocamposvacios());
        $('#txtNombreMaterial').blur(vm.validarcamposvacios());
        $('#txttxtcantidadTotal').blur(vm.validarnumerocamposvacios());
    }
    
    function consultarMateriales(){
        $.ajax({
            'url':'buscarmaterial',
            'data':{
                'nombres':$('#txtNombreMaterial').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblmateriales');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Nombre Material");
                    d2.append(td);
                    td = $('<td>').text("Unidad de medida");
                    d2.append(td);
                    td = $('<td>').text("Cantidad total");
                    d2.append(td);
                    td = $('<td>').text("Tipo Material");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.idunidadmedida.unidadmedida);
                    d2.append(td);
                    td = $('<td>').text(item.cantidadtotal);
                    d2.append(td);
                    td = $('<td>').text(item.idtipomaterial.nombre);
                    d2.append(td);
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Traer Datos');
                    tdi.attr('id','proy'+item.idmateriales);
                    tdi.attr('vl',item.idmateriales);
                    td.append(tdi);
                    d2.append(td);
                    
                    content.append(d2);
                    
                    $('#proy'+item.idmateriales).on('click',consultarMaterial);
                });
            }
        });
    }
    
    
    
    function consultarMaterial(){
        var id = $(this).attr('vl');
        $.ajax({
            'url':'consultarmaterial',
            'data':{
                'idmateriales':id
            },
            'type':'POST',
            'error':error,
            'success': function(data){
                data = $(JSON.parse(data));
                data.each(function (i,item){
                    $('#txtidmaterial').val(item.idmateriales);
                    $('#txtNombreMaterial').val(item.nombre);
                    $('#cbounidadmedida').val(item.idunidadmedida.idunidadmedida);
                    $('#txtcantidadTotal').val(item.cantidadtotal);
                    $('#cboTipoMaterial').val(item.idtipomateriales.nombre);
                });
            }
        });
    }
    
    function listarunidadmedida(){
        $.ajax({
                'url' : 'listarunidadmedida',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data));
                    var content = $('#cbounidadmedida');
                    content.html('');
                    data.each(function(i,item){
                        var d2 = $('<option>').text(item.unidadmedida);
                        d2.attr('value', item.idunidadmedida)
                        content.append(d2);
                    });
                }
            });
    }
    
    function limpiar(){
          $("#txtidmaterial").val("");  
          $("#txtNombreMaterial").val("");  
          $("#cbounidadmedida").val("");  
          $("#txtcantidadTotal").val("");  
          $("#cboTipoMaterial").val("");  
     }
     
    function listartipoMaterial(){
        $.ajax({
                'url' : 'listartipoMaterial',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data));
                    var content = $('#cboTipoMaterial');
                    content.html('');
                    data.each(function(i,item){
                        var d3 = $('<option>').text(item.nombre);
                        d3.attr('value', item.idtipomaterial);
                        content.append(d3);
                    });
                }
            });
    }
    
    function modificar(){
        var idmateriales = $('#txtidmaterial').val();
        var nombreMaterial = $('#txtNombreMaterial').val();
        var idunidadMedida = $('#cbounidadmedida').val();
        var cantidadtotal = $('#txtcantidadTotal').val();
        var tipomaterial = $('#cboTipoMaterial').val();
         $.ajax({
             'url':'modificarmateriales',
             'data':{
                 'idmateriales':idmateriales,
                 'nombremateriales':nombreMaterial,
                 'idunidadmedida':idunidadMedida,
                 'cantidadtotal':cantidadtotal,
                 'tipomaterial':tipomaterial
             },
             'type':'POST',
             'error':error,
             'success':function(data){
              if (data == 1){
               alert('modificacion de material exitosa');
               setTimeout("location.href='administrador.jsp'",500);
              }else{
               alert('no se logro realizar la modificacion por favor intente de nuevo');    
           }
         }      
      });
    }
 
    function error(error){
        console.error(error);
    }
    function valing(){
        var ob=$([
            {
              'nom': 'txtidmaterial',
              'tip': 5,
              'lbl': 'lblidmaterial'
            },
            {
                'nom':'txtNombreMaterial',
                'tip': 3,
                'lbl': 'lblNombreMaterial'
            },
            {
                'nom':'txtcantidadTotal',
                'tip':5,
                'lbl': 'lblcantidadTotal'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
          modificar();
        }
    }
})(jQuery);