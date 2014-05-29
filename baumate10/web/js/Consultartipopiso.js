(function($) {
    listar();
    $('#btnBuscar').on('click', buscador);
    $('#btnLimpiar').on('click', limpiarinformacion);
    
    function limpiarinformacion() {
        $('#txtCodigo').val('');
       
    }
    
  function listar() {
        $.ajax({
            'url':'listartipopisos',
            'data':{
            },
            'type':'POST',
            'error':error,
           'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tbltipopiso');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("codigo");
                    d2.append(td);
                    td = $('<td>').text("Nombre");
                    d2.append(td);
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.codigo);
                    d2.append(td);
                    td = $('<td>').text(item.nombre);
                    d2.append(td);
                    
                    content.append(d2);
                });
            }
        });
        
    }
    function buscador() {
        
        var txtCodigo = $('#txtCodigo').val();
        
        $.ajax({
            'url':'buscartipopiso',
            'data':{
                'nombre':txtCodigo
                
            },
            'type':'POST',
            'error':error,
           'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tbltipopiso');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("codigo");
                    d2.append(td);
                    td = $('<td>').text("Nombre");
                    d2.append(td);
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.codigo);
                    d2.append(td);
                    td = $('<td>').text(item.nombre);
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

