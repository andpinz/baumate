(function($) {

    $('#boton').on('click', valing);
    $('#btnLimpiar').on('click', limpiarinformacion);
    
    function limpiarinformacion() {
        $('#txtNombre').val('');
    }
    init();
    function init() {
        var vm = new validadores();
        $('#txtNombre').blur(vm.validarletrascamposvacios);
    }

    function registro() {
        var txtNombre = $('#txtNombre').val();
        
            $.ajax({
                'url': 'ingresartipopiso',
                'data': {
                    'nombre': txtNombre
                    
                },
                'type': 'GET',
                'error': error,
                'success': function(data) {
                    if (data == 1) {
                        alert('se logro crear el tipo de piso correctamente');
                        setTimeout("location.href='administrador.jsp'", 500);
                    } else {
                        alert('no se logro crear el tipo de piso');
                    }
                }
            });
    }

    function error(error) {
        console.error(error);
    }

 function valing(){
        var ob=$([
            
             {
                'nom': 'txtNombre',
                'tip': 4 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lblnombre'
            }
           
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            registro();
        }
    }
})(jQuery);