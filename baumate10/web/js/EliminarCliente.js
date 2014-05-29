(function($){
    listarClientes();
    buscador();
    $('#btnBuscar').on('click',buscador);
    
    function listarClientes(){
        $.ajax({
            'url':'listarcliente',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblCliente');
                content.html('');
                    var d2 = $('<tr>');
//                   var d2 = $('<tr>');
                    var td = $('<td>').text("Documento");
                    d2.append(td);
                    td = $('<td>').text("TipoDocumento");
                    d2.append(td);
                    td = $('<td>').text("Nombre");
                    d2.append(td);
                    td = $('<td>').text("Direcciòn");
                    d2.append(td);
                    td = $('<td>').text("Telèfono");
                    d2.append(td);
                    content.append(d2);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
//                    var td = $('<td>').text(item.idCliente);
//                    d2.append(td);
                    td = $('<td>').text(item.Documento);
                    d2.append(td);
                    td = $('<td>').text(item.idtipoIdentificacion.descripcion);
                    d2.append(td);
                    td = $('<td>').text(item.primerNombre +' '+ item.SegundoNombre +' '+ item.PrimerApellido +' '+ item.SegundoApellido);
                    d2.append(td);
                    td = $('<td>').text(item.direccion);
                    d2.append(td);
                    td = $('<td>').text(item.telefono);
                    d2.append(td);
                    content.append(d2);
                });
            }
        });
        
    }
  
   function buscador(){
        var txtDocumento = $('#txtDocumento').val();
       
        
        $.ajax({
            'url':'consultarcliente',
            'data':{
                'documento':txtDocumento,
               
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblCliente');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Documento");
                    d2.append(td);
                    td = $('<td>').text("TipoDocumento");
                    d2.append(td);
                    td = $('<td>').text("Nombre");
                    d2.append(td);
                    td = $('<td>').text("Direcciòn");
                    d2.append(td);
                    td = $('<td>').text("Telèfono");
                    d2.append(td);
                    td = $('<td>').text("Estado");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.Documento);
                    d2.append(td);
                    td = $('<td>').text(item.idtipoIdentificacion.descripcion);
                    d2.append(td);
                    td = $('<td>').text(item.primerNombre +' '+ item.SegundoNombre +' '+ item.PrimerApellido +' '+ item.SegundoApellido);
                    d2.append(td);
                    td = $('<td>').text(item.direccion);
                    d2.append(td);
                    td = $('<td>').text(item.telefono);
                    d2.append(td);
                   td = $('<td>').text(item.estado);
                    d2.append(td);
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','pro'+item.Documento);
                    tdi.attr('vl',item.Documento);
                    
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    
                    
                    $('#pro'+item.Documento).on('click',eliminar);
                });
            }
        });
        
    }
    
    function error(error){
        console.error(error);
    }
    
    function eliminar(){
        var documento = $(this).attr('vl');
        $.ajax({
            'url':'eliminarcliente',
            'data':{
                'documento': documento
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if (data==1) {
                    alert('se logro eliminar el cliente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro eliminar el cliente');
                }
            }
        });
        
    }
    
})(jQuery);



