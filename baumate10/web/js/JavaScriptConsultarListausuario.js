(function($){
    listarusuarios();
    tablaOpciones();
        $('#btnConsultar').on('click',buscarUsuario);
        
        function tablaOpciones(){
        $.ajax({
            'url':'',
            'type':'POST',
            'error':error,
            'success': function(data) {
                var content = $('#tblOpciones');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Nuevo");
                    d2.append(td);
                    td = $('<td>').text("Buscar");
                    d2.append(td);
                    td = $('<td>').text("Modificar");
                    d2.append(td);
                    td = $('<td>').text("Activar-Inactivar");
                    d2.append(td);
                    content.append(d2);
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type', 'button');
                    tdi.attr('value', 'Nuevo');
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                });
            }
        });
    }
    
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
                var content = $('#tblUsuario');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Correo");
                    d2.append(td);
                    td = $('<td>').text("Rol");
                    d2.append(td);
                    td = $('<td>').text("Estado");
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
                    content.append(d2);
                });
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
                    content.append(d2);
                });
            }
        });
    }
    function error(error){
        console.error(error);
    }
    
})(jQuery);