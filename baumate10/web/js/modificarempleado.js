(function($) {
    listarCargo();
    listarTipoDocumento();
    //$('#btnGuardar').on('click', valing);
    $('#btnGuardar').on('click', modificar);
    $('#btnBuscarId').on('click', consultarEmpleado);
    $('#btncancelar').on('click', limpiar);
    init();

    function init() {
        var vm = new validadores();
        $('#txtidempleado').blur(vm.validarnumerocamposvacios);
        $('#txtprimernombre').blur(vm.validarletrascamposvacios);
        $('#txtsegundonombre').blur(vm.validarletrascamposvacios);
        $('#txtprimerapellido').blur(vm.validarletrascamposvacios);
        $('#txtsegundoapellido').blur(vm.validarletrascamposvacios);
        $('#txtdireccion').blur(vm.validarcamposvacios);
        $('#txttelefono').blur(vm.validarnumerocamposvacios);
        $('#txtsalario').blur(vm.validarnumerocamposvacios);
        $('#txtdocumento').blur(vm.validarnumerocamposvacios);



    }

    function listarCargo() {
        $.ajax({
            'url': 'listarcargo',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#Scargo');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.nombre);
                    d2.attr('value', item.idcargo)
                    content.append(d2);
                });
            }
        });
    }

    function listarTipoDocumento() {
        $.ajax({
            'url': 'listartipodocumento',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#Stipodocumento');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.descripcion);
                    d2.attr('value', item.idtipoIdentificacion)
                    content.append(d2);
                });
            }
        });
    }

    function consultarEmpleado() {
        $.ajax({
            'url': 'consultarempleado',
            'data': {
                'documento': $('#txtdocumento').val()
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i, item) {
                    $('#txtidempleado').val(item.idempleado);
                    $('#txtprimernombre').val(item.primernombre);
                    $('#txtsegundonombre').val(item.segundonombre);
                    $('#txtprimerapellido').val(item.primerapellido);
                    $('#txtsegundoapellido').val(item.segundoapellido);
                    $('#txtdireccion').val(item.direccion);
                    $('#txttelefono').val(item.telefono);
                    $('#txtsalario').val(item.salario);
                    $('#txtfechanacimiento').val(item.fechanacimiento);
                    $('#Scargo').val(item.idcargo.idcargo);
                    $('#Stipodocumento').val(item.tipodocumento.idtipoIdentificacion);
                    $('#txtdocumento').val(item.documento);
                    $('#Sestado').val(item.estado);
                });
            }
        });
    }

    function modificar() {
      
        var txtdocumento = $('#txtdocumento').val();
        var txtprimernombre = $('#txtprimernombre').val();
        var txtsegundonombre = $('#txtsegundonombre').val();
        var txtprimerapellido = $('#txtprimerapellido').val();
        var txtsegundoapellido = $('#txtsegundoapellido').val();
        var txtdireccion = $('#txtdireccion').val();
        var txttelefono = $('#txttelefono').val();
        var txtsalario = $('#txtsalario').val();
        var txtfechanacimiento = $('#txtfechanacimiento').val();
        var Scargo = $('#Scargo').val();
        var Stipodocumento = $('#Stipodocumento').val();
      
        var Sestado = $('#Sestado').val();
        $.ajax({
            'url': 'modificarempleado',
            'data': {
              
              'documento': txtdocumento,
                'primernombre': txtprimernombre,
                'segundonombre': txtsegundonombre,
                'primerapellido': txtprimerapellido,
                'segundoapellido': txtsegundoapellido,
                'direccion': txtdireccion,
                'telefono': txttelefono,
                'salario': txtsalario,
                'fechanacimiento': txtfechanacimiento,
                'idcargo': Scargo,
                'tipodocumento': Stipodocumento,
                
                'estado': Sestado
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data == 1) {
                    alert('se logro modificar el Empleado satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                } else {
                    alert('no se logro modficar el empleado');
                }
            }
        });

    }
    function limpiar() {
        $("#txtprimernombre").val("");
        $("#txtsegundonombre").val("");
        $("#txtprimerapellido").val("");
        $("#txtsegundoapellido").val("");
        $("#txtdireccion").val("");
        $("#txttelefono").val("");
        $("#txtsalario").val("");
        $("#txtfechanacimiento").val("");
        $("#Scargo").val("");
        $("#Stipodocumento").val("");
        $("#txtdocumento").val("");
        $("#Sestado").val("");

    }

    function error(error) {
        console.error(error);
    }
    function valing() {
        var ob = $([
            {
                'nom': 'txtidempleado',
                'tip': 4, //1=numeros, 2=letras, 3=vacios, 4=vacios y letras, 5=vacios y numeros.
                'lbl': 'lblidempleo'
            },
            {
                'nom': 'txtprimernombre',
                'tip': 4, //1=numeros, 2=letras, 3=vacios, 4=vacios y letras, 5=vacios y numeros.
                'lbl': 'lblprimernombre'
            },
            {
                'nom': 'txtsegundonombre',
                'tip': 4, //1=numeros, 2=letras, 3=vacios
                'lbl': 'lblsegundonombre'
            },
            {
                'nom': 'txtprimerapellido',
                'tip': 4, //1=numeros, 2=letras, 3=vacios
                'lbl': 'lblprimerapellido'
            },
            {
                'nom': 'txtsegundoapellido',
                'tip': 4, //1=numeros, 2=letras, 3=vacios
                'lbl': 'lblsegundoapellido'
            },
            {
                'nom': 'txtdireccion',
                'tip': 3, //1=numeros, 2=letras, 3=vacios
                'lbl': 'lbldireccion'
            },
            {
                'nom': 'txttelefono',
                'tip': 5, //1=numeros, 2=letras, 3=vacios
                'lbl': 'lbltelefono'
            },
            {
                'nom': 'txtsalario',
                'tip': 5, //1=numeros, 2=letras, 3=vacios
                'lbl': 'lblsalario'
            },
            {
                'nom': 'txtdocumento',
                'tip': 5, //1=numeros, 2=letras, 3=vacios
                'lbl': 'lbldocumento'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            modificar();
        }
    }



})(jQuery);
