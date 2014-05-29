(function($){
    listarusuarios();
        $('#btnConsultar').on('click',buscarUsuario);
        
        function buscarUsuario(){
        $.ajax({
            'url':'buscarrol',
            'data':{
                'nombrerol': $('#buscar').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblRol');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Nombre Rol");
                    d2.append(td);
                    content.append(d2);
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    td = $('<td>').text(item.nombrerol);
                    d2.append(td);
                    content.append(d2);
                });
            }
        });
    }
        
    function listarusuarios(){
        $.ajax({
            'url':'listarrol',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblRol');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Nombre Rol");
                    d2.append(td);
                    content.append(d2);
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    td = $('<td>').text(item.nombrerol);
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


