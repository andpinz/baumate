(function ($){
    $('#btnGuardar').on('click', modificar);
    $('#btnBuscarId').on('click',consultarTipoMaterial);
    
    function consultarTipoMaterial(){
        $.ajax({
            'url':'consultartipomaterial',
            'data':{
                'idtipomaterial':$('#txtidtipomaterial').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data){
                data = $(JSON.parse(data))
                data.each(function (i,item){
                    $('#txtidtipomaterial').val(item.idtipomaterial);
                    $('#txtNombreTipoMaterial').val(item.nombre);
                });
            }
        });
    }
    
    function modificar(){
        var idtipomateriales = $('#txtidtipomaterial').val();
        var nombretipoMaterial = $('#txtNombreTipoMaterial').val();
         $.ajax({
             'url':'modificartipomateriales',
             'data':{
                 'idtipomateriales':idtipomateriales,
                 'nombretipomateriales':nombretipoMaterial,
             },
             'type':'POST',
             'error':error,
             'success':function(data){
              if (data == 1){
               alert('modificacion de material exitosa');
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
    
})(jQuery);