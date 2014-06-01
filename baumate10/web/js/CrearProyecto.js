(function($) {
    listarCiudades();
    $('#btnGuardar').on('click', valing);
    $('#btnLimpiar').on('click', limpiarinformacion);
    $('#btnAddCiudad').on('click', popupciudad);

    $('#btnCancelarCiudad').on('click', cancelarCiudad);

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

    $('#btnGuardarCiudad').on('click', insertarciudad);

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
    }

    init();

    function init() {

        var vm = new validadores();
        $('#txtNombre').blur(vm.validarcamposvacios);
        $('#txtPresupuesto').blur(vm.validarnumerocamposvacios);
        $('#txtDireccion').blur(vm.validarcamposvacios);
        var cf = new ControlFecha();
        $('#txtFechaIni').val(cf.hoy());
        $('#txtFechaFin').val(cf.hoy());
        $('#txtFechaIni').blur(function(){
            var vf = new ControlFecha();
            if (!(vf.comparar($('#txtFechaFin').val(),$('#txtFechaIni').val()))) {
                $('#lblfecha').text('la fecha final debe ser mayor a la fecha de inicio');
            }
        });
        $('#txtFechaFin').blur(function(){
            var vf = new ControlFecha();
            if (!(vf.comparar($('#txtFechaFin').val(),$('#txtFechaIni').val()))) {
                $('#lblfecha').text('la fecha final debe ser mayor a la fecha de inicio');
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
                    d2.attr('value', item.idciudad)
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
        var txtIdEmpleado = $('#txtIdEmpleado').val();
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
                'idempleado': txtIdEmpleado
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
        if (!(vf.comparar($('#txtFechaFin').val(),$('#txtFechaIni').val()))) {
            $('#lblfecha').text('la fecha final debe ser mayor a la fecha de inicio');
            res=false;
        }
        if (res) {
            insertar();
        }
    }



})(jQuery);

