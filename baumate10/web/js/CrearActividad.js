(function($) {
    listarProyectos();
    listarTipoPisos();
    $('#btnGuardar').on('click', valing);
    $('#btnLimpiar').on('click', limpiarinformacion);

    function limpiarinformacion() {
        $('#txtDescripcion').val('');
        $('#txtArea').val('');
        $('#cboProyecto').val('');
        $('#cboTipoPiso').val('');
    }
    init();
    function init() {
        var vm = new validadores();
        $('#txtArea').blur(vm.validarnumerocamposvacios);
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
    function listarTipoPisos() {
        $.ajax({
            'url': 'listartipopisos',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#cboTipoPiso');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.nombre);
                    d2.attr('value', item.codigo)
                    content.append(d2);
                });
            }
        });
    }
    function insertar() {
        var descripcion = $('#txtDescripcion').val();
        var area = $('#txtArea').val();
        var idproyecto = $('#cboProyecto').val();
        var idtipopiso = $('#cboTipoPiso').val();
        $.ajax({
            'url': 'insertaractividad',
            'data': {
                'descripcion': descripcion,
                'area': area,
                'idproyecto': idproyecto,
                'idtipopiso': idtipopiso
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data == 1) {
                    alertify.log('Se logro crear la actividad satisfactoriamente');
                    //setTimeout("location.href='administrador.jsp'", 500);
                    limpiarinformacion();
                } else {
                    alertify.error('no se logro crear la actividad');
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
                'nom': 'txtArea',
                'tip': 5 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                , 'lbl': 'lblarea'
            }

        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            insertar();
        }
    }


})(jQuery);

