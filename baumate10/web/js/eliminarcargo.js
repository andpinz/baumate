(function($){
   
    $('#btnBuscar').on('click',buscador);
    
    function buscador(){
        var txtnombre = $('#txtnombre').val();
       
        
        $.ajax({
            'url':'listarcargo',
            'data':{
                'nombre':txtnombre
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblCargo');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("id");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idcargo);
                    d2.append(td);
                    td = $('<td>').text(item.nombre);
                    d2.append(td);
                    
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','car'+item.idcargo);
                    tdi.attr('vl',item.idcargo);
                    
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    
                    
                    $('#car'+item.idcargo).on('click',eliminar);
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
            'url':'eliminarcargo',
            'data':{
                'idCargo': id
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro eliminar el proyecto satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro eliminar el proyecto');
                }
            }
        });
        
    }
    
})(jQuery);


