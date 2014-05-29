(function ($){
    listarmaterial();
    listarproveedor();
    $('#btnGuardar').on('click', valing);
    $('#btnBuscarMatofre').on('click', consultarMaterialOfrecido);
    $('#btnLimpiar').on('click',limpiar);
    
    init();
    function init(){
        var vm = new validadores();
        $('#txtcosto').blur(vm.validarnumerocamposvacios);
    }
    
    function consultarMaterialOfrecido(){
        $.ajax({
            'url':'consultarmatofrecido',
            'data':{
                'idmaterial':$('#cbomaterial').val(),
                'idproveedor':$('#cboidproveedor').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data){
                data = $(JSON.parse(data));
                data.each(function (i,item){
                    $('#txtidmaterialofrecido').val(item.idmaterialofrecido);
                    $('#cbomaterial').val(item.idmaterial.idmateriales);
                    $('#txtcosto').val(item.costo);
                    $('#cboidproveedor').val(item.idproveedor.idproveedores);
                });
            }
        });
    }
 function listarmaterial(){
        $.ajax({
                'url' : 'listarmaterial',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data));
                    var content = $('#cbomaterial');
                    content.html('');
                    data.each(function(i,item){
                        var d2 = $('<option>').text(item.nombre);
                        d2.attr('value', item.idmateriales);
                        content.append(d2);
                    });
                    content.val('');
                }
            });
    }
    
    function limpiar(){
          $("#cbomaterial").val("");  
          $("#cboidproveedor").val("");  
          $("#txtcosto").val("");  
     }
    
    function listarproveedor(){
        $.ajax({
                'url' : 'listarproveedores',
                'type' : 'POST',
                'error' : error,
                'success' : function(data) {
                    data = $(JSON.parse(data));
                    var content = $('#cboidproveedor');
                    content.html('');
                    data.each(function(i,item){
                        var d3 = $('<option>').text(item.nombreempresa);
                        d3.attr('value', item.idproveedores);
                        content.append(d3);
                    });
                    content.val('seleccione');
                }
            });
    }
    
    function modificar(){
        var idmaterialofrecido = $('#txtidmaterialofrecido').val();
        var costo = $('#txtcosto').val();
         $.ajax({
             'url':'modificarmatofrecido',
             'data':{
                 'idmaterialofrecido':idmaterialofrecido,
                 'costo':costo
             },
             'type':'POST',
             'error':error,
             'success':function(data){
              if (data == 1){
               alert('modificacion de material ofrecido exitosa');
               setTimeout("location.href='administrador.jsp'",500);
              }else{
               alert('no se logro realizar la modificacion por favor intente de nuevo');    
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
          modificar();
        }
    }
})(jQuery);