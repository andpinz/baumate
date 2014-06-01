(function($){
    
    listarcliente();
    listartipodocumento();
    deshabilitar();
   
     function deshabilitarempresa() {

        $('#txtPrimerNombre').attr("disabled", false);
        $('#txtSegundoNombre').attr("disabled", true);
        $('#txtPrimerApellido').attr("disabled", true);
        $('#txtSegundoApellido').attr("disabled", true);
        $('#txtDocumento').attr("disabled", false);
        $('#txtTelefono').attr("disabled", false);
        $('#txtDireccion').attr("disabled", false);
    }
    function deshabilitarpersona() {
        $('#txtPrimerNombre').attr("disabled", false);
        $('#txtSegundoNombre').attr("disabled", false);
        $('#txtPrimerApellido').attr("disabled", false);
        $('#txtSegundoApellido').attr("disabled", false);
        $('#txtDocumento').attr("disabled", false);
        $('#txtTelefono').attr("disabled", false);
        $('#txtDireccion').attr("disabled", false);
    }

    function deshabilitar() {
        $('#txtPrimerNombre').attr("disabled", true);
        $('#txtSegundoNombre').attr("disabled", true);
        $('#txtPrimerApellido').attr("disabled", true);
        $('#txtSegundoApellido').attr("disabled", true);
        $('#idcontacto').attr("disabled", true);
        $('#txtTelefono').attr("disabled", true);
        $('#txtDireccion').attr("disabled", true);

    }
    function habilitarsindoc() {
        $('#txtPrimerNombre').attr("disabled", false);
        $('#txtSegundoNombre').attr("disabled", false);
        $('#txtPrimerApellido').attr("disabled", false);
        $('#txtSegundoApellido').attr("disabled", false);
        $('#idcontacto').attr("disabled", true);
        $('#txtTelefono').attr("disabled", false);
        $('#txtDireccion').attr("disabled", false);
    }
    function habilitar() {
        $('#txtPrimerNombre').attr("disabled", false);
        $('#txtSegundoNombre').attr("disabled", false);
        $('#txtPrimerApellido').attr("disabled", false);
        $('#txtSegundoApellido').attr("disabled", false);
        $('#idcontacto').attr("disabled", false);
        $('#txtTelefono').attr("disabled", false);
        $('#txtDireccion').attr("disabled", false);
    }

    function habilitarbotones() {
        $('#btnguardar').attr("disabled", false);
    }
   
    function listartipodocumento() {
        $.ajax({
            'url': 'listartipodocumento',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#cboTipoDocumento');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.descripcion);
                    d2.attr('value', item.idtipoIdentificacion)
                    content.append(d2);
                });
            }
        });
    }
    
    function listarcliente() {
        $.ajax({
            'url': 'cargarcliente',
            'type': 'GET',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#izquierda');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<div>');
                    d2.attr('class', 'listas');
                    d2.attr('id', 'listacontacto' + item.Documento);
                    d2.attr('idcontacto', item.Documento);
                    var d = $('<div>');
                    d.attr('idcontacto', item.Documento);
                    var p = $('<p>').text(item.primerNombre + ' ' + item.SegundoNombre + ' ' + item.PrimerApellido + ' ' + item.SegundoApellido);
                    p.attr('class', 'ps');
                    var p2 = $('<p>');
                    p2.attr('class', 'ps');
                    d.append()
                            .append(p2)
                            .append($(' '))
                            .append(p);

                    d2.append(d);

                    content.append(d2);

                    $('#listacontacto' + item.Documento).on('click', cargar);

                });
                limpiarinformacion();
            }
        });
    }   
    
    function cargar() {
        $.ajax({
            'url': 'consultarcliente',
            'type': 'GET',
            'data': {'documento': $(this).attr('idcontacto')},
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i, item) {
                    $('#cboTipoDocumento').val(item.idtipoIdentificacion.idtipoIdentificacion);
                    $('#idcontacto').val(item.Documento);
                    $('#txtPrimerNombre').val(item.primerNombre);
                    $('#txtSegundoNombre').val(item.SegundoNombre);
                    $('#txtPrimerApellido').val(item.PrimerApellido);
                    $('#txtSegundoApellido').val(item.SegundoApellido);
                    $('#txtDireccion').val(item.direccion);
                    $('#txtTelefono').val(item.telefono);
                });
            }
        });
    }

    function error(error) {
        console.error(error);
    }
    
