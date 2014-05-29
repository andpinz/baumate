(function($) {

    $('#boton').on('click', valing);
    $('#btnLimpiar').on('click', limpiarinformacion);
    
    function limpiarinformacion() {
        $('#txtDescripcion').val('');
    }
    init();
    function init(){
        var vm = new validadores();
        $('#txtDescripcion').blur(vm.validarletrascamposvacios);
    }

    function registro() {
        var txtDescripcion = $('#txtDescripcion').val();
        
            $.ajax({
                'url': 'ingresartipodocumento',
                'data': {
                    'descripcion': txtDescripcion
                    
                },
                'type': 'GET',
                'error': error,
                'success': function(data) {
                    if (data == 1) {
                        alert('se logro crear el tipo de documento ');
                        setTimeout("location.href='administrador.jsp'", 500);
                    } else {
                        alert('no se logro crear el usuario');
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
                'nom': 'txtDescripcion',
                'tip': 4 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lbldescripcion'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            registro();
        }
    }
})(jQuery);



