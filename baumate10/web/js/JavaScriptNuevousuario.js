(function($){
    ingresoRol();
    ingresoEmpleado();
    $('#ingresarUsuario').on('click',ingresoUsuario);
function ingresoUsuario(){
        var correo=$('#correo').val();
        var contrasena=$('#contrasena').val();
        var idrol=$('#idrol').val();
        var estado=$('#estado').val();
        var idempleado=$('#idempleado').val();
                $.ajax({
                    'url':'ingresousuario',
                    'data':{
                        'correo':correo,
                        'contrasena':contrasena,
                        'estado':estado,
                        'idrol':idrol,
                        'idempleado':idempleado
                    },
                    'type':'POST',
                    'error':error,
                    'success': function (data){
                        if(data==1){
                            alert('El usuario nuevo fue creado correctamente');
                            setTimeout("location.href='nuevousuario.jsp'", 1000);
                        }else{
                            alert('No se pudo crear el nuevo usuario, por favor verifique la informacion e intente de nuevo');
                        }
                    }
                });
    }
    
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
    
    function ingresoEmpleado(){
        $.ajax({
            'url':'ingresarempleado',
            'type':'POST',
            'error':error,
            'success':function(data){
                data = $(JSON.parse(data));
                var lista=$('#idempleado');
                data.each(function(i,item){
                        var op = $('<option>').text(item.primernombre+" "+item.segundonombre+" "+item.primerapellido+" "+item.segundoapellido);
                        op.attr('value',item.idempleado);
                        lista.append(op);
            }); 
                }
            });
        
    }
    
function error(error){
        console.error(error);
    }
})(jQuery);