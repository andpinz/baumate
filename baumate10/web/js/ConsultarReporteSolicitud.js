(function($) {
    listarProyectos();
    $('#btnBuscarId').on('click', buscador);

    function buscador() {

        $.ajax({
            'url': 'listarsolicitudes',
            'data': {
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
                tdt = $('<td>').text('mostrar');
                trt.append(tdt);
                content.append(trt);
                data.each(function(i, item) {
                    var tr = $('<tr>');
                    var td = $('<td>');
                    td = $('<td>').text(item.idsolicitud);
                    tr.append(td);
                    td = $('<td>').text(item.idproveedor.nombreempresa);
                    tr.append(td);
                    td = $('<td>').text(item.fechapedido);
                    tr.append(td);
                    td = $('<td>').text(item.fecharecibido);
                    tr.append(td);
                    td = $('<td>');
                    var caja = $('<a>');
                    caja.attr('id', 'btnreport' + i);
                    caja.attr('href', 'reportsolicitud?idsolicitud='+item.idsolicitud).text('Imprimir');
                    td.append(caja);
                    tr.append(td);


                    tr.append(td);

                    content.append(tr);


                });
            }
        });
    }
    function imprimirsolicitudes() {
        var idsolicitud = $(this).attr('vl');
        $.ajax(
                {
                    
                    'url': 'reportsolicitud',
                    data: {
                        'idsolicitud': idsolicitud
                    },
                    'type': 'POST',
                    'error': error,
                    'succes': function(data) {
                        data = $(JSON.parse(data));
                        


                    }
                })
    }

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


})(jQuery);