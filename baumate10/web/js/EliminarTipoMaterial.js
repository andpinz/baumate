(function ($){
    $('#btnBuscar').on('click',buscador);
    
    function buscador(){
            $.ajax({
            'url':'listartipomaterial',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tbltipomaterial');
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
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','mat'+item.idtipomaterial);
                    tdi.attr('vl',item.idtipomaterial);
                    
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    
                    $('#mat'+item.idtipomaterial).on('click',eliminar);
                });
            }
        });
    }    
 function eliminar(){
        var id = $(this).attr('vl');
        $.ajax({
            'url':'eliminartipomateriales',
            'data':{
                'idtipomateriales': id
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
