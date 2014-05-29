(function($){
    //consultarMaterial();
    buscadortabla();
    $('#btnConsultar').on('click',buscador);
   
    function buscadortabla(){
        $.ajax({
            'url':'listarmaterial',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblmaterial');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Nombre");
                    d2.append(td);
                    td = $('<td>').text("unidad de medida");
                    d2.append(td);
                    td = $('<td>').text("cantidad total");
                    d2.append(td);
                    td = $('<td>').text("Tipo Material");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.idunidadmedida.unidadmedida);
                    d2.append(td);
                    td = $('<td>').text(item.cantidadtotal);
                    d2.append(td);
                    td = $('<td>').text(item.idtipomaterial.nombre); 
                    d2.append(td);
                    content.append(d2);
                });
            }
        });
    }    
    
    function buscador(){
        var txtnombrematerial = $('#txtNmaterial').val();
        $.ajax({
            'url':'buscarmaterial',
            'data':{
                'nombres':txtnombrematerial
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblmaterial');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Nombre");
                    d2.append(td);
                    td = $('<td>').text("unidad de medida");
                    d2.append(td);
                    td = $('<td>').text("cantidad total");
                    d2.append(td);
                    td = $('<td>').text("Tipo Material");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.idunidadmedida.unidadmedida);
                    d2.append(td);
                    td = $('<td>').text(item.cantidadtotal);
                    d2.append(td);
                    td = $('<td>').text(item.idtipomaterial.nombre);
                    d2.append(td);
                    td = $('<td>');
                    
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

