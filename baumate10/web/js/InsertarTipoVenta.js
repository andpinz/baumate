(function($){
    $('#bntGuardar').on('click',insertar);
    $('#btnLimpiar').on('click',limpiar);
    
    init();
    function init(){
        var vm = new validadores();
        $('#txtDescripciontipoventa').blur(vm.validarcamposvacios);
    }
    
    function insertar(){
        $.ajax({
            'url':'insertaridentiventa',
            'data':{
                descripcionven:$('#txtDescripciontipoventa').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if (data==1) {
                    alert('Tipo de Venta ingresado con EXITO!');
                    setTimeout("location.href='InsertarTipoVenta.jsp'", 500);
                }else{
                    alert('ERROR. el tipo de venta no se pudo insertar por favor intente de nuevo');
                }
            }
        });
    }
    
    function limpiar(){
          $("#txtDescripciontipoventa").val("");  
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
          insertar();
        }
    }
})(jQuery);