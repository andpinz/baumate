(function($){
    listarCiudades();
    $('#btnGuardar').on('click',valing);
    $('#btnBuscarId').on('click',consultarProyecto);
      $('#btncancelar').on('click',limpiar);
     init();
    
    function init(){
        var vm = new validadores();
        $('#txtidproveedores').blur(vm.validarnumerocamposvacios);
        $('#txtnombreempresa').blur(vm.validarcamposvacios);
        $('#txttelefono').blur(vm.validarnumerocamposvacios);
        $('#txtdireccion').blur(vm.validarcamposvacios);
        
        
        
    }
    function consultarProyecto(){
        $.ajax({
            'url':'consultarproveedores',
            'data':{
                'idproveedores': $('#txtidproveedores').val()
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                data.each(function(i,item){
                    $('#txtidproveedores').val(item.idproveedores);
                    $('#txtnombreempresa').val(item.nombreempresa);
                    $('#Sidciudad').val(item.idciudad.idciudad);
                    $('#txttipomaterial').val(item.tipomaterial);
                    $('#respuesta').val(item.foto);
                     var fotico = $('#divFotico');
                $("#respuesta").val(item.foto);
                    fotico.html('');
                    var img = $('<img>').attr('src',item.foto);
                    img.attr('width','100px');
                    img.attr('height','100px')
                    fotico.append(img);
                    $('#txttelefono').val(item.telefono);
                    $('#txtdireccion').val(item.direccion);
                    $('#Sestado').val(item.estado);
                    
                });
                
                /*
                var content = $('#cboCiudad');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombreciudad);
                    d2.attr('value',item.idciudad)  
                    content.append(d2);
                });
                */
            }
        });
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
    
    function modificar(){
        var idproveedores = $('#txtidproveedores').val()
        var txtnombreempresa = $('#txtnombreempresa').val();
        var Sidciudad = $('#Sidciudad').val();
        var txttipomaterial = $('#txttipomaterial').val();
        var respuesta = $('#respuesta').val();
        var txttelefono = $('#txttelefono').val();
        var txtdireccion = $('#txtdireccion').val();
        var Sestado = $('#Sestado').val();
        $.ajax({
            'url':'modificarproveedores',
            'data':{
                'idproveedores': idproveedores,
                'nombreempresa':txtnombreempresa,
                'idciudad':Sidciudad,
                'tipomaterial':txttipomaterial,
                'foto':respuesta,
                'telefono':txttelefono,
                'direccion':txtdireccion,
                'estado' : Sestado
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
            modificar();
        }
    }
    
    
    
})(jQuery);