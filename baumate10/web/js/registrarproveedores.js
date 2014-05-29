(function($){
    listarCiudades();
    $('#btnenviar').on('click',insertar);
    $('#btncancelar').on('click',limpiar);
    init();
    
    function init(){
        var vm = new validadores();
        $('#txtidproveedores').blur(vm.validarnumerocamposvacios);
        $('#txtnombreempresa').blur(vm.validarcamposvacios);
        $('#txttelefono').blur(vm.validarnumerocamposvacios);
        $('#txtdireccion').blur(vm.validarcamposvacios);
        
        
        
    }
    
   function listarCiudades(){
        $.ajax({
            'url':'listarciudades',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#Sidciudad');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombreciudad);
                    d2.attr('value',item.idciudad)
                    content.append(d2);
                });
            }
        });
    }    
    
    function insertar(){
        var txtidproveedores = $('#txtidproveedores').val();
        var txtnombreempresa = $('#txtnombreempresa').val();
        var Sidciudad = $('#Sidciudad').val();
        var txttipomaterial = $('#txttipomaterial').val();
        var hiddenfoto = $('#respuesta').val();
        var txtdireccion = $('#txtdireccion').val();
        var txttelefono = $('#txttelefono').val();
        var Sestado = $('#Sestado').val();
        $.ajax({
            'url':'insertarproveedores',
            'data':{
                'idproveedores':txtidproveedores,
                'nombreempresa':txtnombreempresa,
                'idciudad':Sidciudad,
                'tipomaterial':txttipomaterial,
                'foto':hiddenfoto,
                'direccion':txtdireccion,
                'telefono':txttelefono,
                'estado':Sestado
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro crear el proveedor satisfactoriamente');
                   
                }else{
                    alert('no se logro crear el proveedor');
                }
            }
        });
        
    }
     function limpiar(){
          $("#txtidproveedores").val("");  
          $("#txtnombreempresa").val("");  
          $("#Sidciudad").val("");  
          $("#txttipomaterial").val("");  
          $("#respuesta").val("");  
          $("#txttelefono").val("");  
          $("#txtdireccion").val("");  
          $("#Sestado").val("");  
     }
    function error(error){
        console.error(error);
    }
    function valing(){
        var ob=$([
            {
                'nom': 'txtidproveedores',
                'tip': 5, //1=numeros, 2=letras, 3=vacios
                'lbl' : 'lblidproveedores'
            },
            {
                 'nom': 'txtnombreempresa',
                'tip': 3, //1=numeros, 2=letras, 3=vacios
                'lbl' : 'lblnombreempresa'
            },
             {
                 'nom': 'txttelefono',
                'tip': 5, //1=numeros, 2=letras, 3=vacios
                'lbl' : 'lblnombreempresa'
            },
             {
                 'nom': 'txtdireccion',
                'tip': 3, //1=numeros, 2=letras, 3=vacios
                'lbl' : 'lbldireccion'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            insertar();
        }
    }
    
    
    
})(jQuery);

