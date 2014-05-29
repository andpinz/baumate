(function($){
    listarunidadmedida();
    listartipoMaterial();
    $('#btnGuardar').on('click',valing);
    $('#btnLimpiar').on('click',limpiar);
    
    init();
    function init(){
        var vm = new validadores();
        $('#txtNombreMaterial').blur(vm.validarcamposvacios());
        $('#txttxtcantidadTotal').blur(vm.validarnumerocamposvacios());
    }
    
    function listarunidadmedida(){
        $.ajax({
                'url' : 'listarunidadmedida',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data))
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
    
    function listartipoMaterial(){
        $.ajax({
                'url' : 'listartipoMaterial',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data))
                    var content = $('#cboTipoMaterial');
                    content.html('');
                    data.each(function(i,item){
                        var d3 = $('<option>').text(item.nombre);
                        d3.attr('value', item.idtipomaterial)
                        content.append(d3);
                    });
                }
            });
    }
    
    function limpiar(){
          $("#txtNombreMaterial").val("");  
          $("#cbounidadmedida").val("");  
          $("#txtcantidadTotal").val("");  
          $("#cboTipoMaterial").val("");  
     }
    
    function insertarMaterial(){
        var txtNombre = $('#txtNombreMaterial').val();
        var cbounidadmedida = $('#cbounidadmedida').val();
        var txtcantidadtotal = $('#txtcantidadTotal').val();
        var cboTipoMaterial = $("#cboTipoMaterial").val();
        $.ajax({
            'url':'guardarmaterial',
            'data':{
                'NombreMaterial':txtNombre,
                'unidadmedida':cbounidadmedida,
                'canTotal':txtcantidadtotal,
                'tipomaterial':cboTipoMaterial
                
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro ingresar el material satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro ingresar el material');
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
          insertarMaterial();
        }
    }
    
})(jQuery);