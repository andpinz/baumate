(function($){
     buscador();
    $('#btnbuscar').on('click',buscador);
  
  
    function buscador(){
        var txtidventa = $('#txtIdventa').val();
        var txtidentificacion = $('#txtidentificacionventa').val();
        
        $.ajax({
            'url':'buscarventa',
            'data':{
                'idventa':txtidventa,
                'identificacion':txtidentificacion
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblVentas');
                content.html('');
                    var d2 = $('<tr>');
//                  var 
                    td = $('<td>').text("Nombre Venta");
                    d2.append(td);
                    td = $('<td>').text("Fecha");
                    d2.append(td);
                    td = $('<td>').text("Identificacion");
                    d2.append(td);
                    td = $('<td>').text("Valor");
                    d2.append(td);
                    td = $('<td>').text("Cliente");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.nombreventa);
                    d2.append(td);
                    td = $('<td>').text(item.fecha);
                    d2.append(td);
                    td = $('<td>').text(item.identificacion);
                    d2.append(td);
                    td = $('<td>').text(item.valor);
                    d2.append(td);
                    td = $('<td>').text(item.idcliente.primerNombre);
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


