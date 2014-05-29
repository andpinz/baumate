(function ($){
    listarmaterial();
    listartipopiso();
    $('#btnGuardar').on('click', valing);
    $('#btnBuscarId').on('click',consultarFormula);
    $('#btnLimpiar').on('click',limpiar);
    
    init();
    function init(){
        var vm = new validadores();
        $('#txtcantidad').blur(vm.validarnumerocamposvacios);
    }
    
    function consultarFormula(){
        $.ajax({
            'url':'consultarformula',
            'data':{
                'idmaterial':$('#cboidMaterial').val(),
                'idtipopiso':$('#cbotipopiso').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data){
                data = $(JSON.parse(data));
                data.each(function (i,item){
                    $('#txtidformula').val(item.idformula);
                    $('#cboidMaterial').val(item.idmaterial.idmateriales);
                    $('#cbotipopiso').val(item.idtipopiso.codigo);
                    $('#txtcantidad').val(item.cantidad);
                });
            }
        });
    }
 function listarmaterial(){
        $.ajax({
                'url' : 'listarmaterial',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data));
                    var content = $('#cboidMaterial');
                    content.html('');
                    data.each(function(i,item){
                        var d2 = $('<option>').text(item.nombre);
                        d2.attr('value', item.idmateriales);
                        content.append(d2);
                    });
                }
            });
    }
    
     function limpiar(){
          $("#txtidformula").val("");  
          $("#cboidMaterial").val("");  
          $("#cbotipopiso").val("");  
          $("#txtcantidad").val("");  
     }
    
    function listartipopiso(){
        $.ajax({
                'url' : 'listartipopisos',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data));
                    var content = $('#cbotipopiso');
                    content.html('');
                    data.each(function(i,item){
                        var d3 = $('<option>').text(item.nombre);
                        d3.attr('value', item.codigo);
                        content.append(d3);
                    });
                }
            });
    }
    
    function modificar(){
        var idformula = $('#txtidformula').val();
//        var idtipomaterial = $('#cboidMaterial').val();
//        var idtipopiso = $('#cbotipopiso').val();
        var cantidad = $('#txtcantidad').val();
         $.ajax({
             'url':'modificarformula',
             'data':{
                 'idformula': idformula,
//                 'idmateriales':idtipomaterial,
//                 'idtipopiso':idtipopiso,
                 'cantidad':cantidad
             },
             'type':'POST',
             'error':error,
             'success':function(data){
              if (data == 1){
               alert('modificacion de Formula exitosa');
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
                'nom':'txtcantidad',
                'tip': 5,
                'lbl': 'lblcantidad'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
          modificar();
        }
    }
})(jQuery);