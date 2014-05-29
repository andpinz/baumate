(function($){
   
    $('#btnGuardar').on('click',insertar);
    
    function insertar(){
        var txtUnidadmedida = $('#txtUnidadmedida').val();
        $.ajax({
            'url':'insertarunidadmedida',
            'data':{
                
                'unidadmedida':txtUnidadmedida
                
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro crear la unidad de medida satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro crear la unidad de medida');
                }
            }
        });
        
    }
    
    function error(error){
        console.error(error);
    }
    
    
    
})(jQuery);
