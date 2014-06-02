(function($){
    $('#bntGuardar').on('click',modificar);
    $('#btntraerdatos').on('click',buscarTipoVenta);
    $('#btnLimpiar').on('click',limpiar);
    
//    init();
//    function init(){
//        var vm = new validadores();
//        $('#txtNombreventa').blur(vm.validarcamposvacios);
//        $('#txtidentificacion').blur(vm.validarcamposvacios);
//        $('#txtvalor').blur(vm.validarnumerocamposvacios);
//    }
    
    function buscarTipoVenta(){
        $.ajax({
            'url':'buscaridentiventas',
            'data':{
                'desctipoventa':$('#txtDescripciontipoventa').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i,item){
                    $('#txtidTipoVenta').val(item.ididentificacionventa);
                    $('#txtDetalle').val(item.tipoidentificacionventa);
                });
            }
        });
    } 

    function limpiar(){
          $("#txtDescripciontipoventa").val("");  
          $("#txtDetalle").val("");  
     }
    
    
    function modificar(){
        var idTipoVenta= $('#txtidTipoVenta').val();
        var txtDetalle = $('#txtDetalle').val();
        $.ajax({
            'url':'modificaridentiventa',
            'data':{
                'idtipoventa': idTipoVenta,
                'detalle':txtDetalle
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if (data==1) {
                    alert('Se logro Modificar el Tipo de Venta con EXITO!');
                    setTimeout("location.href='ModificarTipoVenta.jsp'", 500);
                }else{
                    alert('ERROR. No se logro modificar por favor intente de nuevo!');
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
                'nom':'txtNombreventa',
                'tip': 3,
                'lbl': 'lblNombreventa'
            },
            {
                'nom':'txtidentificacion',
                'tip': 3,
                'lbl': 'lblidentificacion'
            },
            {
                'nom':'txtvalor',
                'tip': 5,
                'lbl': 'lblvalor'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
          modificar();
        }
    }
    
})(jQuery);