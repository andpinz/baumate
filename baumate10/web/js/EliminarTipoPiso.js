(function($) {
    listar();
//    $('#btnBuscar').on('click', buscador);
//  function listar() {
//        $.ajax({
//            'url':'listartipopisos',
//            'data':{
//            },
//            'type':'POST',
//            'error':error,
//           'success': function(data) {
//                data = $(JSON.parse(data));
//                var content = $('#tbltipopiso');
//                content.html('');
//                    var d2 = $('<tr>');
//                    var td = $('<td>').text("codigo");
//                    d2.append(td);
//                    td = $('<td>').text("Nombre");
//                    d2.append(td);
//                    
//                    content.append(d2);
//                    
//                data.each(function(i,item){
//                    var d2 = $('<tr>');
//                    var td = $('<td>').text(item.codigo);
//                    d2.append(td);
//                    td = $('<td>').text(item.nombre);
//                    d2.append(td);
//                    
//                    content.append(d2);
//                });
//            }
//        });
//        
//    }    
     
  function listar() {
        
//      var codigo = $('#codigo').val();
        
        $.ajax({
            'url':'listartipopisos',
//            'data':{
//                'nombre':codigo
//            },
            'type':'POST',
            'error':error,
           'success': function(data) {
                data = $(JSON.parse(data));
                
                var content = $('#tbltipopiso');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("codigo");
                    d2.append(td);
                    td = $('<td>').text("Nombre");
                    d2.append(td);
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                    $('#txtNombre').val(item.nombre);
                    $('#codigo').val();
                    
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.codigo);
                    d2.append(td);
                    td = $('<td>').text(item.nombre);
                    d2.append(td);
                    
                    
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','pro'+item.codigo);
                    tdi.attr('vl',item.codigo);
                    
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);
                    
                    
                    $('#pro'+item.codigo).on('click',eliminar);
                });
            }
        });
        
    }
    
    
    function error(error){
        console.error(error);
    }
    
    function eliminar(){
       $.ajax({
           'url':'eliminartipopiso',
           'data':{
               'codigo': $(this).attr('vl')  //$('#codigo').val()
               //'nombre':$('#txtNombre').val()
          },
            'error':error,
            'success':function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro eliminar el tipo piso');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro eliminar el tipo piso');
                }
            }
        });
        
    }
    
})(jQuery);





