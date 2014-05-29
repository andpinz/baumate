(function($){
   
    $('#btnGuardar').on('click',insertar);
    
    function insertar(){
        var txtNombre = $('#txtNombre').val();
        $.ajax({
            'url':'insertarcargo',
            'data':{
                
                'nombre':txtNombre
                
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro crear el cargo satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro crear el cargo');
                }
            }
        });
        
    }
    
    function error(error){
        console.error(error);
    }
    
    
    
})(jQuery);
