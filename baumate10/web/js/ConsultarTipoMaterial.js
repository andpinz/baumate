(function($){
    //consultarMaterial();
    $('#btnConsultar').on('click',buscador);
   
    function buscador(){
        $.ajax({
            'url':'listartipomaterial',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblmaterial');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("id Tipo Material");
                    d2.append(td);
                    td = $('<td>').text("Nombre");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idtipomaterial);
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