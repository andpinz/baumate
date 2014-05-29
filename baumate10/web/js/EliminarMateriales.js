(function ($){
    buscadortabla();
    $('#btnBuscar').on('click',buscar);
    
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
                    td = $('<td>').text("Unidad de medida");
                    d2.append(td);
                    td = $('<td>').text("Cantidad Total");
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
    function buscar(){
        var txtnombrematerial = $('#txtnombrematerial').val();
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
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','mat'+item.idmateriales);
                    tdi.attr('vl',item.idmateriales);
                    
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    
                    $('#mat'+item.idmateriales).on('click',eliminar);
                });
            }
        });
    }    
    
 function eliminar(){
        var id = $(this).attr('vl');
        $.ajax({
            'url':'eliminarmateriales',
            'data':{
                'idmateriales': id
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('El material se ha eliminado correctamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('apreciado usuario no se pudo eliminar el material por favor intente de nuevo');
                }
            }
        });
        
    }
    
    function error(error){
    console.error(error);
    }
    
})(jQuery);

