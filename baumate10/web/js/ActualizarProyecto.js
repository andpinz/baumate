(function($) {
    listarCiudades();
    listarCiudades2();
    $('#btnGuardar').on('click', modificar);
    $('#btnBuscarId').on('click', buscador);
    //$('#btnBuscarId').on('click',consultarProyecto);
    $('#btnLimpiar').on('click', limpiarinformacion);

    $('#btnAddCiudad').on('click', popupciudad);
    $('#btnCancelarCiudad').on('click', cancelarCiudad);
    $('#btnGuardarCiudad').on('click', insertarciudad);
    //init();

    $('#btnAddVenta').on('click', popupVenta);
    $('#btnCancelarVenta').on('click', cancelarVenta);

    $('#btnBuscarIdProy').on('click', popupBuscador);
    $('#btnCancelarProy').on('click', cancelarBuscador);
    init();
    insertores();
    init2();

    function consultarActividades(str) {
        $.ajax({
            'url': 'buscaractividad',
            'data': {
                'idproyecto': str
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                data.each(function(i, item) {
                    var ins = $('#insActividades');
                    var tr = $('<tr>').attr('id', 'tr' + i);
                    var td = $('<td>');
                    var input = $('<textArea>').attr('id', 'txtDescripcionAct' + i).attr('type', 'text').val(item.descripcion);
                    td.append(input);
                    //tr.append(td);
                    //var td = $('<td>');
                    var input = $('<input>').attr('id', 'txtIdAct' + i).attr('type', 'hidden').val(item.codigo);
                    td.append(input);
                    tr.append(td);
                    var td = $('<td>');
                    var input = $('<input>').attr('id', 'txtAreaAct' + i).attr('type', 'text').val(item.area);
                    td.append(input);
                    tr.append(td);
                    var td = $('<td>');
                    var input = $('<select>').attr('id', 'cbotipopisoAct' + i);
                    //input.val($('#cbotipopisoAct').val());
                    listartipopisosDin('#cbotipopisoAct' + i, item.idtipopiso.codigo);
                    td.append(input);
                    tr.append(td);
                    var td = $('<td>');
                    var input = $('<input>').attr('id', 'btnElimAct' + i).attr('type', 'button').attr('vl', i).attr('enBd', 1).on('click', elimAct).val('-');
                    //enBd indica si viene de la base de datos
                    td.append(input);
                    tr.append(td);
                    ins.before(tr);
                });
            }
        });

    }

    function insertores() {
        listartipopisos();
        $('#btnAgregarAct').on('click', addAct);
    }
    function limpiarInsertores() {
        $('#txtDescripcionAct').val('');
        $('#txtAreaAct').val('');
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
//        tr.append(td);
//        var td = $('<td>');
        var input = $('<input>').attr('id', 'txtIdAct' + (nft - 2)).attr('type', 'hidden').val('');
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
        var input = $('<input>').attr('id', 'btnElimAct' + (nft - 2)).attr('type', 'button').attr('vl', (nft - 2)).attr('enBd', 0).on('click', elimAct).val('-');
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
            var txtIdAct = $('#txtIdAct' + i).val();
            if (tipopisoAct != "" && tipopisoAct != undefined) {
                var act = new Array(txtDesAct, txtAreaAct, tipopisoAct, txtIdAct);
                listact[listact.length] = act;
            }
        }
        return listact;
    }
    function elimAct() {
        var intf = $(this).attr('vl');
        var enBd = $(this).attr('enBd');
        if (enBd == 1) {
            var id = $('#txtIdAct' + intf).val();
            $.ajax({
                'url': 'eliminaractividad',
                'data': {
                    'codigo': id
                },
                'type': 'POST',
                'error': error,
                'success': function(data) {
                    //data = $(JSON.parse(data))
                    if (data == 1) {
//                        alertify.log('se logro eliminar la actividad satisfactoriamente');
//                        //setTimeout("location.href='administrador.jsp'", 500);
//                        $('#btnBuscarId').click();
//                    }else{
//                        alertify.error('no se logro eliminar la actividad');
                        $('#tr' + intf).remove();
                    }
                }
            });
        } else {
            $('#tr' + intf).remove();
        }
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
    function cancelarBuscador() {
        $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
        $('#txtNombreBs').val('');
        //listarCiudades();
    }
    function popupBuscador() {
        var type = $(this).attr('data-type');

        $('#winProyectos').fadeIn(function() {
            window.setTimeout(function() {
                $('.window-container.' + type).addClass('window-container-visible');
            }, 100);
        });
    }

    function init2() {
        var cc = new ControlCookies();
        var str = cc.consultarRefinado("idproyectomod");
        if (str != "" && str != undefined) {
            consultarProyecto(str);
            cc.eliminar("idproyectomod");
        }
        var cf = new ControlFecha();
        $('#txtFechaIni').val(cf.hoy());
        $('#txtFechaFin').val(cf.hoy());
        $('#txtFechaIni').blur(function() {
            var vf = new ControlFecha();
            if (!(vf.comparar($('#txtFechaFin').val(), $('#txtFechaIni').val()))) {
                $('#lblfecha').text('la fecha final debe ser mayor a la fecha de inicio');
            }
        });
        $('#txtFechaFin').blur(function() {
            var vf = new ControlFecha();
            if (!(vf.comparar($('#txtFechaFin').val(), $('#txtFechaIni').val()))) {
                $('#lblfecha').text('la fecha final debe ser mayor a la fecha de inicio');
            }
        });
    }
    function consultarProyecto(str) {
        $.ajax({
            'url': 'consultarproyecto',
            'data': {
                'idproyecto': str
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                data.each(function(i, item) {
                    $('#txtidproy').val(item.idproyecto);
                    $('#txtNombre').val(item.Nombre);
                    $('#cboCiudad').val(item.idciudad.idciudad);
                    $('#txtFechaIni').val(item.fechainicio);
                    $('#txtFechaFin').val(item.fechafinal);
                    $('#txtDireccion').val(item.direccion);
                    $('#txtGanancias').val(item.ganancias);
                    $('#txtPresupuesto').val(item.totalPresupuesto);
                    //$('#txtIdEmpleado').val(item.idempleado.idempleado);
                    consultarActividades($('#txtidproy').val());
                });
            }
        });
    }
    function buscador() {
//        var txtNombre = $('#txtNombre').val();
//        var cboCiudad = $('#cboCiudad').val();
        var txtNombre = $('#txtNombreBs').val();
        var cboCiudad = $('#cboCiudad2').val();

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
                td = $('<td>').text("Cargar");
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
                    tdi.attr('value', '→');
                    tdi.attr('id', 'selectProy' + item.idproyecto);
                    tdi.attr('vl', item.idproyecto);
                    tdi.on('click', cargar);
                    td.append(tdi);
                    d2.append(td);

                    content.append(d2);
                });
            }
        });
    }
    function cargar() {
        var str = $(this).attr('vl');
        consultarProyecto(str);
        $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');

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
        $('#txtidproy').val('');
        $('#txtNombre').val('');
        $('#txtFechaIni').val('');
        $('#txtFechaFin').val('');
        $('#txtDireccion').val('');
        $('#txtGanancias').val('');
        $('#txtTelefono').val('');
        $('#txtPresupuesto').val('');
        limpiarInsertores();
        $('#txtVenta').text('');
        $('#hdidventa').val('');
        var cf = new ControlFecha();
        $('#txtFechaIni').val(cf.hoy());
        $('#txtFechaFin').val(cf.hoy());
        
        limpiarTablaActividades();
        limpiarTablaBusqueda();
    }
    function limpiarTablaActividades(){
        //var nft = $('#tblActividades >tbody >tr').length;
        var ins = $('#insActividades');
        var tit = $('#tituloActividades');
        var tabla = $('#tblActividades');
        tabla.html('');
        tabla.append(tit).append(ins);
    }
    function limpiarTablaBusqueda(){
        var tabla = $('#tblProyectos');
        tabla.html('');        
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
    function listarCiudades2() {
        $.ajax({
            'url': 'listarciudades',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboCiudad2');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.nombreciudad);
                    d2.attr('value', item.idciudad);
                    content.append(d2);
                });
            }
        });
    }
    function modificar() {
        $.ajax({
            'url': 'actualizarproyectos',
            'data': {
                'idproyecto': $('#txtidproy').val(),
                'nombre': $('#txtNombre').val(),
                'ciudad': $('#cboCiudad').val(),
                'fechaini': $('#txtFechaIni').val(),
                'fechafin': $('#txtFechaFin').val(),
                'direccion': $('#txtDireccion').val(),
                'ganancia': 0, //$('#txtGanancias').val(),
                'presupuesto': $('#txtPresupuesto').val(),
//                'idempleado':$('#txtIdEmpleado').val()
                'actividades': JSON.stringify(arregloActividades())
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data == 1) {
                    alertify.log('se logro modificar el proyecto satisfactoriamente');
                    //setTimeout("location.href='administrador.jsp'", 500);
                    limpiarinformacion();
                } else {
                    alertify.error('no se logro modificar el proyecto');
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
            modificar();
        }
    }


})(jQuery);