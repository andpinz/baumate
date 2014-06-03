(function($){
    listarusuarios();
        $('#btnConsultar').on('click',buscarUsuario);
        $('#btnCancelar').on('click',Cancelar);
        $('#btnCancelaru').on('click',Cancelar);
        $('#btnCrear').on('click',divCrear);
        $('#btnCrearu').on('click',crearUsuario);
        $('#btnVcrearr').on('click', abrirVenta);
        $('#btnVCancelarr').on('click', cerrarVentana);
        $('#btnVCrearr').on('click', crearRol);
        
                function Cancelar(){
        $.ajax({
            'type':'POST',
            'error':error,
            'success': function(data) {
                document.getElementById("buscar").value="";
                document.getElementById("contrasena").value="";
                document.getElementById("contrasena2").value="";
                document.getElementById("correo").value="";
                var formularioc = document.getElementById("formularioc");
                formularioc.style.display='none';
        var formularioc = document.getElementById("btnCrear");
        formularioc.style.display='';
        var formularioc = document.getElementById("btnCancelar");
        formularioc.style.display='';
        document.getElementById("idrol").innerHTML = "" ;
        document.getElementById("idempleado").innerHTML = ""; 
                listarusuarios();
            }
        });
    }
    
                function divCrear(){
        $.ajax({
            'type':'POST',
            'error':error,
            'success': function(data) {
        var formularioc = document.getElementById("formularioc");
        formularioc.style.display='block';
        var formularioc = document.getElementById("btnCrear");
        formularioc.style.display='none';
        var formularioc = document.getElementById("btnCancelar");
        formularioc.style.display='none';
        ingresoEmpleado();
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
                            document.getElementById("contrasena").value="";
                            document.getElementById("contrasena2").value="";
                            document.getElementById("contrasena2").value="";
                            document.getElementById("tblUsuario").value="";
                            listarusuarios();
                        }else{
                            alertify.error("<b>Error-usuario no creado:</b><br>No se pudo crear el usuario, por favor verifique la informacion e intente de nuevo.");
                        }
                    }
                });
    }
}
        
        function listarusuarios(){
        $.ajax({
            'url':'listarusuario',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblUsuario');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Correo");
                    d2.append(td);
                    td = $('<td>').text("Rol");
                    d2.append(td);
                    td = $('<td>').text("Estado");
                    d2.append(td);
                    td = $('<td>').text("Modificar");
                    d2.append(td);
                    td = $('<td>').text("Activar-Inactivar");
                    d2.append(td);
                    content.append(d2);
                data.each(function(i,item){                                        
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.correo);
                    td.attr('id', 'idCorreo' + i);
                    d2.append(td);
                    td = $('<td>').text(item.rol.nombrerol);
                    d2.append(td);
                    if(item.estado==1){
                        var estado="Activo";
                    }else if(item.estado==0){
                        estado="Inactivo"
                    }
                    td = $('<td>').text(estado);
                    d2.append(td);
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type', 'button');
                    tdi.attr('value', 'Modificar');
                    tdi.attr('id', 'modificar' + i);
                    tdi.attr('vl', item.correo);
                    td.append(tdi);
                    d2.append(td);
                    td = $('<td>');
                    var tdi1 = $('<input>');
                    tdi1.attr('type', 'button');
                    tdi1.attr('value', 'Activar-Inactivar');
                    tdi1.attr('id', 'activarinactivar' + i);
                    tdi1.attr('vl', item.idUsuario);
                    td.append(tdi1);
                    d2.append(td);
                    content.append(d2);
                });
            }
        });
    }
    
        function buscarUsuario(){
                 var correo = $('#buscar').val();
                  if (correo=="") {
                      alertify.log("Por favor ingrese un correo a buscar.");  
                }else{
        $.ajax({
            'url':'buscarusuario',
            'data':{
                'correo': correo
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if(data==0){
                alertify.error("<b>Error-usuario no encontrado:</b><br>Por favor verifique el correo ingresado.");
                    }else{
                data = $(JSON.parse(data));
                var content = $('#tblUsuario');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Correo");
                    d2.append(td);
                    td = $('<td>').text("Rol");
                    d2.append(td);
                    td = $('<td>').text("Estado");
                    d2.append(td);
                    td = $('<td>').text("Modificar");
                    d2.append(td);
                    td = $('<td>').text("Activar-Inactivar");
                    d2.append(td);
                    content.append(d2);
                data.each(function(i,item){                    
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.correo);
                    d2.append(td);
                    td = $('<td>').text(item.rol.nombrerol);
                    d2.append(td);
                    if(item.estado==1){
                        var estado="Activo";
                    }else if(item.estado==0){
                        var estado="Inactivo"
                    }
                    td = $('<td>').text(estado);
                    d2.append(td);
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type', 'button');
                    tdi.attr('value', 'Modificar');
                    tdi.attr('id', 'modificar' + i);
                    tdi.attr('vl', item.correo);
                    td.append(tdi);
                    d2.append(td);
                    td = $('<td>');
                    var tdi1 = $('<input>');
                    tdi1.attr('type', 'button');
                    tdi1.attr('value', 'Activar-Inactivar');
                    tdi1.attr('id', 'activarinactivar' + i);
                    tdi1.attr('vl', item.idUsuario);
                    td.append(tdi1);
                    d2.append(td);
                    content.append(d2);
                });
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