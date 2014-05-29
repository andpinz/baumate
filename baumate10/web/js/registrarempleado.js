(function($){
    listarCargo();
    listarTipoDocumento();
    $('#btnenviar').on('click',valing);
      $('#btncancelar').on('click',limpiar);
    init();
    
     function init(){
        var vm = new validadores();
        $('#txtprimernombre').blur(vm.validarletrascamposvacios);
        $('#txtsegundonombre').blur(vm.validarletras);
        $('#txtprimerapellido').blur(vm.validarletrascamposvacios);
        $('#txtsegundoapellido').blur(vm.validarletras);
//        $('#txtdireccion').blur(vm.validarcamposvacios);
//        $('#txttelefono').blur(vm.validarnumerocamposvacios);
        $('#txtsalario').blur(vm.validarnumeros);
        $('#txtdocumento').blur(vm.caracterecamposvacios);
        
        
        
    }
    
   function listarCargo(){
        $.ajax({
            'url':'listarcargo',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#Scargo');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombre);
                    d2.attr('value',item.idcargo)
                    content.append(d2);
                });
            }
        });
    }    
    
//       function listarUsuario(){
//        $.ajax({
//            'url':'listarusuarioA',
//            'type':'POST',
//            'error':error,
//            'success': function(data) {
//                data = $(JSON.parse(data))
//                var content = $('#Susuario');
//                content.html('');
//                data.each(function(i,item){
//                    var d2 = $('<option>').text(item.correo);
//                    d2.attr('value',item.idUsuario)
//                    content.append(d2);
//                });
//            }
//        });
//    }    
    
     function listarTipoDocumento(){
        $.ajax({
            'url':'listartipodocumento',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                var content = $('#Stipodocumento');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.descripcion);
                    d2.attr('value',item.idtipoIdentificacion)
                    content.append(d2);
                });
            }
        });
    }    
    
    
    
    function insertar(){
        var txtprimernombre = $('#txtprimernombre').val();
        var txtsegundonombre = $('#txtsegundonombre').val();
        var txtprimerapellido = $('#txtprimerapellido').val();
        var txtsegundoapellido = $('#txtsegundoapellido').val();
        var txtdireccion = $('#txtdireccion').val();
        var txttelefono = $('#txttelefono').val();
        var txtsalario = $('#txtsalario').val();
        var txtfechanacimiento = $('#txtfechanacimiento').val();
        var Scargo = $('#Scargo').val();
        var Stipodocumento = $('#Stipodocumento').val();
        var txtdocumento = $('#txtdocumento').val();
        var Sestado = $('#Sestado').val();
       
        $.ajax({
            'url':'insertarempleado',
            'data':{
                'primernombre':txtprimernombre,
                'segundonombre':txtsegundonombre,
                'primerapellido':txtprimerapellido,
                'segundoapellido':txtsegundoapellido,
                'direccion':txtdireccion,
                'telefono':txttelefono,
                'salario':txtsalario,
                'fechanacimiento':txtfechanacimiento,
                'idcargo':Scargo,
                'tipodocumento':Stipodocumento,
                'documento':txtdocumento,
                'estado':Sestado
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                //data = $(JSON.parse(data))
                if (data==1) {
                    alert('se logro registrar el empleado satisfactoriamente');
                    setTimeout("location.href='administrador.jsp'", 500);
                }else{
                    alert('no se logro registrar el empleado');
                }
            }
        });
        
    }
     function limpiar(){
          $("#txtprimernombre").val("");  
          $("#txtsegundonombre").val("");  
          $("#txtprimerapellido").val("");  
          $("#txtsegundoapellido").val("");  
          $("#txtdireccion").val("");  
          $("#txttelefono").val("");  
          $("#txtsalario").val("");  
          $("#txtfechanacimiento").val("");  
          $("#Scargo").val("");
          $("#Stipodocumento").val("");  
          $("#txtdocumento").val("");  
          $("#Sestado").val("");  
       
     }
    
    function error(error){
        console.error(error);
    }
      function valing(){
        var ob=$([
            {
                'nom': 'txtprimernombre',
                'tip': 4, //1=numeros, 2=letras, 3=vacios, 4=vacios y letras, 5=vacios y numeros.
                'lbl' : 'lblprimernombre'
            },
            {
                 'nom': 'txtsegundonombre',
                'tip': 2, //1=numeros, 2=letras, 3=vacios
                'lbl' : 'lblsegundonombre'
            },
             {
                 'nom': 'txtprimerapellido',
                'tip': 4, //1=numeros, 2=letras, 3=vacios
                'lbl' : 'lblprimerapellido'
            },
             {
                 'nom': 'txtsegundoapellido',
                'tip': 2, //1=numeros, 2=letras, 3=vacios
                'lbl' : 'lblsegundoapellido'
            },
//             {
//                 'nom': 'txtdireccion',
//                'tip': 3, //1=numeros, 2=letras, 3=vacios
//                'lbl' : 'lbldireccion'
//            },
//             {
//                 'nom': 'txttelefono',
//                'tip': 5, //1=numeros, 2=letras, 3=vacios
//                'lbl' : 'lbltelefono'
//            },
             {
                 'nom': 'txtsalario',
                'tip': 5, //1=numeros, 2=letras, 3=vacios
                'lbl' : 'lblsalario'
            },
             {
                 'nom': 'txtdocumento',
                'tip': 6, //1=numeros, 2=letras, 3=vacios
                'lbl' : 'lbldocumento'
            }
        ]);
        var v = new validaciones();
        var res = v.fntValidar(ob);
        if (res) {
            insertar();
        }
    }
    
    
})(jQuery);


