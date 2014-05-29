(function($) {
    listatipodocumento();
    $('#btnBuscar').on('click', buscador);
    
     function listatipodocumento(){
        $.ajax({
            'url':'listartipodocumento',
            'data':{
            },
            'type':'POST',
            'error':error,
           'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tbltipoidentificacion');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Descripción");
                    d2.append(td);
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.descripcion);
                    d2.append(td);
                    
                    content.append(d2);
                });
            }
        });
        
    }

    function buscador() {
        
        var txtIdTipoIdentificacion = $('#txtIdTipoIdentificacion').val();
        
        $.ajax({
            'url':'buscartipodocumento',
            'data':{
                'descripcion':txtIdTipoIdentificacion
                
            },
            'type':'POST',
            'error':error,
           'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tbltipoidentificacion');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Descripciòn");
                    d2.append(td);
                   
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.descripcion);
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

