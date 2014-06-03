(function($){
    ingresoEmpleado();
    $('#btnVcrearr').on('click', abrirVenta);
        $('#btnVCancelarr').on('click', cerrarVentana);
        $('#btnVCrearr').on('click', crearRol);
        $('#btnCancelaru').on('click',Cancelar);
        $('#btnCrearu').on('click',crearUsuario);
        
        function Cancelar(){
        $.ajax({
            'type':'POST',
            'error':error,
            'success': function(data) {
                document.getElementById("contrasena").value="";
                document.getElementById("contrasena2").value="";
                document.getElementById("correo").value="";
            }
        });
    }
    
    function crearUsuario(){
        var correo=$('#correo').val();
        var contrasena=$('#contrasena').val();
        var contrasena2=$('#contrasena2').val();
        var idrol=$('#idrol').val();
        var estado=$('#estado').val();
        var idempleado=$('#idempleado').val();
        if (contrasena==""&&contrasena2==""&&correo==""){
            alertify.error("<b>Error-campos obligatorios:</b><br>Contraseña, Confirmar contraseña y Correo son campos obligatorios.");
        }else if(contrasena2==""){
            alertify.log("Por favor confirme su contraseña.");
        }else if(contrasena==""){
            alertify.log("Por favor ingrese una contraseña.");
        }else if(correo==""){
            alertify.log("Por favor ingrese un correo.");
        }else if(contrasena2!=contrasena){
            alertify.log("Las contraseñas no coinciden, por favor verifiquelas e intente de nuevo.");
        }else{
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
                            alertify.success("El usuario fue creado correctamente.");
                            document.getElementById("correo").value="";
                            document.getElementById("contrasena").value="";
                            document.getElementById("contrasena2").value="";
                        }else{
                            alertify.error("<b>Error-usuario no creado:</b><br>No se pudo crear el usuario, por favor verifique la informacion e intente de nuevo.");
                        }
                    }
                });
    }
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
                        ingresoRol();
                }
            });
        
    }
    function abrirVenta() {
        document.getElementById("idrol").innerHTML = "" ;
        document.getElementById("idempleado").innerHTML = "";
        var type = $(this).attr('data-type');
        $('#winRol').fadeIn(function() {
            window.setTimeout(function() {
                $('.window-container.' + type).addClass('window-container-visible');
            }, 100);
        });
    }
    
    function cerrarVentana() {
        ingresoEmpleado();
        $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
        $('#txtVenta').val('');
        //listarCiudades();
    }
    
    function crearRol(){
        var nombrerol=$('#Nombrerol').val();
                $.ajax({
                    'url':'nuevorol',
                    'data':{
                        'nombrerol':nombrerol
                    },
                    'type':'POST',
                    'error':error,
                    'success': function (data){
                        if(data==1){
                            alertify.success("El rol a sido creado.");
                            cerrarVentana();
                        }else{
                            alertify.error("<b>Error-rol no creado:</b><br>el rol no ha podido ser creado, por favor intente de nuevo.");
                        }
                    }
                });
    }
    
function error(error){
        console.error(error);
    }
})(jQuery);