(function($){
    listatipodocumento();
   // $('#btnBuscar').on('click',buscador);
    
    function listatipodocumento(){
        $.ajax({
            'url':'listartipodocumento',
            'type':'POST',
            'error':error,
           'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblTidenti');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Descripción");
                    d2.append(td);
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                     $('#txtNombre').val();
                    $('#codigo').val();
                    
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.descripcion);
                    d2.append(td);
                    
                    
                   td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','pro'+item.idtipoIdentificacion);
                    tdi.attr('vl',item.idtipoIdentificacion);
                   
                    
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    
                    
                    $('#pro'+item.idtipoIdentificacion).on('click',eliminar);
                });
            }
        });
        
    }
    
    function error(error){
        console.error(error);
    }
    
    function eliminar(){
        $.ajax({
            'url':'eliminartipodocumento',
           'data':{
               'idtipoIdentificacion':$(this).attr('vl')
          },
            'error':error,
            'success':function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro eliminar el tipo de documento');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro eliminar el tipo de documento');
                  }
            }
        });
        
    }
    
})(jQuery);





