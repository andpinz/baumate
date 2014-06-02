(function($){
    listartipoventa();
    
    function listartipoventa(){
        $.ajax({
            'url':'listaridentiventa',
            'type':'POST',
            'error':error,
           'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblTipoVenta');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Tipo Venta");
                    d2.append(td);
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                     $('#txtNombre').val();
                    $('#codigo').val();
                    
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.tipoidentificacionventa);
                    d2.append(td);
                    
                    
                   td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','tipvent'+item.ididentificacionventa);
                    tdi.attr('vl',item.ididentificacionventa);
                   
                    
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    
                    
                    $('#tipvent'+item.ididentificacionventa).on('click',eliminar);
                });
            }
        });
        
    }
    
    function error(error){
        console.error(error);
    }
    
    function eliminar(){
        $.ajax({
            'url':'eliminaridentiventa',
           'data':{
               'ididentiventa':$(this).attr('vl')
          },
            'error':error,
            'success':function(data) {
                if (data==1) {
                    alert('se logro eliminar el tipo de venta');
                    setTimeout("location.href='EliminarTipoVenta.jsp'", 500);
                }else{
                    alert('Error: no se logro eliminar por favor intente de nuevo');
                  }
            }
        });
        
    }
    
})(jQuery);