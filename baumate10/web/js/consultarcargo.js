(function($){
   
    $('#btnbuscar').on('click',buscador);

    
    function buscador(){
        var txtnombre = $('#txtnombre').val();
       
        $.ajax({
            'url':'buscarcargo',
            'data':{
                'nombre':txtnombre
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblProveedores');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Nombre");
                    d2.append(td);
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.nombre);
                    d2.append(td);
                   
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
