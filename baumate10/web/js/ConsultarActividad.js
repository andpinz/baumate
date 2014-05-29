(function($){
    listarActividad();
    listarProyectos();
    $('#btnBuscarId').on('click',buscador);
    
    
    function listarActividad(){
        $.ajax({
            'url':'listaractividad',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblActividades');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Descrición");
                    d2.append(td);
                    td = $('<td>').text("Àrea");
                    d2.append(td);
                    td = $('<td>').text("Proyecto");
                    d2.append(td);
                    td = $('<td>').text("Tipo de piso");
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
                    content.append(d2);
                });
            }
        });
        
    }
    
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
                    content.append(d2);
                });
            }
        });
        
    }
    
    function error(error){
        console.error(error);
    }
    
    
    
})(jQuery);
