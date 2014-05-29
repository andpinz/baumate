(function($){
    buscador();
    $('#btnbuscar').on('click',buscador);
    $('#btnReporte').on('click', rep);
    function rep(){
        $.ajax({
           'url':'rep1',
           'type':'POST',
           'error':error
        });
    }
   
    function buscador(){
        var txtidproveedores = $('#txtidproveedores').val();
       
        $.ajax({
            'url':'buscarproveedores',
            'data':{
                'idproveedores':txtidproveedores
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblProveedores');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("NIT");
                    d2.append(td);
                    td = $('<td>').text("Nombre empresa");
                    d2.append(td);
                    td = $('<td>').text("ciudad");
                    d2.append(td);
                    td = $('<td>').text("tipomaterial");
                    d2.append(td);
                    td = $('<td>').text("foto");
                    d2.append(td);
                    td = $('<td>').text("telefono");
                    d2.append(td);
                    td = $('<td>').text("direccion");
                    d2.append(td);
                  
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idproveedores);
                    d2.append(td);
                    td = $('<td>').text(item.nombreempresa);
                    d2.append(td);
                    td = $('<td>').text(item.idciudad.nombreciudad);
                    d2.append(td);
                    td = $('<td>').text(item.tipomaterial);
                    d2.append(td);       
                    td = $('<td>');
                     var img = $('<img>').attr('src',item.foto);
                    img.attr('width','200px');
                    img.attr('height','200px')
                    td.append(img);
                    d2.append(td);
                    td = $('<td>').text(item.telefono);
                    d2.append(td);
                    td = $('<td>').text(item.direccion);
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
