(function($){
    listarCiudades();
    $('#btnGuardar').on('click',modificar);
    $('#btnBuscarId').on('click',consultarProyecto);
     $('#btnLimpiar').on('click', limpiarinformacion);
    
    $('#btnAddCiudad').on('click', popupciudad);    
    $('#btnCancelarCiudad').on('click', cancelarCiudad);
    $('#btnGuardarCiudad').on('click',insertarciudad);
    
    function cancelarCiudad(){
        $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
        $('#txtCiudad').val('');
        listarCiudades();
    }
    
    function popupciudad(){
        var type = $(this).attr('data-type');
	$('.overlay-container').fadeIn(function() {
		window.setTimeout(function(){
                    $('.window-container.'+type).addClass('window-container-visible');
		}, 100);
	});
    }
    
    
    function insertarciudad(){
        var txtCiudad = $('#txtCiudad').val();
        $.ajax({
            'url':'insertarciudad',
            'data':{
                'ciudad':txtCiudad
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alertify.log('se logro crear la unidad de medida satisfactoriamente');
                    $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
                    $('#txtCiudad').val('');
                    listarCiudades();
                }else{
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

    function init(){
        
        var vm = new validadores();
        $('#txtNombre').blur(vm.validarcamposvacios);       
        $('#txtPresupuesto').blur(vm.validarnumerocamposvacios);
        $('#txtDireccion').blur(vm.validarcamposvacios);
       
       
    }
        
    
    function consultarProyecto(){
        $.ajax({
            'url':'consultarproyecto',
            'data':{
                'nombre': $('#txtNombre').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                data.each(function(i,item){
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
    
    function listarCiudades(){
        $.ajax({
            'url':'listarciudades',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboCiudad');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombreciudad);
                    d2.attr('value',item.idciudad); 
                    content.append(d2);
                });
            }
        });
    }    
    
      function modificar(){
        $.ajax({
            'url':'actualizarproyectos',
            'data':{
                'idproyecto':$('#txtidproy').val(),
                'nombre':$('#txtNombre').val(),
                'ciudad':$('#cboCiudad').val(),
                'fechaini':$('#txtFechaIni').val(),
                'fechafin':$('#txtFechaFin').val(),
                'direccion':$('#txtDireccion').val(),
                'ganancia':$('#txtGanancias').val(),
                'presupuesto':$('#txtPresupuesto').val()
//                'idempleado':$('#txtIdEmpleado').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alertify.log('se logro modificar el proyecto satisfactoriamente');
                    //setTimeout("location.href='administrador.jsp'", 500);
                    limpiarinformacion();
                }else{
                    alertify.error('no se logro modificar el proyecto');
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
                'nom': 'txtNombre',
                'tip': 3 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lblnombre'
            },
           
            {
                'nom': 'txtPresupuesto',
                'tip': 5//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lblpresupuesto'
            },
           
            {
                'nom': 'txtDireccion',
                'tip': 3//1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lbldireccion'
            }
           
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            modificar();
        }
    }
    
    
})(jQuery);