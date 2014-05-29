(function($){
    listarclientes();
    $('#btnGuardar').on('click',valing);
    $('#btntraerdatos').on('click',consultarventa);
    $('#btnLimpiar').on('click',limpiar);
    
    init();
    function init(){
        var vm = new validadores();
        //$('#txtidvent').blur(vm.validarnumerocamposvacios);
        $('#txtNombreventa').blur(vm.validarcamposvacios);
        $('#txtidentificacion').blur(vm.validarcamposvacios);
        $('#txtvalor').blur(vm.validarnumerocamposvacios);
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
    
//    function consultarventas(){
//        $.ajax({
//            'url':'buscarventa',
//            'data':{
//                'nombre':$('#txtNombreventa').val()
//            },
//            'type':'POST',
//            'error':error,
//            'success': function(data) {
//                data = $(JSON.parse(data));
//                var content = $('#tblventa');
//                content.html('');
//                    var d2 = $('<tr>');
//                    var td = $('<td>').text("Nombre Venta");
//                    d2.append(td);
//                    td = $('<td>').text("Fecha venta");
//                    d2.append(td);
//                    td = $('<td>').text("Identificacion");
//                    d2.append(td);
//                    td = $('<td>').text("Valor");
//                    d2.append(td);
//                    td = $('<td>').text("Cliente");
//                    d2.append(td);
//                    content.append(d2);
//                    
//                data.each(function(i,item){
//                    var d2 = $('<tr>');
//                    var td = $('<td>').text(item.nombreventa);
//                    d2.append(td);
//                    td = $('<td>').text(item.fecha);
//                    d2.append(td);
//                    td = $('<td>').text(item.identificacion);
//                    d2.append(td);
//                    td = $('<td>').text(item.valor);
//                    d2.append(td);
//                    td = $('<td>').text(item.idcliente.primerNombre);
//                    d2.append(td);
//                    td = $('<td>');
//                    var tdi = $('<input>');
//                    tdi.attr('type','button');
//                    tdi.attr('value','Traer Datos');
//                    tdi.attr('id','proy'+item.idventa);
//                    tdi.attr('vl',item.nombreventa);
//                    td.append(tdi);
//                    d2.append(td);
//                    
//                    content.append(d2);
//                    
//                    $('#proy'+item.idventa).on('click',consultarventas);
//                });
//            }
//        });
//    }
//    
    
    function consultarventa(){
        //var id = $(this).attr('vl');
        var identificacion = $('#txtidentificacion').val();
        $.ajax({
            'url':'consultarventa',
            'data':{
                'identiventa': identificacion
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i,item){
                    $('#txtidvent').val(item.idventa);
                    $('#txtNombreventa').val(item.nombreventa);
                    $('#txtfecha').val(item.fecha);
                    $('#txtvalor').val(item.valor);
                    $('#cboidcliente').val(item.idcliente.idCliente);
                    $('#cboestado').val(item.estado);
                });
            }
        });
    } 

    function limpiar(){
          $("#txtidvent").val("");  
          $("#txtNombreventa").val("");  
          $("#txtfecha").val("");  
          $("#txtidentificacion").val("");  
          $("#txtvalor").val("");  
          $("#cboidcliente").val("");  
          $("#cboestado").val("");  
     }
    
    function modificar(){
        var idventa= $('#txtidvent').val();
        var txtNombreventa = $('#txtNombreventa').val();
        var txtfecha = $('#txtfecha').val();
        var txtidentificacion = $('#txtidentificacion').val();
        var txtvalor = $('#txtvalor').val();
        var cbocliente = $('#cboidcliente').val();
        var cboestado = $('#cboestado').val();
        $.ajax({
            'url':'modificarventa',
            'data':{
                'idventa': idventa,
                'nombreventa':txtNombreventa,
                'fecha':txtfecha,
                'identificacion':txtidentificacion,
                'valor':txtvalor,
                'cliente':cbocliente,
                'estado':cboestado
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro modificar la venta con exito !');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro modificar');
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
                'nom':'txtNombreventa',
                'tip': 3,
                'lbl': 'lblNombreventa'
            },
            {
                'nom':'txtidentificacion',
                'tip': 3,
                'lbl': 'lblidentificacion'
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
          modificar();
        }
    }
    
})(jQuery);