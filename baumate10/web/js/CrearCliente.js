(function($) {
    deshabilitar();
    listartipodocumento();
    $('#btnGuardar').on('click', valing);
    $('#btnLimpiar').on('click', limpiarinformacion);
    $('#compañia').on('click', desabilitarempresa);
    $('#pernatural').on('click', desabilitarpersona);
    
  
        
     function limpiarinformacion() {
        $('#txtPrimerNombre').val('');
        $('#txtSegundoNombre').val('');
        $('#txtPrimerApellido').val('');
        $('#txtSegundoApellido').val('');
        $('#txtDocumento').val('');
        $('#txtTelefono').val('');
        $('#txtDireccion').val('');
        
        $('#txtPrimerNombre').attr("disabled", false);
        $('#txtSegundoNombre').attr("disabled", false);
        $('#txtPrimerApellido').attr("disabled", false);
        $('#txtSegundoApellido').attr("disabled", false);
        $('#txtDocumento').attr("disabled", false);
        $('#txtTelefono').attr("disabled", false);
        $('#txtDireccion').attr("disabled", false);
    } 
    function desabilitarempresa(){
        
        $('#txtPrimerNombre').attr("disabled", false);
        $('#txtSegundoNombre').attr("disabled", true);
        $('#txtPrimerApellido').attr("disabled", true);
        $('#txtSegundoApellido').attr("disabled", true);
        $('#txtDocumento').attr("disabled", false);
        $('#txtTelefono').attr("disabled", false);
        $('#txtDireccion').attr("disabled", false);
    }
    function desabilitarpersona(){
        $('#txtPrimerNombre').attr("disabled", false);
        $('#txtSegundoNombre').attr("disabled", false);
        $('#txtPrimerApellido').attr("disabled", false);
        $('#txtSegundoApellido').attr("disabled", false);
        $('#txtDocumento').attr("disabled", false);
        $('#txtTelefono').attr("disabled", false);
        $('#txtDireccion').attr("disabled", false);
    }
        function deshabilitar(){
        $('#txtPrimerNombre').attr("disabled", true);
        $('#txtSegundoNombre').attr("disabled", true);
        $('#txtPrimerApellido').attr("disabled", true);
        $('#txtSegundoApellido').attr("disabled", true);
        $('#txtDocumento').attr("disabled", true);
        $('#txtTelefono').attr("disabled", true);
        $('#txtDireccion').attr("disabled", true);
            
        }
   

    init();

    function init(){
        
        var vm = new validadores();
                
        $('#txtPrimerNombre').blur(vm.validarletrascamposvacios);
        $('#txtSegundoNombre').blur(vm.validarletras);
        $('#txtPrimerApellido').blur(vm.validarletras);
        $('#txtSegundoApellido').blur(vm.validarletras);
        $('#txtDocumento').blur(vm.validarcamposvacios);
//        $('#txtEstado').blur(vm.validarnumerocamposvacios);
//        $('#txtTelefono').blur(vm.validarnumerocamposvacios);
        $('#txtDocumento').blur(vm.caracterecamposvacios);
    }


    function listartipodocumento() {
        $.ajax({
            'url': 'listartipodocumento',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#cboTipodocumento');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.descripcion);
                    d2.attr('value', item.idtipoIdentificacion)
                    content.append(d2);
                });
            }
        });
    }

    function insertar() {
        var txtDocumento = $('#txtDocumento').val();
        var cboTipodocumento = $('#cboTipodocumento').val();
        var txtPrimerNombre = $('#txtPrimerNombre').val();
        var txtSegundoNombre = $('#txtSegundoNombre').val();
        var txtPrimerApellido = $('#txtPrimerApellido').val();
        var txtSegundoApellido = $('#txtSegundoApellido').val();
        var txtDireccion = $('#txtDireccion').val();
        var txtTelefono = $('#txtTelefono').val();
        var txtEstado = $('#txtEstado').val();
        $.ajax({
            'url': 'insertarcliente',
            'data': {
                'documento': txtDocumento,
                'tipodocumneto': cboTipodocumento,
                'primernombre': txtPrimerNombre,
                'segundonombre': txtSegundoNombre,
                'primerapellido': txtPrimerApellido,
                'segundoapellido': txtSegundoApellido,
                'direccion': txtDireccion,
                'telefono': txtTelefono,
                'estado': txtEstado
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                if (data == 1) {
                     alertify.log('Se logro crear el cliente satisfactoriamente');
                              
                    
                } else {
                     alertify.error('No se logro crear el cliente, es posible que el documento ya exista');
                }
            }
        });

    }
    
    

    function error(error) {
        console.error(error);
    }

    function valing(){
        var ob=$([
            
             {
                'nom': 'txtDocumento',
                'tip': 6 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lbldocumento'
            },
           
            {
                'nom': 'txtPrimerNombre',
                'tip': 4//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lblprimernombre'
            },
            {
                'nom': 'txtSegundoNombre',
                'tip': 2//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lblsegundonombre'
            },
            {
                'nom': 'txtPrimerApellido',
                'tip': 2//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lblprimerapellido'
            },
            {
                'nom': 'txtSegundoApellido',
                'tip': 2//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lblsegundoapellido'
            },
//             {
//                'nom': 'txtTelefono',
//                'tip': 5 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
//                ,'lbl' : 'lbltelefono'
//            }
           
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            insertar();
        }
    }
    
   
})(jQuery);

