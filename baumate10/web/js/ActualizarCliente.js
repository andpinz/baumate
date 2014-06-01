(function($){
    deshabilitar()
    listartipodocume();
    $('#btnGuardar').on('click',valing);
    $('#btnBuscarId').on('click',consultarclient);
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
        $('#txtTelefono').blur(vm.validarcamposvacios);
    }

    
    function consultarclient(){
        $.ajax({
            'url':'consultarcliente',
            'data':{
                'documento': $('#texDocumento').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i,item){
                    $('#cliente').val(item.idCliente);
                    $('#texDocumento').val(item.Documento);
                    $('#txtEstado').val(item.idtipoIdentificacion.idtipoIdentificacion);
                    $('#txtPrimerNombre').val(item.primerNombre);
                    $('#txtSegundoNombre').val(item.SegundoNombre);
                    $('#txtPrimerApellido').val(item.PrimerApellido);
                    $('#txtSegundoApellido').val(item.SegundoApellido);
                    $('#txtDireccion').val(item.direccion);
                    $('#txtTelefono').val(item.telefono);
                    $('#txtEstado').val(item.estado);
                });
            }
        });
    } 
    
    function listartipodocume(){
        $.ajax({
            'url':'listartipodocumento',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#cboTipoDocumento');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.descripcion);
                    d2.attr('value',item.idtipoIdentificacion)  
                    content.append(d2);
                });
            }
        });
    }    
    
    function modificar(){
//        var txtidcliente= $('#txtidcliente').val()
//        var texDocumento = $('#texDocumento').val();
//        var cboTipoDocumento = $('#cboTipoDocumento').val();
//        var txtPrimerNombre = $('#txtPrimerNombre').val();
//        var txtSegundoNombre = $('#txtSegundoNombre').val();
//        var txtPrimerApellido = $('#txtPrimerApellido').val();
//        var txtSegundoApellido = $('#txtSegundoApellido').val();
//        var txtDireccion = $('#txtDireccion').val();
//        var txtTelefono = $('#txtTelefono').val();
//        var txtEstado = $('#txtEstado').val();
        $.ajax({
            'url':'actualizarcliente',
            'data':{
                'idcliente':$('#cliente').val(),
                'documento':$('#texDocumento').val(),
                'tipodocumneto':$('#cboTipoDocumento').val(),
                'primernombre':$('#txtPrimerNombre').val(),
                'segundonombre':$('#txtSegundoNombre').val(),
                'primerapellido':$('#txtPrimerApellido').val(),
                'segundoapellido':$('#txtSegundoApellido').val(),
                'direccion':$('#txtDireccion').val(),
                'telefono':$('#txtTelefono').val(),
                'estado':$('#txtEstado').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if (data==1) {
                    alert('Se logro modificar el cliente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('No se logro modificar el cliente');
                }
            }
        });
        
    }
    
    function error(error){
        console.error(error);
    }
    
    function valing(){
        var ob=$([
            
             {
                'nom': 'texDocumento',
                'tip': 3 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lbldocumento'
            },
           
            {
                'nom': 'txtEstado',
                'tip': 5 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lblestado'
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
             {
                'nom': 'txtTelefono',
                'tip': 3 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lbltelefono'
            }
           
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            modificar();
        }
    }
    
    
})(jQuery);


