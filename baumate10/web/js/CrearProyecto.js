(function($) {
    listarCiudades();
    $('#btnGuardar').on('click', valing);
    $('#btnLimpiar').on('click', limpiarinformacion);
    $('#btnAddCiudad').on('click', popupciudad);
    $('#btnAddVenta').on('click', popupVenta);
    $('#btnCancelarCiudad').on('click', cancelarCiudad);
    $('#btnCancelarVenta').on('click', cancelarVenta);
    init();
    $('#btnGuardarCiudad').on('click', insertarciudad);
    $('#btnBuscarVenta').on('click', buscarVenta);
    insertores();
    listarTipoVenta();
    function listarTipoVenta() {
        $.ajax({
            'url': 'listaridentiventa',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#tipVent');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.tipoidentificacionventa);
                    d2.attr('value', item.ididentificacionventa);
                    content.append(d2);
                });
            }
        });
    }
    function buscarVenta() {
        $.ajax({
            'url': 'buscarventa',
            'data': {
                'tipoventa': $('#txtVenta').val(),
                'identificacion': $('#tipVent').val()
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblventa');
                content.html('');
                var tr = $('<tr>');
                var td = $('<td>').text('Numero de Registro');
                tr.append(td);
                var td = $('<td>').text('tipo de identificacion venta');
                tr.append(td);
                var td = $('<td>').text('fecha ');
                tr.append(td);
                var td = $('<td>').text('Nombre del cliente');
                tr.append(td);
                var td = $('<td>').text('Valor');
                tr.append(td);
                var td = $('<td>').text('Cargar');
                tr.append(td);
                content.append(tr);
                data.each(function(i, item) {
                    var tr = $('<tr>');
                    var td = $('<td>').text(item.identificacion);
                    tr.append(td);
                    var td = $('<td>').text(item.tipoventa.tipoidentificacionventa);
                    tr.append(td);
                    var td = $('<td>').text(item.fecha);
                    tr.append(td);
                    var td = $('<td>').text(item.idcliente.primerNombre + ' ' + item.idcliente.SegundoNombre + ' ' + item.idcliente.PrimerApellido + ' ' + item.idcliente.SegundoApellido);
                    tr.append(td);
                    var td = $('<td>').text(item.valor);
                    tr.append(td);
                    var td = $('<td>');
                    var input = $('<input>').attr('id', 'btnSelVent'+i).attr('type', 'button')
                            .attr('vl', item.idventa)
                            .attr('vlvent', item.valor)
                            .attr('iden', item.identificacion)
                            .attr('tipven', item.tipoventa.tipoidentificacionventa)
                            .on('click', selectVenta).val('→');
                    td.append(input);
                    tr.append(td);

                    content.append(td);
                });
            }
        });
    }
    function selectVenta(){
        $('#hdidventa').val($(this).attr('vl'));
        $('#lblVentaSel').val($(this).attr('iden') + ' ' + $(this).attr('tipven'));
        $('#txtPresupuesto').val($(this).attr('vlvent'));
        $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
    }
    function insertores() {
        listartipopisos();
        $('#btnAgregarAct').on('click', addAct);
    }
    function limpiarInsertores() {
        $('#txtDescripcionAct').val('');
        $('#txtAreaAct').val('');
        limpiarTablaActividades();
    }
    function limpiarTablaActividades() {
        //var nft = $('#tblActividades >tbody >tr').length;
        var ins = $('#insActividades');
        var tit = $('#tituloActividades');
        var tabla = $('#tblActividades');
        tabla.html('');
        tabla.append(tit).append(ins);

    }
    function listartipopisosDin(cbo, valor) {
        $.ajax({
            'url': 'listartipopisos',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $(cbo);
                content.html('');
                data.each(function(i, item) {
                    var d2;
                    if (item.codigo == valor) {
                        var d2 = $('<option selected>').text(item.nombre);
                    } else {
                        var d2 = $('<option>').text(item.nombre);
                    }
                    d2.attr('value', item.codigo)
                    content.append(d2);
                });
            }
        });
    }
    function addAct() {
        var nft = $('#tblActividades >tbody >tr').length;
        var ins = $('#insActividades');
        var tr = $('<tr>').attr('id', 'tr' + (nft - 2));
        var td = $('<td>');
        var input = $('<textArea>').attr('id', 'txtDescripcionAct' + (nft - 2)).attr('type', 'text').val($('#txtDescripcionAct').val());
        td.append(input);
        tr.append(td);
        var td = $('<td>');
        var input = $('<input>').attr('id', 'txtAreaAct' + (nft - 2)).attr('type', 'text').val($('#txtAreaAct').val());
        td.append(input);
        tr.append(td);
        var td = $('<td>');
        var input = $('<select>').attr('id', 'cbotipopisoAct' + (nft - 2));
        //input.val($('#cbotipopisoAct').val());
        listartipopisosDin('#cbotipopisoAct' + (nft - 2), $('#cbotipopisoAct').val())
        td.append(input);
        tr.append(td);
        var td = $('<td>');
        var input = $('<input>').attr('id', 'btnElimAct' + (nft - 2)).attr('type', 'button').attr('vl', (nft - 2)).on('click', elimAct).val('-');
        td.append(input);
        tr.append(td);
        ins.before(tr);
    }
    function arregloActividades() {
        var nft = ($('#tblActividades >tbody >tr').length) - 2;
        var listact = new Array();
        for (var i = 0; i < nft; i++) {
            var txtDesAct = $('#txtDescripcionAct' + i).val();
            var txtAreaAct = $('#txtAreaAct' + i).val();
            var tipopisoAct = $('#cbotipopisoAct' + i).val();
            if (tipopisoAct != "" && tipopisoAct != undefined) {
                var act = new Array(txtDesAct, txtAreaAct, tipopisoAct);
                listact[listact.length] = act;
            }
        }
        return listact;
    }
    function elimAct() {
        var intf = $(this).attr('vl');
        $('#tr' + intf).remove();
    }
    function listartipopisos() {
        $.ajax({
            'url': 'listartipopisos',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#cbotipopisoAct');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.nombre);
                    d2.attr('value', item.codigo);
                    content.append(d2);
                });
            }
        });
    }

    function cancelarVenta() {
        $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
        $('#txtVenta').val('');
        //listarCiudades();
    }
    function popupVenta() {
        var type = $(this).attr('data-type');

        $('#winVenta').fadeIn(function() {
            window.setTimeout(function() {
                $('.window-container.' + type).addClass('window-container-visible');
            }, 100);
        });
    }
    function cancelarCiudad() {
        $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
        $('#txtCiudad').val('');
        listarCiudades();
    }
    function popupciudad() {
        var type = $(this).attr('data-type');

        $('#winCiudad').fadeIn(function() {
//        $('.overlay-container').fadeIn(function() {
            window.setTimeout(function() {
                $('.window-container.' + type).addClass('window-container-visible');
            }, 100);
        });
    }
    function insertarciudad() {
        var txtCiudad = $('#txtCiudad').val();
        $.ajax({
            'url': 'insertarciudad',
            'data': {
                'ciudad': txtCiudad
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data == 1) {
                    alertify.log('se logro crear la unidad de medida satisfactoriamente');
                    $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
                    $('#txtCiudad').val('');
                    listarCiudades();
                } else {
                    alertify.error('no se logro crear la unidad de medida');
                }
            }
        });
    }
    function limpiarinformacion() {
        $('#txtNombre').val('');
        $('#txtFechaIni').val('');
        $('#txtFechaFin').val('');
        $('#txtDireccion').val('');
        //$('#txtGanancias').val('');
        $('#txtTelefono').val('');
        $('#txtPresupuesto').val('');
        var cf = new ControlFecha();
        $('#txtFechaIni').val(cf.hoy());
        $('#txtFechaFin').val(cf.hoy());
        limpiarInsertores();
    }
    function init() {

        var vm = new validadores();
        $('#txtNombre').blur(vm.validarcamposvacios);
        $('#txtPresupuesto').blur(vm.validarnumerocamposvacios);
        $('#txtDireccion').blur(vm.validarcamposvacios);
        var cf = new ControlFecha();
        $('#txtFechaIni').val(cf.hoy());
        $('#txtFechaFin').val(cf.hoy());
        $('#txtFechaIni').blur(function() {
            var vf = new ControlFecha();
            if (!(vf.comparar($('#txtFechaFin').val(), $('#txtFechaIni').val()))) {
                $('#lblfecha').text('la fecha final debe ser mayor a la fecha de inicio');
            } else {
                $('#lblfecha').text('');
            }
        });
        $('#txtFechaFin').blur(function() {
            var vf = new ControlFecha();
            if (!(vf.comparar($('#txtFechaFin').val(), $('#txtFechaIni').val()))) {
                $('#lblfecha').text('la fecha final debe ser mayor a la fecha de inicio');
            } else {
                $('#lblfecha').text('');
            }
        });
    }
    function listarCiudades() {
        $.ajax({
            'url': 'listarciudades',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
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
    function insertar() {
        var txtNombre = $('#txtNombre').val();
        var cboCiudad = $('#cboCiudad').val();
        var txtFechaIni = $('#txtFechaIni').val();
        var txtFechaFin = $('#txtFechaFin').val();
        var txtDireccion = $('#txtDireccion').val();
        //var txtGanancias = $('#txtGanancias').val();
        var txtPresupuesto = $('#txtPresupuesto').val();
        var idventa = $('#hdidventa').val();

        $.ajax({
            'url': 'insertarproyecto',
            'data': {
                'nombre': txtNombre,
                'ciudad': cboCiudad,
                'fechaini': txtFechaIni,
                'fechafin': txtFechaFin,
                'direccion': txtDireccion,
                'ganancia': 0,
                'presupuesto': txtPresupuesto,
                'idventa': idventa,
                'actividades': JSON.stringify(arregloActividades())
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data == 1) {
                    alertify.log('se logro crear el proyecto satisfactoriamente');
                    //setTimeout("location.href='administrador.jsp'", 500);
                    limpiarinformacion();
                } else {
                    alertify.error('no se logro crear el proyecto');
                }
            }
        });

    }
    function error(error) {
        console.error(error);
    }
    function valing() {
        var ob = $([
            {
                'nom': 'txtNombre',
                'tip': 3 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                , 'lbl': 'lblnombre'
            },
            {
                'nom': 'txtPresupuesto',
                'tip': 5//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                , 'lbl': 'lblpresupuesto'
            },
            {
                'nom': 'txtDireccion',
                'tip': 3//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                , 'lbl': 'lbldireccion'
            }

        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        var vf = new ControlFecha();
        if (!(vf.comparar($('#txtFechaFin').val(), $('#txtFechaIni').val()))) {
            $('#lblfecha').text('la fecha final debe ser mayor a la fecha de inicio');
            res = false;
        } else {
            $('#lblfecha').text('');
        }
        if (res) {
            insertar();
        }
    }



})(jQuery);