//    $('#guardar').on('click',insertar);
    
    function limpiarinformacion(){
        $('#idcontacto').val('');
        $('#txtPrimerNombre').val('');
        $('#txtSegundoNombre').val('');
        $('#txtPrimerApellido').val('');
        $('#txtSegundoApellido').val('');
        $('#txtDireccion').val('');
        $('#txtTelefono').val('');
    }
    
    function insertar() {
        $.ajax({
            'url': 'insertarcliente',
            'type': 'GET',
            'data': {
                'tipodocumneto': $('#cboTipoDocumento').val(),
                'documento': $('#idcontacto').val(),
                'primernombre': $('#txtPrimerNombre').val(),
                'segundonombre': $('#txtSegundoNombre').val(),
                'primerapellido': $('#txtPrimerApellido').val(),
                'segundoapellido': $('#txtSegundoApellido').val(),
                'direccion': $('#txtDireccion').val(),
                'telefono': $('#txtTelefono').val(),
                'estado': $('#txtEstado').val()
            },
            'error': error,
            'success': function(data) {

                if (data == 1) {
                    alertify.log("Se logro crear el cliente satisfactoriamente");
                    
                    listarcliente();
                    deshabilitar();
                    habilitarbotones();
                    var b = $('#guardar');
                    b.remove();
                } else {
                     alertify.log('No se logro crear el cliente');
                }
            }
        });
    }
    
    $('#add').on('click',function(){
        $('#guardar').remove();
        $('#compañia').remove();
        $('#pernatural').remove();
        $('#divc').remove();
        $('#txtEstado').remove();
        
        insertarc();
    });
     
    function insertarc() {

        listarcliente();

        habilitar();
        var b = $('<input type="button" id="guardar" value="Guardar">');
        var select = $('<select name="txtEstado" id="txtEstado" style="visibility:hidden">\n\
                           <option value="1" >Activo\n\
                           <option value="0" >Inactivo</option></select>'
                );
        $('#btnguardar').append(select);

        var radio = $('<div id="divc" >Compañia<input type="radio" name="compañia" id="compañia" value="0">\n\
                           Persona Natural<input type="radio" name="compañia" id="pernatural"  value="1">');
        $('#btnguardar').append(radio);

        $('#btnguardar').append(b);
        $('#guardar').on('click', funInsertar);
        $('#compañia').on('click', deshabilitarempresa);
        $('#pernatural').on('click', deshabilitarpersona);
    }
    
    $('#del').on('click',function(){
        $('#guardar').remove();
        del();
    });
   
    function del() {
        var b = $('<input type="button" id="guardar" value="Guardar">');
        $('#btnguardar').append(b);
        $('#guardar').on('click', eliminar);

        deshabilitar();
    }
    $('#edi').on('click', function() {
        $('#guardar').remove();
        $('#txtEstado').remove();
        $('#compañia').remove();
        $('#pernatural').remove();
        $('#divc').remove();
        editar();
    });
    
    function editar() {
        var b = $('<input type="button" id="guardar" value="Guardar">');
        var select = $('<select name="txtEstado" id="txtEstado">\n\
                           <option value="1" >Activo\n\
                           <option value="0" >Inactivo</option></select>');
        $('#btnguardar').append(select);
        var radio = $('<div id="divc" >Compañia<input type="radio" name="compañia" id="compañia" value="0">\n\
                           Persona Natural<input type="radio" name="compañia" id="pernatural"  value="1">');
        $('#btnguardar').append(radio);

        $('#btnguardar').append(b);
        $('#guardar').on('click', funModificar);
        $('#compañia').on('click', deshabilitarempresa);
        $('#pernatural').on('click', deshabilitarpersona);

        habilitarsindoc();
    }
    validar();

    function validar() {
        var vm = new validadores();

        $('#txtPrimerNombre').blur(vm.validarletrascamposvacios);
        $('#txtSegundoNombre').blur(vm.validarletras);
        $('#txtPrimerApellido').blur(vm.validarletras);
        $('#txtSegundoApellido').blur(vm.validarletras);
        $('#idcontacto').blur(vm.caracterecamposvacios);
//        $('#txtEstado').blur(vm.validarnumerocamposvacios);
        $('#txtTelefono').blur(vm.validarcamposvacios);
//        $('#txtDocumento').blur(vm.caracterecamposvacios);
    }
    
    function editarcontato() {
        $.ajax({
            'url': 'actualizarcliente',
            'type': 'GET',
            'data':
//                    $('form').serialize(),
                    {
                        'tipodocumneto': $('#cboTipoDocumento').val(),
                        'documento': $('#idcontacto').val(),
                        'primernombre': $('#txtPrimerNombre').val(),
                        'segundonombre': $('#txtSegundoNombre').val(),
                        'primerapellido': $('#txtPrimerApellido').val(),
                        'segundoapellido': $('#txtSegundoApellido').val(),
                        'direccion': $('#txtDireccion').val(),
                        'telefono': $('#txtTelefono').val(),
                        'estado': $('#txtEstado').val()
                    },
            'error': error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data == 1) {
                     alertify.log('Se logro modificar el cliente');
                    listarcliente();
                    deshabilitar();
                    habilitarbotones();
                } else {
                     alertify.log('No se logro modificar el cliente');
                }
            }
        });
    }
    function eliminar() {

        $.ajax({
            'url': 'eliminarcliente',
            'data': {
                'documento': $('#idcontacto').val(),
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                if (data == 1) {
                     alertify.log('Se logro eliminar el cliente');
                    listarcliente();
                    habilitarbotones();

                } else {
                     alertify.log('No se logro eliminar el cliente');
                }
            }
        });
    }
    
    function valing() {
        var ob = $([
            {
                'nom': 'idcontacto',
                'tip': 6 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                , 'lbl': 'lbldocumento'
            },
//           
            {
                'nom': 'txtPrimerNombre',
                'tip': 4//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                , 'lbl': 'lblprimernombre'
            },
            {
                'nom': 'txtSegundoNombre',
                'tip': 2//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                , 'lbl': 'lblsegundonombre'
            },
            {
                'nom': 'txtPrimerApellido',
                'tip': 2//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                , 'lbl': 'lblprimerapellido'
            },
            {
                'nom': 'txtSegundoApellido',
                'tip': 2//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                , 'lbl': 'lblsegundoapellido'
            },
            {
                'nom': 'txtTelefono',
                'tip': 3 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                , 'lbl': 'lbltelefono'
            }

        ]);
        return ob;
    }
        
    function funInsertar() {
        var ob = valing();
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            insertar();
        };
    }

    function funModificar() {
        var ob = valing();
        console.log(ob);
        var v = new validaciones();
        var resModf = v.fntValidar(ob);
        console.log(resModf);
        if (resModf) {
            editarcontato();
        }
        ;
    }
})(jQuery);

