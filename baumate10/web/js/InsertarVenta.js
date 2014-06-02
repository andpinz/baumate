(function($){
    listarclientes();
    listartipoventa();
    $('#btnGuardar').on('click',valing);
    $('#btnLimpiar').on('click',limpiar);
    $('#btnEmergente').on('click',popupidentiventa);
    $('#btnCancelar').on('click',cancelaridentiventa);
    $('#bntBuscarc').on('click',popupclientes);
    init();
    
    function init(){
        var vm = new validadores();
        $('#txtdescripciontipoventa').blur(vm.validarcamposvacios);
        $('#txtNombreventa').blur(vm.validarcamposvacios);
        $('#txtvalor').blur(vm.validarnumerocamposvacios);
    }
    
    function cancelaridentiventa(){
        $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
        $('#txtDescripciontipoventa').val('');
        listartipoventa();
    }
    
    function popupidentiventa(){
        var type = $(this).attr('data-type');
        
	$('.overlay-container').fadeIn(function() {
		window.setTimeout(function(){
                    $('.window-container.'+type).addClass('window-container-visible');
		}, 100);
	});
    }
    
    function popupclientes(){
        var type = $(this).attr('data-type');
        listarclientes();
	$('.overlay-container').fadeIn(function() {
		window.setTimeout(function(){
                    $('.window-container.'+type).addClass('window-container-visible');
		}, 100);
	});
    }
    
    $('#btnGuardarTventa').on('click',valing2);
    
    function insertartipoventa(){
        $.ajax({
            'url':'insertaridentiventa',
            'data':{
                descripcionven:$('#txtDescripciontipoventa').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if (data==1) {
                    alertify.log('Tipo de venta ingresado con EXITO!');
                    $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
                    $('#txtCiudad').val('');
                    listartipoventa();
                }else{
                    alertify.error('ERROR. el tipo de venta no se pudo insertar por favor intente de nuevo');
                }
            }
        });
    }
    
    function listarclientes(){
        $.ajax({
            'url':'listarcliente',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboidcliente');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.primerNombre);
                    d2.attr('value',item.idCliente);  
                    content.append(d2);
                });
            }
        });
    } 
    
    function buscarclientes(){
        
    }
   
    function listartipoventa(){
        $.ajax({
            'url':'listaridentiventa',
            'type':'POST',
            'erro':error,
            'success':function(data){
                data=$(JSON.parse(data));
                var content=$('#cboidtipoventa');
                content.html('');
                data.each(function (i,item){
                   var d2=$('<option>').text(item.tipoidentificacionventa);
                   d2.attr('value',item.ididentificacionventa);
                   content.append(d2);
                });
            } 
        });
    }
    
    function insertar(){
        var txtNombreventa = $('#txtNombreventa').val();
        var txtfecha = $('#txtfecha').val();
        var numregistro = $('#txtnumregistro').val();
        var txtvalor = $('#txtvalor').val();
        var cboidcliente = $('#cboidcliente').val();
        var cboestado = $('#cboestado').val();
        var cbotipoventa = $('#cboidtipoventa').val();
        $.ajax({
            'url':'insertarventa',
            'data':{
                'nombreventa':txtNombreventa,
                'fecha':txtfecha,
                'identificacion':numregistro,
                'valor':txtvalor,
                'cliente':cboidcliente,
                'estado':cboestado,
                'tipoventa':cbotipoventa
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro ingresar la venta');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro insertar la venta');
                }
            }
        });
    }
    
    function limpiar(){
          $("#txtNombreventa").val("");  
          $("#txtfecha").val("");  
          $("#txtvalor").val("");  
          $("#cboidcliente").val("");  
          $("#cboestado").val("");  
     }
    
    function error(error){
        console.error(error);
    }
     
     function valing(){
        var ob=$([
            {
                'nom':'txtNombreventa',
                'tip': 3,
                'lbl': 'lblNombreventa'
            },
            {
                'nom':'txtvalor',
                'tip': 5,
                'lbl': 'lblvalor'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
          insertar();
        }
    }
    
     function valing2(){
        var ob=$([
            {
                'nom':'txtdescripciontipoventa',
                'tip': 3,
                'lbl': 'lbldescripciontipoventa'
            }
        ]);
        var v2 = new validaciones();
        var res2 = v2.fntValidar(ob);
        if (res2) {
          insertartipoventa();
        }
    }
})(jQuery);