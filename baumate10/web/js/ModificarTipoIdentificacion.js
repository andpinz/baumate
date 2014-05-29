(function($) {

    $('#boton').on('click', valing);
    $('#btnBuscarId').on('click',buscador);
     $('#btnLimpiar').on('click', limpiarinformacion);
    
    function limpiarinformacion() {
        $('#txtDescripcion').val('');
         $('#txtidTipoIdentificacion').val('');
       
    }
    
    
    function init(){
        var vm = new validadores();
        $('#txtDescripcion').blur(vm.validarletrascamposvacios);
    }


    function buscador() {
        $.ajax({
            'url':'buscartipodocumento',
            'data':{
                'descripcion': $('#txtidTipoIdentificacion').val()
                
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i,item){
                    $('#descripcion').val(item.idtipoIdentificacion);
                    $('#txtDescripcion').val(item.descripcion);
                  
                
                });
            }
        });
        
    }
    
    function ModificarTipoIdentificacion(){        
        $.ajax({
           'url':'modificartipodocumento',
           'data':{
               'idtipoIdentificacion':$('#descripcion').val(),
               'descripcion':$('#txtDescripcion').val(),
           },
           'type':'POST',
           'error':error,
           'success': function (data){
                if(data==1){
                    alert('Los datos se han guardado satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 1000);
                }else{
                    alert('Los datos no han podido ser modificados');
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
                'nom': 'txtDescripcion',
                'tip': 4 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lbldescripcion'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            ModificarTipoIdentificacion();
        }
    }
})(jQuery);


