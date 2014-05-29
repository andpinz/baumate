/**
 *
 * @author David Andres Gomez Zamora
 * 17-03-2014
 */
(function($){
    ingresoRol();
    $('#modificarEstadoUsuario').on('click',modificoEstadoUsuario);
    $('#buscarUsuario').on('click',buscarUsuario);
    
    // Function buscarUsuario: muestra la consulta de un solo usuario al lado del Cliente
    function buscarUsuario(){
        $.ajax({
            'url':'buscarusuario',
            'data':{
                'correo': $('#buscar').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                data.each(function(i,item){
                    $('#correo').val(item.correo)
                    $('#idrol').val(item.rol.idrol);
                    $('#idUsuario').val(item.idUsuario);
                });
            }
        });
    } 
    
// Function modificoEsatadoUsuario: muestra campos y modifica el estado de un solo usuario al lado del Cliente    
function modificoEstadoUsuario(){  
        var correo=$('#correo').val();
        var estado=$('#estado').val();
        var idrol=$('#idrol').val();
        var idUsuario=$('#idUsuario').val();
                $.ajax({
                    'url':'modificarestadousuario',
                    'data':{
                        'correo':correo,
                        'estado':estado,
                        'idUsuario':idUsuario,
                        'idrol':idrol
                    },
                    'type':'POST',
                    'error':error,
                    'success': function (data){
                        if(data==1){
                            alert('El estado del usuario fue modificado correctamente');
                            setTimeout("location.href='modificarestado.jsp'", 1000);
                        }else{
                            alert('No se pudo modificar el estado del usuario, por favor verifique la informacion e intente de nuevo');
                        }
                    }
                });
    }
    
    // Function ingresoRol: muestra en u ndesplegable lso reloes existentes en la Base de Datos al lado del Cliente
    function ingresoRol(){
        $.ajax({
            'url':'ingresarrol',
            'type':'POST',
            'error':error,
            'success':function(data){
                data = $(JSON.parse(data));
                var lista=$('#idrol');
                data.each(function(i,item){
                        var op = $('<option>').text(item.nombrerol);
                        op.attr('value',item.idrol);
                        lista.append(op);
            }); 
                }
            });
        
    }
function error(error){
        console.error(error);
    }
})(jQuery);


