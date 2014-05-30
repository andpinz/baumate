(function($){
    listarusuarios();
        $('#btnConsultar').on('click',buscarUsuario);
        
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
                    tdi.attr('vl', item.idUsuario);
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
    var correo="";
        function buscarUsuario(){
                correo = $('#buscar').val();
            var nempleado = $('#buscare').val();
                  if (correo==""&&nempleado=="") {
                      alertify.log("Por favor ingrese un correo o un nombre de empleado."); 
                }else if (correo!=""&&nempleado!=""){
                      alertify.error("<b>Error-ambos campos ingresado:</b><br>Por favor llene solo un campo."); 
                }else if(correo==""&&nempleado!=""){
                    buscarEmpleado();
                }else{
        $.ajax({
            'url':'buscarusuario',
            'data':{
                'correo': correo
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                if(data==null){
                    alertify.log("<b>Error-usuario no encontrado:</b><br>Por favor verifique el correo ingresado.");
                }
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
                    $('#idUsuario').val(item.idUsuario);
                    
                    var d2 = $('<tr>');
                    var td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type', 'text');
                    tdi.val(item.correo);
                    tdi.attr('id', 'correo' + i);
                    tdi.attr('vl', i);
                    td.append(tdi);
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
                    tdi.attr('type', 'text');
                    tdi.val(item.rol.idrol);
//                    tdi.attr('value').val(item.rol.idrol);
                    tdi.attr('id', 'idrol' + i);
                    tdi.attr('vl', i);
                    td.append(tdi);
                    d2.append(td);
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type', 'button');
                    tdi.attr('value', 'Modificar');
                    tdi.attr('id', 'modificar' + i);
                    tdi.attr('vl', item.idUsuario);
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
                    document.getElementById("correo"+i).style.width="auto";
                    document.getElementById("correo"+i).style.margin="0px 0px 0px 0px";
                    document.getElementById("correo"+i).style.fontSize="17px";
                });
            }
        });
            }
    }

    function error(error){
        console.error(error);
    }
    
})(jQuery);