(function($){
    buscador();
    $('#btnBuscar').on('click',buscador);
    
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
                    td = $('<td>').text("");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                  
                    td = $('<td>').text(item.primernombre);
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
                    td = $('<td>')
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','pro'+item.documento);
                    tdi.attr('vl',item.documento);
                    tdi.attr('class','Eliminar');
                    
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    
                    
                    $('#pro'+item.documento).on('click',eliminar);
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
            'url':'eliminarempleado',
            'data':{
                'documento': documento
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro eliminar el empleado satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro eliminar el empleado');
                }
            }
        });
        
    }
    
})(jQuery);

