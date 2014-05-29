(function($){
    ingresoRol();
    $('#modificarRol').on('click',modificoRol);
    $('#buscarRol').on('click',buscarRol);
    
    // Function buscarUsuario: muestra la consulta de un solo usuario al lado del Cliente
    function buscarRol(){
        $.ajax({
            'url':'buscarrol',
            'data':{
                'nombrerol': $('#buscar').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                data.each(function(i,item){
                    $('#nombrerol').val(item.nombrerol);
                    $('#idRol').val(item.idrol);
                });
            }
        });
    } 

// Function modificoEsatadoUsuario: muestra campos y modifica un solo usuario al lado del Cliente 
function modificoRol(){  
        var nombrerol=$('#nombrerol').val();
        var idrol=$('#idRol').val();
                $.ajax({
                    'url':'modificarrol',
                    'data':{
                        'nombrerol':nombrerol,
                        'idrol':idrol
                    },
                    'type':'POST',
                    'error':error,
                    'success': function (data){
                        if(data==1){
                            alert('El rol fue modificado correctamente');
                            setTimeout("location.href='modificarusuario.jsp'", 1000);
                        }else{
                            alert('No se pudo modificar el rol, por favor verifique la informacion e intente de nuevo');
                        }
                    }
                });
    }
function error(error){
        console.error(error);
    }
})(jQuery);


