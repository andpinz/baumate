 (function($){
     listarProyectos();
      $('#btnBuscarId').on('click', buscador);
      function listarProyectos() {
        $.ajax({
            'url': 'listarproyectos',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboProyecto');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.Nombre);
                    d2.attr('value', item.idproyecto);
                    content.append(d2);
                });
            }
        });
    }
     function error(error) {
        console.error(error);
    }
    function buscador(){
       
        $.ajax({
            'url': 'listarsolicitudes',
            'data':{
                'idproyecto': $('#cboProyecto').val()
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblSolicitudes');
                content.html('');
                var trt = $('<tr>');
                var tdt = $('<td>').text('Nùmero de la Orden');
                trt.append(tdt);
                tdt = $('<td>').text('Proveedor');
                trt.append(tdt);
                tdt = $('<td>').text('Fecha de pedido');
                trt.append(tdt);
                tdt = $('<td>').text('Fecha de recibido');
                trt.append(tdt);
                tdt = $('<td>').text('Editar');
                trt.append(tdt);
                content.append(trt);
                data.each(function(i, item) {
                    var tr = $('<tr>');
                    var td = $('<td>');
                    var hd = $('<input>').attr('type','hidden');
                    hd.val(item.idsolicitud);
                    hd.attr('id','hd'+i); 
                    td.text(item.idsolicitud);
                    td.append(hd);
                    tr.append(td);
                    var td = $('<td>');
                    var p = $('<p>').text(item.idproveedor.nombreempresa);
                    p.attr('id','p'+i); 
                    td.append(p);
                    tr.append(td);
                    var td = $('<td>');
                    var p = $('<p>').text(item.fechapedido);
                    p.attr('id','p2'+i); 
                    td.append(p);
                    tr.append(td);
                    var td = $('<td>');
                    var p = $('<p>').text(item.fecharecibido);
                    p.attr('id','p3'+i); 
                    td.append(p);
                    tr.append(td);
                    var td = $('<td>');
                     var btneliminar = $('<input>');
                    btneliminar.attr('type','button');
                    btneliminar.attr('value','Eliminar');
                    btneliminar.attr('id','btneliminar'+i);
                    btneliminar.attr('idsolicitud',item.idsolicitud);
                    td.append(btneliminar)
                    tr.append(td);
                    content.append(tr);
                    $('#btneliminar'+i).on('click',eliminar);
                    
                });
            }
        });
    }
    function eliminar(){
           var id = $(this).attr('idsolicitud');
        $.ajax({
            'url':'eliminarsolicitud',
            'data':{
                'idsolicitud': id
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alertify.log('se logro eliminar la solicitud satisfactoriamente');
                    //setTimeout("location.href='administrador.jsp'", 500);
                    $('#btnBuscarId').click();
                }else{
                    alertify.error('no se logro eliminar la solicitud');
                }
            }
        });
        
    }
    
 })(jQuery);
 
