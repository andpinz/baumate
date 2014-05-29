(function($) {
    listarProyectos();
//    $('#btnbuscar').on('click',cargarOrdenes);
    $('#btnBuscarId').on('click', buscador);
    $('#btnCantidadrecibida').on('click', modificarSolicitud);


    function buscador() {
        var idproyect = $('#cboProyecto').val();

        $.ajax({
            'url': 'listarsolicitudes',
            'data': {
                'idproyecto': idproyect
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblSolicitudes');
                content.html('');
                var d2 = $('<tr>');
                var td = $('<td>').text("fecha pedido");
                d2.append(td);
                var td = $('<td>').text("fecha recibido");
                d2.append(td);
                td = $('<td>').text("proveedor");
                d2.append(td);
                td = $('<td>').text("Seleccionar");
                d2.append(td);
                content.append(d2);

                data.each(function(i, item) {
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.fechapedido);
                    d2.append(td);

                    td = $('<td>');
                    var caja = $('<input>');
                    caja.attr('type', 'date');
                    caja.attr('id', 'txtfecharecibido' + i);
                    caja.val(item.fecharecibido);
                    caja.attr('vl', i);
                    td.append(caja);
                    d2.append(td);
                    td = $('<td>').text(item.idproveedor.nombreempresa)
                    d2.append(td)
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type', 'button');
                    tdi.attr('value', '→'); //26
                    tdi.attr('id', 'proy' + i);
                    tdi.attr('vl', item.idsolicitud);
                    td.append(tdi);
                    d2.append(td);
                    content.append(d2);

                    $('#proy' + i).on('click', cargarOrdenes);
                });
            }
        });

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

    function cargarOrdenes() {
        var idsolicitud = $(this).attr('vl');
        $('#txtidsolicitud').val(idsolicitud);
        var fecharecibido = $('#txtfecharecibido').val();
        $.ajax({
            'url': 'consultarcolicitudasignada',
            'data': {
                'idsolicitud': idsolicitud,
                'fecharecibido': fecharecibido
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tblSolicitudesAsignadas');
                content.html('');
                var d2 = $('<tr>');
                var td = $('<td>').text("Nombre material");
                d2.append(td);
                var td = $('<td>').text("cantidad solicitada");
                d2.append(td);
                td = $('<td>').text("cantidad recibida");

                d2.append(td);
//                     td = $('<td>').text("Id Solicitud");
//                    d2.append(td);
//                     td = $('<td>').text("Id material");
//                    d2.append(td);

                content.append(d2);

                data.each(function(i, item) {
                    var contador = 1;
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.idmaterial.nombre);
                    d2.append(td);
                    td = $('<td>').text(item.cantidadsolicitada);
                    d2.append(td);
                    td = $('<td>');
                    var caja = $('<input>');
                    caja.attr('type', 'text');
                    caja.attr('value', +item.cantidadrecibida);
                    caja.attr('id', 'txtCantidadrecibida' + i);
                    caja.attr('vl', i);

                    td.append(caja);
                    d2.append(td);


                    td = $('<td>');
                     var idcajita = $('<input>');
                    idcajita.attr('type','hidden');
                    idcajita.attr('value', +item.idsolicitud.idsolicitud);
                    idcajita.attr('id','txtidsolicitud'+i);
                
                    td.append(idcajita);
                    d2.append(td);
//                    

                    td = $('<td>');
                    var idmaterial = $('<input>');
                    idmaterial.attr('type', 'hidden');
                    idmaterial.attr('value', +item.idmaterial.idmateriales);
                    idmaterial.attr('id', 'txtidmaterial' + i);
                    td.append(idmaterial);
                    d2.append(td);
                    content.append(d2);
                    
                       td = $('<td>');
                    var idmaterial = $('<input>');
                    idmaterial.attr('type', 'checkbox');
                    idmaterial.attr('name', "estado");
                    idmaterial.attr('value', item.estado);
                    idmaterial.attr('id', 'checkestado'+i);
                    td.append(idmaterial);
                    
                    d2.append(td);
                    content.append(d2);
                         if (item.estado == 1) {
                         idmaterial.attr("checked",false);
                    } else {
                        idmaterial.attr("checked",true);
                    }
//                   

                    $('#txtcontadorcajas').val(i);
                }
                );
                ﻿
            }
        });

    }
    function modificarSolicitudAsignada() {


        for (i = 0; i <= $('#txtcontadorcajas').val(); i++)
        {

            $.ajax({
                'url': 'modificarsolicitudasignada',
                'data': {
                    'idsolicitud': $('#txtidsolicitud' + i).val(),
                    'idmaterial': $('#txtidmaterial' + i).val(),
                    'cantidadrecibida': $('#txtCantidadrecibida' + i).val(),
                    'estado': $('#checkestado'+i).val()

//                'cantidadrecibida': cantidadrecibida



                },
                'type': 'POST',
                'error': error,
                'success': function(data) {
                    //data = $(JSON.parse(data))
                    if (data == 1) {
                        alert('se logro modificar la cantidad y la fecha');
                        setTimeout("location.href='administrador.jsp'", 500);
                    } else {
                        alert('no se logro modificar la cantidad y la fecha');
                    }
                }
            });
        }
    }
    function modificarSolicitud() {


        for (i = 0; i <= $('#txtcontadorcajas').val(); i++)
        {


            $.ajax({
                'url': 'modificarsolicitudfecharecibido',
                'data': {
                    'idsolicitud': $('#txtidsolicitud').val(),
                    'fecharecibido': $('#txtfecharecibido' + i).val()

//                'cantidadrecibida': cantidadrecibida



                },
                'type': 'POST',
                'error': error,
                'success': function(data) {
                    //data = $(JSON.parse(data))
                    if (data == 1) {
                        modificarSolicitudAsignada();
                        
                        setTimeout("location.href='administrador.jsp'", 500);
                    } else {
                        alert('no se logro modficar la fecha');
                    }
                }
            });
        }
    }
    function error(error) {
        console.error(error);
    }



})(jQuery);
