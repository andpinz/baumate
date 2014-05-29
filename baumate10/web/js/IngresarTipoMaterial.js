(function ($){
    $('#btnGuardar').on('click',insertarTipoMaterial);
    
function insertarTipoMaterial(){
        var txtNombre = $('#txtNombreTipoMaterial').val();
        $.ajax({
            'url':'guardartipomaterial',
            'data':{
                'NombreTipoMaterial':txtNombre
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro ingresar el tipo de Material satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro ingresar el Tipo de Material');
                }
            }
        });
    }

    function error(error){
        console.error(error);
    }
    
})(jQuery);    