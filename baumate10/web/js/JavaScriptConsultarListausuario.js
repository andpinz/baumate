(function($){
    listarusuarios();
        $('#btnConsultar').on('click',buscarUsuario);
        $('#btnCancelar').on('click',Cancelar);
        
                function Cancelar(){
        $.ajax({
            'type':'POST',
            'error':error,
            'success': function(data) {
                document.getElementById("buscar").value=""; 
                listarusuarios();
            }
        });
    }
        
        function listarusuarios(){
        $.ajax({
            'url':'listarusuario',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblUsuario');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Correo");
                    d2.append(td);
                    td = $('<td>').text("Rol");
                    d2.append(td);
                    td = $('<td>').text("Estado");
                    d2.append(td);
                    content.append(d2);
                data.each(function(i,item){                                        
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.correo);
                    d2.append(td);
                    td = $('<td>').text(item.rol.nombrerol);
                    d2.append(td);
                    if(item.estado==1){
                        var estado="Activo";
                    }else if(item.estado==0){
                        estado="Inactivo"
                    }
                    td = $('<td>').text(estado);
                    d2.append(td);;
                    content.append(d2);
                });
            }
        });
    }
    
        function buscarUsuario(){
                 var correo = $('#buscar').val();
                  if (correo=="") {
                      alertify.log("Por favor ingrese un correo a buscar.");  
                }else{
        $.ajax({
            'url':'buscarusuario',
            'data':{
                'correo': correo
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if(data==0){
                alertify.error("<b>Error-usuario no encontrado:</b><br>Por favor verifique el correo ingresado.");
                    }else{
                data = $(JSON.parse(data));
                var content = $('#tblUsuario');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Correo");
                    d2.append(td);
                    td = $('<td>').text("Rol");
                    d2.append(td);
                    td = $('<td>').text("Estado");
                    d2.append(td);
                    content.append(d2);
                data.each(function(i,item){                    
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.correo);
                    d2.append(td);
                    td = $('<td>').text(item.rol.nombrerol);
                    d2.append(td);
                    if(item.estado==1){
                        var estado="Activo";
                    }else if(item.estado==0){
                        var estado="Inactivo"
                    }
                    td = $('<td>').text(estado);
                    d2.append(td);
                    content.append(d2);
                });
            }
        }
        });
            }
    }

    function error(error){
        console.error(error);
    }
    
})(jQuery);