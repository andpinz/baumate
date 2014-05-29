(function($){
    listarmaterial();
    listartipopiso();
    buscadortabla();
    $('#btnBuscar').on('click',buscador);   
    
    function listarmaterial(){
        $.ajax({
                'url' : 'listarmaterial',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data));
                    var content = $('#cbomaterial');
                    content.html('');
                    data.each(function(i,item){
                        var d2 = $('<option>').text(item.nombre);
                        d2.attr('value', item.idmateriales);
                        content.append(d2);
                    });
                    content.val('');
                }
            });
    }
    function listartipopiso(){
        $.ajax({
                'url' : 'listartipopisos',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data));
                    var content = $('#cbotipopiso');
                    content.html('');
                    data.each(function(i,item){
                        var d3 = $('<option>').text(item.nombre);
                        d3.attr('value', item.codigo);
                        content.append(d3);
                    });
                    content.val('');
                }
            });
    }
    
    function buscador(){
        var cbomaterial = $('#cbomaterial').val();
        var cbotipopiso = $('#cbotipopiso').val();
        $.ajax({
            'url':'buscarformula',
            'data':{
                'idmaterial':cbomaterial,
                'idtipopiso':cbotipopiso
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblformula');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Material");
                    d2.append(td);
                    td = $('<td>').text("Tipo Piso");
                    d2.append(td);
                    td = $('<td>').text("Cantidad");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idmaterial.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.idtipopiso.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.cantidad);
                    d2.append(td);
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','proy'+item.idformula);
                    tdi.attr('vl',item.idformula);
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    $('#proy'+item.idformula).on('click',eliminar);
                });
            }
        });
        
    }
    
    function buscadortabla(){
        $.ajax({
            'url':'listarformula',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblformula');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Material");
                    d2.append(td);
                    td = $('<td>').text("Tipo Piso");
                    d2.append(td);
                    td = $('<td>').text("Cantidad");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idmaterial.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.idtipopiso.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.cantidad);
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
            'url':'eliminarformula',
            'data':{
                'idformula': id
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if (data==1) {
                    alert('se logro eliminar la formula satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro eliminar la formula con exito ! ');
                }
            }
        });
        
    }
    
})(jQuery);


