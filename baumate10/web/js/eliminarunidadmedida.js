(function($){
   
    $('#btnBuscar').on('click',buscador);
    
    function buscador(){
        var txtunidadmedida = $('#txtunidadmedida').val();
       
        
        $.ajax({
            'url':'listarunidadmedida',
            'data':{
                'unidadmedida':txtunidadmedida
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
                     var td = $('<td>').text("Nombre");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idunidadmedida);
                    d2.append(td);
                    td = $('<td>').text(item.unidadmedida);
                    d2.append(td);
                    
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','car'+item.idunidadmedida);
                    tdi.attr('vl',item.idunidadmedida);
                    
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    
                    
                    $('#car'+item.idcunidadmedida).on('click',eliminar);
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
            'url':'eliminarunidadmedida',
            'data':{
                'idunidadmedida': id
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro eliminar la unidad de medida satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro eliminar la unidad de medida');
                }
            }
        });
        
    }
    
})(jQuery);


