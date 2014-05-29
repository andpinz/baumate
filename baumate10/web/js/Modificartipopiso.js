(function($) {
 
    $('#boton').on('click', valing);
    $('#btnBuscarId').on('click',buscador);
     $('#btnLimpiar').on('click', limpiarinformacion);
    
    function limpiarinformacion() {
        $('#txtNombre').val('');
         $('#txtcodigo').val('');
       
    }
    
function init(){
        var vm = new validadores();
        $('#txtNombre').blur(vm.validarletrascamposvacios);
    }

    function buscador(){
        $.ajax({
            'url':'buscartipopiso',
            'data':{
                'nombre': $('#txtcodigo').val()
                
                
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i,item){
                    
                    $('#codigo').val(item.codigo);
                    $('#txtNombre').val(item.nombre);
                    
                    
                });      
            }
        });
        
    }
    
     function modificartipopiso(){
        $.ajax({
           'url':'modificartipopiso',
           'data':{
               'codigo':$('#codigo').val(),
               'nombre':$('#txtNombre').val()
          },
            'error':error,
            'success':function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se modifico satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                   
                }else{
                    alert('no se guardo');
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
                'nom': 'txtNombre',
                'tip': 4 //1=numeros,2=letras,3=vacios,4=validarletrascamposvacios,5=validarnumerocamposvacios
                ,'lbl' : 'lbldescripcion'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            modificartipopiso();
        }
    }
})(jQuery);



