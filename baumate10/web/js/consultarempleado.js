(function($){
    buscador();
    $('#btnbuscar').on('click',buscador);

    
    function buscador(){
        var txtdocumento = $('#txtdocumento').val();
        var txtnombre = $('#txtnombre').val();
       
        $.ajax({
            'url':'buscarempleado',
            'data':{
                'documento':txtdocumento,
                'nombre':txtnombre
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblEmpleado');
                content.html('');
                    var d2 = $('<tr>');
//                    var td = $('<td>').text("id");
//                    d2.append(td);
                    td = $('<td>').text("Primer Nombre");
                    d2.append(td);
                    td = $('<td>').text("Segundo Nombre");
                    d2.append(td);
                    td = $('<td>').text("Primer Apellido");
                    d2.append(td);
                    td = $('<td>').text("Segundo Apellido");
                    d2.append(td);
                    td = $('<td>').text("Direcciòn");
                    d2.append(td);
                    td = $('<td>').text("Telèfono");
                    d2.append(td);
                    td = $('<td>').text("Salario");
                    d2.append(td);
                    td = $('<td>').text("Fecha de nacimiento");
                    d2.append(td);
                    td = $('<td>').text("Cargo");
                    d2.append(td);
                    td = $('<td>').text("Tipo documento");
                    d2.append(td);
                    td = $('<td>').text("Documento");
                    d2.append(td);
                   
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.primernombre);
                    d2.append(td);
                    td = $('<td>').text(item.segundonombre);
                    d2.append(td);
                    td = $('<td>').text(item.primerapellido);
                    d2.append(td);
                    td = $('<td>').text(item.segundoapellido);
                    d2.append(td);
                    td = $('<td>').text(item.direccion);
                    d2.append(td);
                    td = $('<td>').text(item.telefono);
                    d2.append(td);
                    td = $('<td>').text(item.salario);
                    d2.append(td);
                    td = $('<td>').text(item.fechanacimiento);
                    d2.append(td);
                    td = $('<td>').text(item.idcargo.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.tipodocumento.descripcion);
                    d2.append(td);
                    td = $('<td>').text(item.documento);
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
