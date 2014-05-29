(function($){
    listarmaterial();
    listarproveedor();
    buscador();
    $('#btnBuscarpornombre').on('click',buscar);
    
    function listarmaterial(){
        $.ajax({
            'url':'listarmaterial',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#cboidmaterial');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombre);
                    d2.attr('value',item.idmateriales);  
                    content.append(d2);
                });
                content.val('');
            }
        });
    } 
    
    function listarproveedor(){
        $.ajax({
            'url':'listarproveedores',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#cboidproveedor');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombreempresa);
                    d2.attr('value',item.idproveedores)  
                    content.append(d2);
                });
                content.val('');
            }
        });
    } 
    
    function buscador(){
        $.ajax({
            'url':'listarmatofrecido',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblmaterialofrecido');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Material");
                    d2.append(td);
                    td = $('<td>').text("Costo");
                    d2.append(td);
                    td = $('<td>').text("Proveedor");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idmaterial.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.costo);
                    d2.append(td);
                    td = $('<td>').text(item.idproveedor.nombreempresa);
                    d2.append(td);
                    content.append(d2);
                });
            }
        });
    }
    
    function buscar(){
        var cbomaterial = $('#cboidmaterial').val();
        var cboproveedor = $('#cboidproveedor').val();
        $.ajax({
            'url':'buscarmatofrecido',
            'data':{
                'idmaterial':cbomaterial,
                'idproveedor':cboproveedor
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblmaterialofrecido');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Material");
                    d2.append(td);
                    td = $('<td>').text("Costo");
                    d2.append(td);
                    td = $('<td>').text("Proveedor");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idmaterial.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.costo);
                    d2.append(td);
                    td = $('<td>').text(item.idproveedor.nombreempresa);
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