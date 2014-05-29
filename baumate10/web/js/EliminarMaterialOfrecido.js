(function($){
    listarmaterial();
    listarproveedor();
    buscadortabla();
    $('#btnBuscar').on('click',buscador);   
    
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
                var content = $('#tblMatofre');
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
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','proy'+item.idmaterialofrecido);
                    tdi.attr('vl',item.idmaterialofrecido);
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    $('#proy'+item.idmaterialofrecido).on('click',eliminar);
                });
            }
        });
        
    }
    
    function buscadortabla(){
        $.ajax({
            'url':'listarmatofrecido',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblMatofre');
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
    
    function eliminar(){
        var id = $(this).attr('vl');
        $.ajax({
            'url':'eliminarmatofrecido',
            'data':{
                'idmaterialofrecido': id
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if (data==1) {
                    alert('se logro eliminar el material satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro eliminar el material con exito ! intente de nuevo ');
                }
            }
        });
        
    }
    
})(jQuery);


