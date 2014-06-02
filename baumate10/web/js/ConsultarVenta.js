(function($){
     buscador();
     listartipoventa();
    $('#btnbuscar').on('click',buscador);
  
    
    function listartipoventa(){
        $.ajax({
            'url':'listaridentiventa',
            'type':'POST',
            'erro':error,
            'success':function(data){
                data=$(JSON.parse(data));
                var content=$('#cbotipoventa');
                content.html('');
                data.each(function (i,item){
                   var d2=$('<option>').text(item.tipoidentificacionventa);
                   d2.attr('value',item.ididentificacionventa);
                   content.append(d2);
                });
                content.val('');
            } 
        });
    }
    
    function buscador(){
        var cbotipoventa = $('#cbotipoventa').val();
        var txtidentificacion = $('#txtidentificacionventa').val();
        
        $.ajax({
            'url':'buscarventa',
            'data':{
                'tipoventa':cbotipoventa,
                'identificacion':txtidentificacion
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblVentas');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>');
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
                    td = $('<td>').text("Tipo Venta");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>'); 
                    var id = $('<input>').attr('type','hidden');
                    id.val(item.iventa);
                    td = $('<td>').text(item.nombreventa);
                    d2.append(td);
                    td = $('<td>').text(item.fecha);
                    d2.append(td);
                    td = $('<td>').text(item.identificacion);
                    d2.append(td);
                    td = $('<td>').text(item.valor);
                    d2.append(td);
                    td = $('<td>').text(item.idcliente.primerNombre);
                    d2.append(td);
                    td = $('<td>').text(item.tipoventa.tipoidentificacionventa);
                    d2.append(td);
                    td = $('<td>')
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','vent'+item.idventa);
                    tdi.attr('vl',item.idventa);
                    td.append(tdi);
                    d2.append(td);
                    id.append(id);
                    
                    td=$('<td>')
                    var tdi = $('<input>');
                    tdi.attr('type', 'button');
                    tdi.attr('value', 'Modificar');
                    tdi.attr('id', 'modiventa' + item.identificacion);
                    tdi.attr('vl', item.identificacion);
                    td.append(tdi);
                    d2.append(td);
                    
                    content.append(d2);
                    $('#vent'+item.idventa).on('click',eliminar);
                    $('#modiventa'+item.identificacion).on('click',modificar);
                });
            }
        });
    }
    function error(error){
        console.error(error);
    }
    
    function modificar(){
        var idvent = $(this).attr('vl');
        var cc = new ControlCookies();
        cc.guardar("identiventa",idvent);
        setTimeout("location.href='ModificarVenta.jsp'", 0);
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


