(function($){  
    listarProyectos();
      buscador();
    listarCiudades();
  
    $('#btnBuscar').on('click',buscador);
    
    
    function listarProyectos(){
        $.ajax({
            'url':'listarproyectos',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblProyectos');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Nombre");
                    d2.append(td);
                    td = $('<td>').text("Ciudad");
                    d2.append(td);
                    td = $('<td>').text("Direcciòn");
                    d2.append(td);
                    td = $('<td>').text("Fecha inicio");
                    d2.append(td);
                    td = $('<td>').text("Fecha finalización");
                    d2.append(td);
                    
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.Nombre);
                    d2.append(td);
                    td = $('<td>').text(item.idciudad.nombreciudad);
                    d2.append(td);
                    td = $('<td>').text(item.direccion);
                    d2.append(td);
                    td = $('<td>').text(item.fechainicio);
                    d2.append(td);
                    td = $('<td>').text(item.fechafinal);
                    d2.append(td);
                    
                    content.append(d2);
                });
            }
        });
        
    }
    
    
    function listarCiudades(){
        $.ajax({
            'url':'listarciudades',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboCiudad');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombreciudad);
                    d2.attr('value',item.idciudad)  ;
                    content.append(d2);
                });
            }
        });
    }    
    
    function buscador(){
        var txtNombre = $('#txtNombre').val();
        var cboCiudad = $('#cboCiudad').val();
        
        $.ajax({
            'url':'buscarproyecto',
            'data':{
                'nombre':txtNombre,
                'ciudad':cboCiudad
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblProyectos');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Nombre");
                    d2.append(td);
                    td = $('<td>').text("Ciudad");
                    d2.append(td);
                    td = $('<td>').text("Direcciòn");
                    d2.append(td);
                    td = $('<td>').text("Fecha inicio");
                    d2.append(td);
                    td = $('<td>').text("Fecha finalizaciòn");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.Nombre);
                    d2.append(td);
                    td = $('<td>').text(item.idciudad.nombreciudad);
                    d2.append(td);
                     td = $('<td>').text(item.direccion);
                    d2.append(td);
                    td = $('<td>').text(item.fechainicio);
                    d2.append(td);
                    td = $('<td>').text(item.fechafinal);
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

