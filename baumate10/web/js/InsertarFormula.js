(function($){
    listarmaterial();
    listartipopiso();
    $('#btnGuardar').on('click',valing);
    $('#btnLimpiar').on('click',limpiar);
   
    init();
    function init(){
        var vm = new validadores();
        $('#txtcantidad').blur(vm.validarnumerocamposvacios);
    }
    
    function listarmaterial(){
        $.ajax({
                'url' : 'listarmaterial',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data));
                    var content = $('#cboidMaterial');
                    content.html('');
                    data.each(function(i,item){
                        var d2 = $('<option>').text(item.nombre);
                        d2.attr('value', item.idmateriales);
                        content.append(d2);
                    });
                }
            });
    }
    function listartipopiso(){
        $.ajax({
                'url' : 'listartipopisos',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data));
                    var content = $('#cbotipopiso');
                    content.html('');
                    data.each(function(i,item){
                        var d3 = $('<option>').text(item.nombre);
                        d3.attr('value', item.codigo);
                        content.append(d3);
                    });
                }
            });
    }
    
    function limpiar(){
          $("#cboidMaterial").val("");  
          $("#cbotipopiso").val("");  
          $("#txtcantidad").val("");  
     }
    
    function insertarMaterial(){
        var cboidmaterial = $('#cboidMaterial').val();
        var cbotipopiso = $('#cbotipopiso').val();
        var txtcantidad = $('#txtcantidad').val();
        $.ajax({
            'url':'insertarformula',
            'data':{
                'idmaterial':cboidmaterial,
                'idtipopiso':cbotipopiso,
                'cantidad':txtcantidad
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro ingresar el material satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro ingresar el material');
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
                'nom':'txtcantidad',
                'tip': 5,
                'lbl': 'lblcantidad'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
          insertarMaterial();
        }
    }
    
})(jQuery);