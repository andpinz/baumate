(function($){
    listarclientes();
    $('#btnGuardar').on('click',valing);
    $('#btnLimpiar').on('click',limpiar);
    
    init();
    function init(){
        var vm = new validadores();
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
   
    function insertar(){
        var txtNombreventa = $('#txtNombreventa').val();
        var txtfecha = $('#txtfecha').val();
        var txtidentificacion = $('#txtidentificacion').val();
        var txtvalor = $('#txtvalor').val();
        var cboidcliente = $('#cboidcliente').val();
        var cboestado = $('#cboestado').val();
        $.ajax({
            'url':'insertarventa',
            'data':{
                'nombreventa':txtNombreventa,
                'fecha':txtfecha,
                'identificacion':txtidentificacion,
                'valor':txtvalor,
                'cliente':cboidcliente,
                'estado':cboestado
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
          $("#txtidentificacion").val("");  
          $("#txtvalor").val("");  
          $("#cboidcliente").val("");  
          $("#cboestado").val("");  
     }
    
    function error(error){
        console.error(error);
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
          insertar();
        }
    }
})(jQuery);