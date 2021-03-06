/**
 *
 * @author David Andres Gomez Zamora
 * 17-03-2014
 */
(function($){
    listarusuarios();
    $('#btnConsultar').on('click',buscarUsuario);
        $('#btnCancelar').on('click',Cancelar);
        
        function Cancelar(){
        $.ajax({
            'type':'POST',
            'error':error,
            'success': function(data) {
                document.getElementById("buscar").value="";
                listarusuarios();
            }
        });
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
                        estado="Inactivo"
                    }
                    td = $('<td>').text(estado);
                    var h = $('<input>');
                    h.attr('type', 'hidden');
                    h.attr('id', 'Estado' + i);
                    h.attr('vl', item.estado);
                    td.append(h);
                    d2.append(td);
                    td = $('<td>');
                    var tdi1 = $('<input>');
                    tdi1.attr('type', 'button');
                    if(item.estado==1){
                        tdi1.attr('value', 'Inactivar');
                    tdi1.attr('id', 'inactivar' + i);
                    }else if(item.estado==0){
                    tdi1.attr('value', 'Activar');
                    tdi1.attr('id', 'activar' + i);
                    }
                    tdi1.attr('vl', item.idUsuario);
                    td.append(tdi1);
                    d2.append(td);
                    content.append(d2);
//                    $('#modificar' + i).on('click', tablaModificar);
                    $('#activar' + i).on('click', modificoEstadoUsuarioa);
                    $('#inactivar' + i).on('click', modificoEstadoUsuarioi);
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
                    var h = $('<input>');
                    h.attr('type', 'hidden');
                    h.attr('id', 'estado' + i);
                    h.attr('vl', item.estado);
                    td.append(h);
                    d2.append(td);
                    td = $('<td>');
                    var tdi1 = $('<input>');
                    tdi1.attr('type', 'button');
                    if(item.estado==1){
                        tdi1.attr('value', 'Inactivar');
                    tdi1.attr('id', 'inactivar' + i);
                    }else if(item.estado==0){
                    tdi1.attr('value', 'Activar');
                    tdi1.attr('id', 'activar' + i);
                    }
                    tdi1.attr('vl', item.idUsuario);
                    td.append(tdi1);
                    d2.append(td);
                    content.append(d2);
                    $('#activar' + i).on('click', modificoEstadoUsuarioa);
                    $('#inactivar' + i).on('click', modificoEstadoUsuarioi);
                });
            }
        }
        });
            }
    }
    
    function modificoEstadoUsuarioa(){ 
        var correo = $('#buscar').val();
        var idUsuario = $(this).attr('vl');
        $('activar').val(idUsuario);
        var estado = $(this).attr('vl');
        $('Estado').val(estado);
        estado=1;
                $.ajax({
                    'url':'modificarestadousuario',
                    'data':{
                        'estado':estado,
                        'idUsuario':idUsuario
                    },
                    'type':'POST',
                    'error':error,
                    'success': function (data){
                        if(data==1){
                            alertify.success("El estado del usuario fue cambiado");
                            document.getElementById("tblUsuario").value="";
                            if(correo!=""){
                                buscarUsuario();
                            }else{
                            listarusuarios();
                        }
                        }else{
                            alertify.error("<b>Error-estado no cambiado:</b><br>no se pudo modificar el estado del usuario, por favor verifique la informacion e intente de nuevo");
                        }
                    }
                });
    }
    function modificoEstadoUsuarioi(){ 
        var correo = $('#buscar').val();
        var idUsuario = $(this).attr('vl');
        $('inactivar').val(idUsuario);
        var estado = $(this).attr('vl');
        $('Estado').val(estado);
        estado=0;
                $.ajax({
                    'url':'modificarestadousuario',
                    'data':{
                        'estado':estado,
                        'idUsuario':idUsuario
                    },
                    'type':'POST',
                    'error':error,
                    'success': function (data){
                        if(data==1){
                            alertify.success("El estado del usuario fue cambiado");
                            document.getElementById("tblUsuario").value="";
                            if(correo!=""){
                                buscarUsuario();
                            }else{
                            listarusuarios();
                        }
                        }else{
                            alertify.error("<b>Error-estado no cambiado:</b><br>no se pudo modificar el estado del usuario, por favor verifique la informacion e intente de nuevo");
                        }
                    }
                });
    }

function error(error){
        console.error(error);
    }
})(jQuery);


