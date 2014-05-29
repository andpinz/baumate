(function($) {
    $('#btnGuardar').on('click', valing);
    $('#btnBuscarId').on('click', consultarunidadmedida);
      $('#btncancelar').on('click',limpiar);
    init();

    function init() {
        var vm = new validadores();
        $('#txtidunidadmedida').blur(vm.validarnumerocamposvacios);
        $('#txtUnidadmedida').blur(vm.validarletrascamposvacios);



    }

    function consultarunidadmedida() {
        $.ajax({
            'url': 'consultarunidadmedida',
            'data': {
                'idunidadmedida': $('#txtidunidadmedida').val()
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i, item) {

                    $('#txtunidadmedida').val(item.unidadmedida);

                });
            }
        });
    }

    function modificar() {
        var txtidunidadmedida = $('#txtidunidadmedida').val();
        var txtunidadmedida = $('#txtunidadmedida').val();

        $.ajax({
            'url': 'modificarunidadmedida',
            'data': {
                'idunidadmedida': txtidunidadmedida,
                'unidadmedida': txtunidadmedida
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data == 1) {
                    alert('se logro modificar la unidad de medida satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                } else {
                    alert('no se logro modficar la unidad de medida');
                }
            }
        });

    }
    function limpiar() {
        $("#txtUnidadmedida").val("");
    }

    function error(error) {
        console.error(error);
    }
    function valing() {
        var ob = $([
            {
                'nom': 'txtidunidadmedida',
                'tip': 5, //1=numeros, 2=letras, 3=vacios
                'lbl': 'lblidunidadmedida'
            },
            {
                'nom': 'txtidunidadmedida',
                'tip': 5, //1=numeros, 2=letras, 3=vacios
                'lbl': 'lblidunidadmedida'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            modificar();
        }
    }


})(jQuery);