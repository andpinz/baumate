(function($){
    $('#btnGuardar').on('click',modificar);
    $('#btnBuscarId').on('click',consultarCargo);
    
    function consultarCargo(){
        $.ajax({
            'url':'consultarcargo',
            'data':{
                'idCargo': $('#txtidCargo').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i,item){
                    
                    $('#txtnombre').val(item.nombre);
                   
                });
            }
        });
    } 
    
    function modificar(){
        var txtidCargo = $('#txtidCargo').val();
        var txtnombre = $('#txtnombre').val();
        
        $.ajax({
            'url':'modificarcargo',
            'data':{
                'idCargo': txtidCargo,
                'nombre':txtnombre
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro modificar el proyecto satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro modficar el proyecto');
                }
            }
        });
        
    }
    
    function error(error){
        console.error(error);
    }
    
    
    
})(jQuery);