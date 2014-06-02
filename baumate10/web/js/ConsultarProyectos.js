(function($) {
    listarProyectos();
    buscador();
    listarCiudades();

    $('#btnBuscar').on('click', buscador);


    function listarProyectos() {
        $.ajax({
            'url': 'listarproyectos',
            'type': 'POST',
            'error': error,
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
                td = $('<td>').text("Modificar");
                d2.append(td);
                td = $('<td>').text("Eliminar");
                d2.append(td);

                content.append(d2);

                data.each(function(i, item) {
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
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type', 'button');
                    tdi.attr('value', 'modificar');
                    tdi.attr('id', 'modProy' + item.idproyecto);
                    tdi.attr('vl', item.idproyecto);
                    td.append(tdi);
                    d2.append(td);
                    //content.append(d2);
                    
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type', 'button');
                    tdi.attr('value', 'Eliminar');
                    tdi.attr('id', 'proy' + item.idproyecto);
                    tdi.attr('vl', item.idproyecto);
                    td.append(tdi);
                    d2.append(td);
                    //content.append(d2);

                    content.append(d2);
                    $('#modProy' + item.idproyecto).on('click', modificar);
                    $('#proy' + item.idproyecto).on('click', eliminar);
                });
            }
        });

    }
    
    function modificar(){
        var idproy = $(this).attr('vl');
        var cc = new ControlCookies();
        cc.guardar("idproyectomod",idproy);
        setTimeout("location.href='ActualizarProyecto.jsp'", 0);
    }
    
    function eliminar(){
        var id = $(this).attr('vl');
        $.ajax({
            'url': 'eliminarproyecto',
            'data': {
                'idproyecto': id
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data == 1) {
                    alertify.log('se logro eliminar el proyecto satisfactoriamente');
                    //setTimeout("location.href='administrador.jsp'", 500);
                    $('#btnBuscar').click();
                } else {
                    alertify.error('no se logro crear el proyecto');
                }
            }
        });
    }

    function listarCiudades() {
        $.ajax({
            'url': 'listarciudades',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboCiudad');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.nombreciudad);
                    d2.attr('value', item.idciudad);
                    content.append(d2);
                });
            }
        });
    }

    function buscador() {
        var txtNombre = $('#txtNombre').val();
        var cboCiudad = $('#cboCiudad').val();

        $.ajax({
            'url': 'buscarproyecto',
            'data': {
                'nombre': txtNombre,
                'ciudad': cboCiudad
            },
            'type': 'POST',
            'error': error,
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
                td = $('<td>').text("Modificar");
                d2.append(td);
                td = $('<td>').text("Eliminar");
                d2.append(td);

                content.append(d2);

                data.each(function(i, item) {
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
                    td = $('<td>')
                    var tdi = $('<input>');
                    tdi.attr('type', 'button');
                    tdi.attr('value', 'modificar');
                    tdi.attr('id', 'modProy' + item.idproyecto);
                    tdi.attr('vl', item.idproyecto);
                    td.append(tdi);
                    d2.append(td);
                    //content.append(d2);
                    $('#modProy' + item.idproyecto).on('click', modificar);
                    
                    td = $('<td>')
                    var tdi = $('<input>');
                    tdi.attr('type', 'button');
                    tdi.attr('value', 'Eliminar');
                    tdi.attr('id', 'proy' + item.idproyecto);
                    tdi.attr('vl', item.idproyecto);
                    td.append(tdi);
                    d2.append(td);
                    //content.append(d2);
                    $('#proy' + item.idproyecto).on('click', eliminar);

                    content.append(d2);
                });
            }
        });

    }

    function error(error) {
        console.error(error);
    }



})(jQuery);

