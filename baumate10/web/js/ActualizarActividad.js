(function($){
    listarProyectos();
    listartipopisos();
    $('#btnLimpiar').on('click', limpiarinformacion);
    $('#btnBuscarId').on('click',buscador);
    $('#btnGuardar').on('click',valing);
    
     function limpiarinformacion() {
        $('#txtDescripcion').val('');
        $('#txtArea').val('');
        $('#cboProyecto').val('');
        $('#txtCodigo').val('');
        $('#cboTipoPiso').val('');
        $('#tblActividades').html('');
        
     }
    
    
    
     init();
      function init(){
        
        var vm = new validadores();
        $('#txtArea').blur(vm.validarnumerocamposvacios);
    }
    
    function listarProyectos(){
        $.ajax({
            'url':'listarproyectos',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboProyecto');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.Nombre);
                    d2.attr('value',item.idproyecto);  
                    content.append(d2);
                });
            }
        });
    }    
    
    function listartipopisos(){
        $.ajax({
            'url':'listartipopisos',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboTipoPiso');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombre);
                    d2.attr('value',item.codigo);  
                    content.append(d2);
                });
            }
        });
    }    
    
    
    function modificar(){
       var descripcion = $('#txtDescripcion').val();
       var area = $('#txtArea').val();
       var idproyecto = $('#cboProyecto').val();
       var idtipopiso = $('#cboTipoPiso').val();
       var codigo = $('#txtCodigo').val();
        $.ajax({
            'url':'actualizaractividad',
            'data':{
                'descripcion':descripcion,
                'area':area,
                'idproyecto':idproyecto,
                'idtipopiso':idtipopiso,
                'codigo':codigo
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    //alert('se logro modificar la actividad satisfactoriamente');
                    alertify.log('se logro modificar la actividad satisfactoriamente');
                    //setTimeout("location.href='administrador.jsp'", 500);
                    limpiarinformacion();
                }else{
                    alertify.error('no se logro modificar la actividad');
                    //alert('no se logro modificar la actividad');
                }
            }
        });
        
    }
    
    
    function buscador(){
        var idproyect = $('#cboProyecto').val();
        
        $.ajax({
            'url':'buscaractividad',
            'data':{
                'idproyecto':idproyect
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblActividades');
                content.html('');
                    var d2 = $('<tr>');
                    var td = $('<td>').text("Descripción");
                    d2.append(td);
                    td = $('<td>').text("Àrea");
                    d2.append(td);
                    td = $('<td>').text("Proyecto");
                    d2.append(td);
                    td = $('<td>').text("Tipo de piso");
                    d2.append(td);
                    td = $('<td>').text("Seleccionar");
                    d2.append(td);
                    content.append(d2);
                    
                data.each(function(i,item){
                    var d2 = $('<tr>');
                    var td = $('<td>').text(item.descripcion);
                    d2.append(td);
                    td = $('<td>').text(item.area);
                    d2.append(td);
                    td = $('<td>').text(item.idproyecto.Nombre);
                    d2.append(td);
                    td = $('<td>').text(item.idtipopiso.nombre);
                    d2.append(td);
                    td = $('<td>');
                    var tdi = $('<input>');
                    tdi.attr('type','button');
                    tdi.attr('value','→'); //26
                    tdi.attr('id','proy'+item.codigo);
                    tdi.attr('vl',item.codigo);
                    td.append(tdi);
                    d2.append(td);
                    
                    content.append(d2);
                    
                    $('#proy'+item.codigo).on('click',seleccionar);
                });
            }
        });
        
    }
    
    function seleccionar(){
        var id = $(this).attr('vl');
        $.ajax({
            'url':'consultaractividad',
            'data':{
                'codigo': id
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i,item){
                    $('#txtCodigo').val(item.codigo);
                    $('#cboProyecto').val(item.idproyecto.idproyecto);
                    $('#cboTipoPiso').val(item.idtipopiso.codigo);
                    $('#txtDescripcion').val(item.descripcion);
                    $('#txtArea').val(item.area);
               });
            }
        });
        
    }
    
    function error(error){
        console.error(error);
    }
     function valing(){
        var ob=$([
            
             {
                'nom': 'txtArea',
                'tip': 5 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lblarea'
            }
           
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            modificar();
        }
    }
    
    
    
})(jQuery);