(function($){
    listarClientes();
   
    $('#btnBuscar').on('click',buscar);
   
    $('#btnLimpiar').on('click', limpiarinformacion);
    
     function limpiarinformacion() {
        $('#txtDocumento').val('');
    }
    
    function listarClientes(){
        $.ajax({
            'url':'listarcliente',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tbldocumento');
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
    
   
        function buscar(){
        var txtDocumento = $('#txtDocumento').val();
        
        $.ajax({
            'url':'consultarcliente',
            'data':{
                'documento':txtDocumento
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tbldocumento');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Documento");
                    d2.append(td);
                    td = $('<td>').text("Descripciòn");
                    d2.append(td);
                    td = $('<td>').text("Nombre");
                    d2.append(td);
                    td = $('<td>').text("Direcciòn");
                    d2.append(td);
                    td = $('<td>').text("Telèfono");
                    d2.append(td);
                   
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    
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
              
  
    
    function error(error){
        console.error(error);
    }
    
    
    
})(jQuery);

