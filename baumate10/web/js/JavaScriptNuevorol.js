(function($){

    $('#ingresarRol').on('click',ingresoRol);
function ingresoRol(){
        var nombrerol=$('#rol').val();
                $.ajax({
                    'url':'nuevorol',
                    'data':{
                        'nombrerol':nombrerol
                    },
                    'type':'POST',
                    'error':error,
                    'success': function (data){
                        if(data==1){
                            alert('El rol nuevo fue creado correctamente');
                            setTimeout("location.href='nuevorol.jsp'", 1000);
                        }else{
                            alert('No se pudo crear el nuevo rol, por favor verifique la informacion e intente de nuevo');
                        }
                    }
                });
    }
    function error(error){
        console.error(error);
    }
})(jQuery);

