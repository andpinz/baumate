(function($){
    listar();
    $('#btnbuscar').on('click',buscador);

    
    function buscador(){
        var txtidunidadmedida = $('#txtidunidadmedida').val();
       
        $.ajax({
            'url':'consultarunidadmedida',
            'data':{
                'idunidadmedida':txtidunidadmedida
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblunidadmedida');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("id");
                    d2.append(td);
                    td = $('<td>').text("unidad de medida");
                    d2.append(td);
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idunidadmedida);
                    d2.append(td);
                    td = $('<td>').text(item.unidadmedida);
                    d2.append(td);
                    
                    
                    content.append(d2);
                    
                    
                });
            }
        });
        
    }
     function listar(){
        var txtidunidadmedida = $('#txtidunidadmedida').val();
       
        $.ajax({
            'url':'listarunidadmedida',
            'data':{
                'idunidadmedida':txtidunidadmedida
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblunidadmedida');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("id");
                    d2.append(td);
                    td = $('<td>').text("unidad de medida");
                    d2.append(td);
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idunidadmedida);
                    d2.append(td);
                    td = $('<td>').text(item.unidadmedida);
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
