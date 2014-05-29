(function($){
    buscador();
    $('#btnBuscar').on('click',buscador);   
    
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
                    td = $('<td>')
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','proy'+item.idventa);
                    tdi.attr('vl',item.idventa);
                    
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    
                    
                    $('#proy'+item.idventa).on('click',eliminar);
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
            'url':'eliminarventa',
            'data':{
                'idventa': id
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro eliminar la venta satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('Error! no se logro eliminar la venta por favor intente de nuevo');
                }
            }
        });
        
    }
    
})(jQuery);

//function buscadortabla(){
//        $.ajax({
//            'url':'listarventa',
//            'type':'POST',
//            'error':error,
//            'success': function(data) {
//                data = $(JSON.parse(data));
//                var content = $('#tblVentas');
//                content.html('');
//                    var d2 = $('<tr>');
//                    var td = $('<td>').text("Nombre Venta");
//                    d2.append(td);
//                    td = $('<td>').text("Fecha");
//                    d2.append(td);
//                    td = $('<td>').text("Identificacion");
//                    d2.append(td);
//                    td = $('<td>').text("Valor");
//                    d2.append(td);
//                    td = $('<td>').text("Cliente");
//                    d2.append(td);
//                    content.append(d2);
//                    
//                data.each(function(i,item){
//                    var d2 = $('<tr>');
//                    var td = $('<td>').text(item.nombreventa);
//                    d2.append(td);
//                    td = $('<td>').text(item.fecha);
//                    d2.append(td);
//                    td = $('<td>').text(item.identificacion);
//                    d2.append(td);
//                    td = $('<td>').text(item.valor);
//                    d2.append(td);
//                    td = $('<td>').text(item.idcliente.primerNombre);
//                    d2.append(td);
//                    content.append(d2);
//                });
//            }
//        });
//    }
//    