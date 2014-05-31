(function($) {
    listarCiudades();
    $('#btnGuardar').on('click', modificar);
    $('#btnBuscarId').on('click', buscador);
    //$('#btnBuscarId').on('click',consultarProyecto);
    $('#btnLimpiar').on('click', limpiarinformacion);

    $('#btnAddCiudad').on('click', popupciudad);
    $('#btnCancelarCiudad').on('click', cancelarCiudad);
    $('#btnGuardarCiudad').on('click', insertarciudad);
    //init();
    init2();

    function init2() {
        var cc = new ControlCookies();
        var str = cc.consultarRefinado("idproyectomod");
        if (str != "" && str != undefined) {
            consultarProyecto(str);
        }
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
    }

    function cancelarCiudad() {
        $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
        $('#txtCiudad').val('');
        listarCiudades();
    }

    function popupciudad() {
        var type = $(this).attr('data-type');
        $('.overlay-container').fadeIn(function() {
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
    }

    init();

    function init() {

        var vm = new validadores();
        $('#txtNombre').blur(vm.validarcamposvacios);
        $('#txtPresupuesto').blur(vm.validarnumerocamposvacios);
        $('#txtDireccion').blur(vm.validarcamposvacios);


    }
//    
//    function consultarProyecto(){
//        $.ajax({
//            'url':'consultarproyecto',
//            'data':{
//                'nombre': $('#txtNombre').val()
//            },
//            'type':'POST',
//            'error':error,
//            'success': function(data) {
//                data = $(JSON.parse(data))
//                data.each(function(i,item){
//                    $('#txtidproy').val(item.idproyecto);
//                    $('#txtNombre').val(item.Nombre);
//                    $('#cboCiudad').val(item.idciudad.idciudad);
//                    $('#txtFechaIni').val(item.fechainicio);
//                    $('#txtFechaFin').val(item.fechafinal);
//                    $('#txtDireccion').val(item.direccion);
//                    $('#txtGanancias').val(item.ganancias);
//                    $('#txtPresupuesto').val(item.totalPresupuesto);
//                    //$('#txtIdEmpleado').val(item.idempleado.idempleado);
//                });
//            }
//        });
//    } 
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
                'ganancia': $('#txtGanancias').val(),
                'presupuesto': $('#txtPresupuesto').val()
//                'idempleado':$('#txtIdEmpleado').val()
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
        if (res) {
            modificar();
        }
    }


})(jQuery);