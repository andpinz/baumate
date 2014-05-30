(function($){
    listarProyectos();
    listartipopisos();
    $('#btnBuscarId').on('click',buscador);
    
    function listarProyectos(){
        $.ajax({
            'url':'listarproyectos',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboProyecto');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.Nombre);
                    d2.attr('value',item.idproyecto);  
                    content.append(d2);
                });
            }
        });
    }    
    
    function listartipopisos(){
        $.ajax({
            'url':'listartipopisos',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboTipoPiso');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombre);
                    d2.attr('value',item.idactividad);  
                    content.append(d2);
                });
            }
        });
    }    
    
    
    function eliminar(){
       var id = $(this).attr('vl');
        $.ajax({
            'url':'eliminaractividad',
            'data':{
                'codigo': id
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alertify.log('se logro eliminar la acctividad satisfactoriamente');
                    //setTimeout("location.href='administrador.jsp'", 500);
                    $('#btnBuscarId').click();
                }else{
                    alertify.error('no se logro eliminar la actividad');
                }
            }
        });
        
    }
    
    
    function buscador(){
        var idproyect = $('#cboProyecto').val();
        
        $.ajax({
            'url':'buscaractividad',
            'data':{
                'idproyecto':idproyect
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblActividades');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Descripción");
                    d2.append(td);
                    td = $('<td>').text("Àrea");
                    d2.append(td);
                    td = $('<td>').text("Proyecto");
                    d2.append(td);
                    td = $('<td>').text("Tipo de piso");
                    d2.append(td);
                    td = $('<td>').text("Seleccionar");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.descripcion);
                    d2.append(td);
                    td = $('<td>').text(item.area);
                    d2.append(td);
                    td = $('<td>').text(item.idproyecto.Nombre);
                    d2.append(td);
                    td = $('<td>').text(item.idtipopiso.nombre);
                    d2.append(td);
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','Eliminar');
                    tdi.attr('id','proy'+item.codigo);
                    tdi.attr('vl',item.codigo);
                    td.append(tdi);
                    d2.append(td);
                    
                    content.append(d2);
                    
                    $('#proy'+item.codigo).on('click',eliminar);
                });
            }
        });
        
    }
    
    
    function error(error){
        console.error(error);
    }
    
    
    
})(jQuery);