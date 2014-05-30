(function($){
//   
//    $(document).ready(function() {
//        $('.button').click(function() {
//                type = $(this).attr('data-type');
//                $('.overlay-container').fadeIn(function() {
//                window.setTimeout(function(){
//                        $('.window-container.'+type).addClass('window-container-visible');
//                }, 100);
//                });
//        });
//        $('.close').click(function() {
//                $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
//        });
//    });
   
    $('#btnGuardarCiudad').on('click',insertar);
    
    function insertar(){
        var txtCiudad = $('#txtCiudad').val();
        $.ajax({
            'url':'insertarCiudad',
            'data':{
                
                'ciudad':txtCiudad
                
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro crear la unidad de medida satisfactoriamente');
                    
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
