    (function($){
    listarmaterial();
    listarproveedor();
    $('#btnGuardar').on('click',valing);
    $('#btnLimpiar').on('click',limpiar);
    
    var msm = "seleccione";
    
    init();
    function init(){
        var vm = new validadores();
        $('#txtcosto').blur(vm.validarnumerocamposvacios);
    }
    
    function listarmaterial(){
        $.ajax({
            'url':'listarmaterial',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#cboidmaterial');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombre);
                    d2.attr('value',item.idmateriales)  
                    content.append(d2);
                });
                content.val('');
            }
        });
    }    
    function listarproveedor(){
        $.ajax({
            'url':'listarproveedores',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#cboidproveedor');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombreempresa);
                    d2.attr('value',item.idproveedores)  
                    content.append(d2);
//                    d2 = $('<option>').text("seleccione");
//                    content.append(d2);
                });
                content.val(msm);
            }
        });
    }
    
    function limpiar(){
          $("#cboidmaterial").val("");  
          $("#txtcosto").val("");  
          $("#cboidproveedor").val("");  
     }
     
    function insertar(){
        var cboidmaterial = $('#cboidmaterial').val();
        var txtcosto = $('#txtcosto').val();
        var cboidproveedor = $('#cboidproveedor').val();
        $.ajax({
            'url':'insertarmatofrecido',
            'data':{
                'cboidmaterial':cboidmaterial,
                'txtcosto':txtcosto,
                'cboidproveedor':cboidproveedor
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if (data==1) {
                    alert('se logro insertar el material');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se Ingresar el nuevo material ofrecido ');
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
                'nom':'txtcosto',
                'tip': 5,
                'lbl': 'lblcosto'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
          insertar();
        }
    }
})(jQuery);



