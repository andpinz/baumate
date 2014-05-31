(function($){
    listarusuarios();
        $('#btnCrear').on('click',tablaCrear);
        $('#btnConsultar').on('click',buscarUsuario);
        $('#btnCancelar').on('click',listarusuarios);
        
        function tablaCrear(){
            var estado = 1;
        $.ajax({
            'type':'POST',
            'error':error,
            'success': function(data) {
                var content = $('#tblUsuario');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Correo");
                    d2.append(td);
                    var td = $('<td>').text("Contrasena");
                    d2.append(td);
                    var td = $('<td>').text("Confirmar Contrasena");
                    d2.append(td);
                    td = $('<td>').text("Rol");
                    d2.append(td);
                    td = $('<td>').text("Empleado");
                    d2.append(td);
                    td = $('<td>').text("Crea Usuario");
                    d2.append(td);
                    content.append(d2);
                    var d2 = $('<tr>');
                    var td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type', 'text');
                    tdi.attr('id', 'correo');
                    tdi.attr('vl');
                    td.append(tdi);
                    var h = $('<input>');
                    h.attr('type', 'hidden');
                    h.val(estado);
                    td.append(h);
                    d2.append(td);
                    td = $('<td>');
                    var tdi2 = $('<input>');
                    tdi2.attr('type', 'text');
                    tdi2.attr('id', 'contrasena');
                    td.append(tdi2);
                    d2.append(td);
                    td = $('<td>');
                    var tdi3 = $('<input>');
                    tdi3.attr('type', 'text');
                    tdi3.attr('id', 'contrasena2');
                    td.append(tdi3);
                    d2.append(td);
                    td = $('<td>');
                    var op = $('<select>');
                    op.attr('id', 'rol');
//                    tdi2.attr('vl', i);
                    td.append(op);
                    d2.append(td);
                    td = $('<td>');
                    var op2 = $('<select>');
                    op2.attr('id', 'empleado');
//                    tdi2.attr('vl', i);
                    td.append(op2);
                    d2.append(td);
                    td = $('<td>');
                    var btn = $('<input>');
                    btn.attr('type', 'button');
                    btn.attr('value', 'Crear Usuario');
                    btn.attr('id', 'crear');
                    td.append(btn);
                    d2.append(td);
                    content.append(d2);
                    document.getElementById("correo").style.width="auto";
                    document.getElementById("correo").style.margin="0px 0px 0px 0px";
                    document.getElementById("correo").style.fontSize="17px";
                    document.getElementById("contrasena").style.width="auto";
                    document.getElementById("contrasena").style.margin="0px 0px 0px 0px";
                    document.getElementById("contrasena").style.fontSize="17px";
                    document.getElementById("contrasena2").style.width="auto";
                    document.getElementById("contrasena2").style.margin="0px 0px 0px 0px";
                    document.getElementById("contrasena2").style.fontSize="17px";
                    $('#crear').on('click', crearUsuario);
            }
        });
    }
    
    function crearUsuario(){
        var correo=$('#correo').val();
        var contrasena2=$('#contrasena2').val();
        var contrasena=$('#contrasena').val();
        var rol=$('#rol').val();
        var estado=$('#estado').val();
        var empleado=$('#empleado').val();
        if (contrasena!=contrasena2){
        alertify.error("<b>Error-contraseña:</b><br>Las contraseñas no son iguales, por favor verifique las contraseñas.");
        }else{
                $.ajax({
                    'url':'ingresousuario',
                    'data':{
                        'correo':correo,
                        'contrasena':contrasena,
                        'estado':estado,
                        'idrol':rol,
                        'idempleado':empleado
                    },
                    'type':'POST',
                    'error':error,
                    'success': function (data){
                        if(data==1){
                            alertify.log("El usuario fue creado correctamente.");
                        }else{
                            alertify.error("<b>Error-usuario no creado:</b><br>Por favor verifique los datos ingresados e intente de nuevo.");
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
                    $('#modificar' + i).on('click', tablaModificar);

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
                    $('#modificar' + i).on('click', tablaModificar);
                });
            }
        }
        });
            }
    }
    
    function tablaModificar(){
        var idCorreo = $(this).attr('vl');
        $('modificar').val(idCorreo);
        $.ajax({
            'url':'buscarusuario',
            'data':{
                'correo': idCorreo
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblUsuario');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Correo");
                    d2.append(td);
                    var td = $('<td>').text("Contraseña");
                    d2.append(td);
                    td = $('<td>').text("Rol");
                    d2.append(td);
                    td = $('<td>').text("Estado");
                    d2.append(td);
                    td = $('<td>').text("Modificar");
                    d2.append(td);
                    content.append(d2);
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type', 'text');
                    tdi.val(item.correo);
                    tdi.attr('id', 'correo' + i);
                    tdi.attr('vl', i);
                    td.append(tdi);
                    var h = $('<input>');
                    h.attr('type', 'hidden');
                    h.val(item.idUsuario);
                    td.append(h);
                    d2.append(td);
                    td = $('<td>');
                    var tdi2 = $('<input>');
                    tdi2.attr('type', 'text');
                    tdi2.val(item.contrasena);
                    tdi2.attr('id', 'contrasena' + i);
                    tdi2.attr('vl', i);
                    td.append(tdi2);
                    d2.append(td);
                    td = $('<td>');
                    var op = $('<select>');
                    op.attr('id', 'rol');
                    op.attr('name', 'rol');
//                    tdi2.attr('vl', i);
                    td.append(op);
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
                    tdi.attr('vl', item.idUsuario);
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    document.getElementById("correo"+i).style.width="auto";
                    document.getElementById("correo"+i).style.margin="0px 0px 0px 0px";
                    document.getElementById("correo"+i).style.fontSize="17px";
                    document.getElementById("contrasena"+i).style.width="auto";
                    document.getElementById("contrasena"+i).style.margin="0px 0px 0px 0px";
                    document.getElementById("contrasena"+i).style.fontSize="17px";
                    ingresoRol();
                });
            }
        });
    }
   
    function ingresoRol(){
        $.ajax({
            'url':'ingresarrol',
            'type':'POST',
            'error':error,
            'success':function(data){
                var lista=$('#rol');
                data = $(JSON.parse(data));
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