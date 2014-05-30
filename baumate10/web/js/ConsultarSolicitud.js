(function($) {
    var arrsolic = new Array();
    listarProyectos();
    listarProveedores();
    init();
    //listarProyectos2();
    $('#btnBuscarId').on('click', buscador);
    $('#btnGuardar').on('click', guardar);
    
    function init(){
        var str = "";
        str = cargSolicit();
        /*
        if (str != undefined) {
            arrsolic =  str.split(".");
        }
        //delCookie();
        if (arrsolic.length > 0) {*/
        if(str != "" && str != undefined){
            str = str.replace("=","");
            listarProveedoresFijado(str);
            buscador();
        }
    }
    
    function listarProveedoresFijado(valor) {
        $.ajax({
            'url': 'listarproveedores',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboProveedor');
                content.html('');
                data.each(function(i, item) {
                    if (valor == item.idproveedores) {
                        var d2 = $('<option selected>').text(item.nombreempresa);
                    }else{
                        var d2 = $('<option>').text(item.nombreempresa);
                    }
                    d2.attr('value', item.idproveedores);
                    content.append(d2);
                });
            }
        });
    }
    
    function cargSolicit(){
        var name = "numsolic";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length;) 
        {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) return c.substring(name.length,c.length);
            var valorcookie= c.split("=");
            return  valorcookie[1];
            //alert("cooki obtenida!");
        }
        return "";
    }
    
    function delCookie() {
//    function delCookie (name,path,domain) {
//        if (getCookie(name)) {
//            document.cookie = name + "=" +
//            ((path == null) ? "" : "; path=" + path) +
//            ((domain == null) ? "" : "; domain=" + domain) +
//            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
//        }
        var name="numsolic";
        var value= "";
        document.cookie = name + "=" + escape(value)+"; expires=Thu, 01-Jan-70 00:00:01 GMT " ;
    }
    
    function buscador(){
       
        $.ajax({
            'url': 'listarsolicitudes',
            'data':{
                'idproyecto': $('#cboProyecto').val()
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblSolicitudes');
                content.html('');
                var trt = $('<tr>');
                var tdt = $('<td>').text('Nùmero de la Orden');
                trt.append(tdt);
                tdt = $('<td>').text('Proveedor');
                trt.append(tdt);
                tdt = $('<td>').text('Fecha de pedido');
                trt.append(tdt);
                tdt = $('<td>').text('Fecha de recibido');
                trt.append(tdt);
                tdt = $('<td>').text('Editar');
                trt.append(tdt);
                content.append(trt);
                data.each(function(i, item) {
                    var tr = $('<tr>');
                    var td = $('<td>');
                    var hd = $('<input>').attr('type','hidden');
                    hd.val(item.idsolicitud);
                    hd.attr('id','hd'+i); 
                    td.text(item.idsolicitud);
                    td.append(hd);
                    tr.append(td);
                    var td = $('<td>');
                    var p = $('<p>').text(item.idproveedor.nombreempresa);
                    p.attr('id','p'+i); 
                    td.append(p);
                    tr.append(td);
                    var td = $('<td>');
                    var p = $('<p>').text(item.fechapedido);
                    p.attr('id','p2'+i); 
                    td.append(p);
                    tr.append(td);
                    var td = $('<td>');
                    var p = $('<p>').text(item.fecharecibido);
                    p.attr('id','p3'+i); 
                    td.append(p);
                    tr.append(td);
                    var td = $('<td>');
                    var lnk = $('<input>').attr('type','button');
                    lnk.attr('id','btn'+i); 
                    lnk.attr('idreg',item.idsolicitud); 
                    lnk.on('click',cargarSolicitud);
                    lnk.val("→");
                    td.append(lnk);
                    tr.append(td);
                    
                    content.append(tr);
                    
                });
            }
        });
    }
    /* desimplementado por problemas en trasabilidad
    function buscadorSolic(){
         $.ajax({
            'url': 'consultarlassolicitudes',
            'data':{
                'solicitudes': JSON.stringify(arrsolic)
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblSolicitudes');
                content.html('');
                var trt = $('<tr>');
                var tdt = $('<td>').text('Nùmero de la Orden');
                trt.append(tdt);
                tdt = $('<td>').text('Proveedor');
                trt.append(tdt);
                tdt = $('<td>').text('Fecha de pedido');
                trt.append(tdt);
                tdt = $('<td>').text('Fecha de recibido');
                trt.append(tdt);
                tdt = $('<td>').text('Editar');
                trt.append(tdt);
                content.append(trt);
                data.each(function(i, item) {
                    var tr = $('<tr>');
                    var td = $('<td>');
                    var hd = $('<input>').attr('type','hidden');
                    hd.val(item.idsolicitud);
                    hd.attr('id','hd'+i); 
                    td.text(item.idsolicitud);
                    td.append(hd);
                    tr.append(td);
                    var td = $('<td>');
                    var p = $('<p>').text(item.idproveedor.nombreempresa);
                    p.attr('id','p'+i); 
                    td.append(p);
                    tr.append(td);
                    var td = $('<td>');
                    var p = $('<p>').text(item.fechapedido);
                    p.attr('id','p2'+i); 
                    td.append(p);
                    tr.append(td);
                    var td = $('<td>');
                    var p = $('<p>').text(item.fecharecibido);
                    p.attr('id','p3'+i); 
                    td.append(p);
                    tr.append(td);
                    var td = $('<td>');
                    var lnk = $('<input>').attr('type','button');
                    lnk.attr('id','btn'+i); 
                    lnk.attr('idreg',item.idsolicitud); 
                    lnk.on('click',cargarSolicitud);
                    lnk.val("→");
                    td.append(lnk);
                    tr.append(td);
                    
                    content.append(tr);
                    
                });
            }
        });
    }
    */
    function cargarSolicitud(){
        var idsolic =$(this).attr('idreg');
        $.ajax({
           'url': 'buscarsolicitud',
           'data':{
               'idsolicitud': idsolic
           },
           'type': 'POST',
           'error': error,
           'success': function(data) {
               data = $(JSON.parse(data));
               data.each(function(i, item) {
                   $('#hdidsolicitud').val(item.idsolicitud);
                   $('#pidsolic').val(item.idsolicitud);
                   $('#dtfechpedido').val(item.fechapedido);
                   $('#dtfechrecibido').val(item.fecharecibido);
                   //$('#cboProyectoc').val(item.idproyecto.idproyecto);
                   $('#cboProveedor').val(item.idproveedor.idproveedores);
                   cargarDetalleSolic(idsolic);
               });
           }
        });
    }
    
    function cargarDetalleSolic(idsolic){
        $.ajax({
           'url': 'consultarsolicasignadas',
           'data':{
               'idsolicitud': idsolic
           },
           'type': 'POST',
           'error': error,
           'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblSolicitudesAsignadas');
                content.html('');
                var tr = $('<tr>');
                var td = $('<td>').text('Material');
                tr.append(td);
//                var td = $('<td>').text('Cantidad recibida');
//                tr.append(td);
                var td = $('<td>').text('Cantidad');
                tr.append(td);
                var td = $('<td>').text('Precio');
                tr.append(td);
                var td = $('<td>').text('Observaciones');
                tr.append(td);
                content.append(tr);
                data.each(function(i, item) {
                    var tr = $('<tr>');
                    var td = $('<td>');
                    var cbomat = $('<select>').attr('id','cboMaterial'+i);
                    td.append(cbomat);
                    tr.append(td);
                    listarmateriales(cbomat,item.idmaterial.idmateriales);
                    //$(cbomat).val(item.idmaterial.idmateriales);
                    
//                    var td = $('<td>');
//                    var txt = $('<input type="text" >').attr('id','txtcantidadrecibida'+i);
//                    txt.val(item.cantidadrecibida);
//                    td.append(txt);
//                    tr.append(td);

                    var td = $('<td>');
                    var txt = $('<input type="text" >').attr('id','txtcantidadsolicitada'+i);
                    txt.val(item.cantidadsolicitada);
                    td.append(txt);
                    tr.append(td);

                    var td = $('<td>');
                    var txt = $('<input type="text" >').attr('id','txtprecio'+i);
                    txt.val(item.precio);   
                    td.append(txt);
                    tr.append(td);

                    var td = $('<td>');
                    var txt = $('<input type="text" >').attr('id','txtobservacion'+i);
                    txt.val(item.observacion);
                    td.append(txt);
                    tr.append(td);

                    content.append(tr);

                    //$('#cboMaterial'+i).val(item.idmaterial.idmateriales);
                    
                    
                });
           }
        });
    }  
    
    function listarProyectos() {
        $.ajax({
            'url': 'listarproyectos',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboProyecto');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.Nombre);
                    d2.attr('value', item.idproyecto);
                    content.append(d2);
                });
            }
        });
    }
    
    function listarmateriales(cbomat, valor) {
        $.ajax({
            'url': 'listarmaterial',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $(cbomat);
                content.html('');
                data.each(function(i, item) {
                    if (valor == item.idmateriales) {
                        var d2 = $('<option Selected>').text(item.nombre);
                    }else{
                        var d2 = $('<option>').text(item.nombre);
                    }
                        d2.attr('value', item.idmateriales);
                        content.append(d2);
                });
            }
        });
    }

    function error(error) {
        console.error(error);
    }
    
    function listarProveedores() {
        $.ajax({
            'url': 'listarproveedores',
            'type': 'POST',
            'error': error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboProveedor');
                content.html('');
                data.each(function(i, item) {
                    var d2 = $('<option>').text(item.nombreempresa);
                    d2.attr('value', item.idproveedores);
                    content.append(d2);
                });
            }
        });
    }
    
    function guardar(){
        
        $.ajax({
            'url': 'modificarsolicitud',
            'data':{
                'idsolicitud': $('#hdidsolicitud').val() ,
                'fechapedido': $('#dtfechpedido').val() ,
                'idproyecto': $('#cboProyecto').val() ,
                'idproveedor': $('#cboProveedor').val() 
            },
            'type': 'POST',
            'error': error,
            'success': function(data) {
                if (data==1) {
                   
                    var nft = $('#tblSolicitudesAsignadas >tbody >tr').length;
                    for (var i = 0; i < (nft-1); i++) {
                        $.ajax({
                            'url': 'modificarsolicasignadas',
                            'data':{
                                'idsolicitud':  $('#hdidsolicitud').val(),
                                'idmaterial': $('#cboMaterial'+i).val(),
                                'cantidadsolicitada': $('#txtcantidadsolicitada'+i).val(),
                                'observaciones': $('#txtobservacion'+i).val()
                            },
                            'type': 'POST',
                            'error': error,
                            'success': function(data) {
//                                data = $(JSON.parse(data));                    
//                                data.each(function(i, item) {                        
//                                });
                                if (data == 1) {
                                    if (i==(nft-2)) {
                                        alertify.log('Se guardado la orden correctamente');
                                        limpiar();
                                        buscador();
                                    }
                                }else{
                                    alertify.error('error al guardar la fila numero '+(i+1));
                                }
                            }
                        });
                    }
                   
                }else{
                    alert('No se logro modificar la informacion');
                }
            }
        });
    }
    
    function limpiar(){
        $('#hdidsolicitud').val('');
        $('#pidsolic').val('');
        $('#dtfechpedido').val('');
        $('#dtfechrecibido').val('');
        $('#cboProveedor').val('');
        $('#tblSolicitudesAsignadas').html('');
    }

})(jQuery);