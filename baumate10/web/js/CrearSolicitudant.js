(function($){
    listarProyectos();
    $('#btnBuscarId').on('click',buscador);
    $('#btnGuardar').on('click',guardar);
    
    function guardar(){
        var inda = $(this).attr('indtract');
        var i=0,j=0;
        var listjson = new Array();
        
        
        for (i = 0; i < inda; i++) {
            var imat = parseInt($('#hda'+i).val());
            for (j = 0; j < imat; j++) {
                
            }
        }
        
    }
    
    function listarProyectos(){
        $.ajax({
            'url':'listarproyectos',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#cboProyecto');
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.Nombre);
                    d2.attr('value',item.idproyecto);  
                    content.append(d2);
                });
            }
        });
    }    
    
    function listarProveedores(cboproveedor){
        $.ajax({
            'url':'listarproveedores',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = cboproveedor;
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombreempresa);
                    d2.attr('value',item.idproveedores);  
                    content.append(d2);
                });
            }
        });
    }    
    
    function buscador(){
        var idproyect = $('#cboProyecto').val();
        
        $.ajax({
            'url':'buscaractividad',
            'data':{
                'idproyecto':idproyect
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $('#tblActividades');
                content.html('');
                    
                data.each(function(i,item){
                    var div = $('<div>').attr('class','activities');//.text=(item.idtipopiso.nombre);
                    var divf = $('<div>').attr('class','matforms');//.text=(item.idtipopiso.nombre);
                    var divf = $('<div>').attr('vlact',item.codigo);//.text=(item.idtipopiso.nombre);
                    divf.attr('id','div' + i);
                    var div2 = $('<div>').attr('class','minact');//.text=(item.idtipopiso.nombre);
                    var h = $('<input>').attr('type','hidden');
                    h.attr('id','act'+item.codigo);
                    h.attr('value',item.codigo);
                    var p = $('<p>').text("Tipo de piso: " + item.idtipopiso.nombre);
                    var pp = $('<p>').text("Área: " + item.area);
                    var ppp = $('<p>').text("Descripcion: " + item.descripcion);
                    div2.append(h);
                    div2.append(p);
                    div2.append(pp);
                    div2.append(ppp);
                    div.append(div2);
                    content.append(div);
                    buscadorformula(('#div' + i),item,i);
                    content.append(divf);
                    $('#hdcont').val(i);
                });
            }
        });
        
    }
    
    function buscadorformula(contenedor,actividad,ind){
        
        var idtp =actividad.idtipopiso.codigo;
        
        $.ajax({
            'url':'buscarformulas',
            'data':{
                'idtipopiso' : idtp
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = $(contenedor);
                content.html('');
                
                var hda = $('<input>').attr('type','hidden');
                hda.attr('id','hda'+ind);
                var tbl = $('<table>').attr('class','tblformul');
                tbl.attr('id','tbl'+actividad.codigo);
                var trt = $('<tr>');
                var tdt = $('<td>').text('Material');
                trt.append(tdt);
                var tdt = $('<td>').text('Proveedor');
                trt.append(tdt);
                var tdt = $('<td>').text('Cantidad por Mtrs^2');
                trt.append(tdt);
                var tdt = $('<td>').text('Cantidad total');
                trt.append(tdt);
                var tdt = $('<td>').text('Valor Unitario');
                trt.append(tdt);
                var tdt = $('<td>').text('Valor total');
                trt.append(tdt);
                var tdt = $('<td>').text('Calcular');
                trt.append(tdt);
                var tdt = $('<td>').text('Eliminar');
                trt.append(tdt);
                tbl.append(trt);
                data.each(function(i,item){
                    var tr = $('<tr>').attr('id','tr' + ind + 'a' + i );
                    tr.attr('vlmaterial',item.idmaterial.idmateriales);
                    tr.attr('vlact',actividad.codigo);
                    var td = $('<td>');
                    var p = $('<p>').text(item.idmaterial.nombre);
                    td.append(p);
                    tr.append(td);
                    var td = $('<td>');
                    var txt = $('<select>');
                    txt.attr('id','cboprov'+ item.idmaterial.idmateriales + 'a' + actividad.codigo );
                    txt.attr('vlidma',item.idmaterial.idmateriales);
                    txt.attr('vlacta',actividad.codigo);
                    txt.click(preciomaterial);
                    listarProveedores(txt);
                    td.append(txt);
                    tr.append(td);
                    var td = $('<td>');
                    var txt = $('<input>').attr('type','text');
                    txt.attr('id','txtCantidad1'+ item.idmaterial.idmateriales + 'a' + actividad.codigo );
                    txt.attr('value',item.cantidad);
                    td.append(txt);
                    tr.append(td);
                    var td = $('<td>');
                    var txt = $('<input>').attr('type','text');
                    txt.attr('id','txtCantidadT'+ item.idmaterial.idmateriales + 'a' + actividad.codigo );
                    txt.attr('value',(item.cantidad + actividad.area));
                    td.append(txt);
                    tr.append(td);
                    var td = $('<td>');
                    var txt = $('<input>').attr('type','text');
                    txt.attr('id','txtpreciou'+ item.idmaterial.idmateriales + 'a' + actividad.codigo);
                    txt.attr('value',0);
                    td.append(txt);
                    tr.append(td);
                    var td = $('<td>');
                    var txt = $('<input>').attr('type','text');
                    txt.attr('id','txtpreciot'+ item.idmaterial.idmateriales + 'a' + actividad.codigo );
                    txt.attr('value',(0 * actividad.area));
                    td.append(txt);
                    tr.append(td);
                    var td = $('<td>');
                    var txt = $('<input>').attr('type','button');
                    txt.attr('id','btncal'+ item.idmaterial.idmateriales + 'a' + actividad.codigo );
                    txt.attr('value','calcular');
                    txt.on('click',calcular);
                    txt.attr('vlidma',item.idmaterial.idmateriales);
                    txt.attr('vlacta',actividad.codigo);
                    txt.attr('vlarea',actividad.area);
                    td.append(txt);
                    tr.append(td);
                    var td = $('<td>');
                    var txt = $('<input>').attr('type','button');
                    txt.attr('id','btnel'+ item.idmaterial.idmateriales + 'a' + actividad.codigo );
                    txt.attr('value','eliminar');
                    txt.on('click',eliminar);
                    txt.attr('vlidma',item.idmaterial.idmateriales);
                    txt.attr('vlacta',actividad.codigo);
                    td.append(txt);
                    tr.append(td);
                    tbl.append(tr);
                    hda.attr('value',i);
                });
                content.append(tbl);
                insertores(actividad,content,ind);
                content.append(hda);
            }
        });
    }
    
    function insertores(actividad,content,indtract){
        var tbl = $('<table>').attr('class','tblingre'+actividad.codigo);
        var trt = $('<tr>');
        var tdt = $('<td>').text('Material');
        trt.append(tdt);
        var tdt = $('<td>').text('Proveedor');
        trt.append(tdt);
        var tdt = $('<td>').text('Cantidad por Mtrs^2');
        trt.append(tdt);
        var tdt = $('<td>').text('Cantidad total');
        trt.append(tdt);
        var tdt = $('<td>').text('Valor Unitario');
        trt.append(tdt);
        var tdt = $('<td>').text('Valor total');
        trt.append(tdt);
        var tdt = $('<td>').text('Calcular');
        trt.append(tdt);
        var tdt = $('<td>').text('Agregar');
        trt.append(tdt);
        tbl.append(trt);
        
        var tr = $('<tr>').attr('id','trxa' + actividad.codigo);
        var td = $('<td>');
        var txt = $('<select>');
        txt.attr('id','cbomaterialxa' + actividad.codigo);
        txt.attr('vlacta',actividad.codigo);
        listarmateriales(txt);
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<select>');
        txt.attr('id','cboprovxa' + actividad.codigo);
        txt.attr('vlacta',actividad.codigo);
        txt.click(preciomaterialnuevo);
        listarProveedores(txt);
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','text');
        txt.attr('id','txtCantidad1xa' + actividad.codigo);
        txt.attr('value',0);
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','text');
        txt.attr('id','txtCantidadTxa' + actividad.codigo);
        txt.attr('value',0);
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','text');
        txt.attr('id','txtpreciouxa' + actividad.codigo);
        txt.attr('value',0);
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','text');
        txt.attr('id','txtpreciotxa' + actividad.codigo);
        txt.attr('value',(0 * actividad.area));
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','button');
        txt.attr('id','btncalxa' + actividad.codigo);
        txt.attr('value','calcular');
        txt.on('click',calcularagregado);
        txt.attr('vlacta',actividad.codigo);
        txt.attr('vlarea',actividad.area);
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','button');
        txt.attr('id','btnelxa' + actividad.codigo);
        txt.attr('value','Agregar');
        txt.on('click',agregar);
        txt.attr('vlacta',actividad.codigo);
        txt.attr('vlarea',actividad.area);
        txt.attr('indtract',indtract);
        td.append(txt);
        tr.append(td);
        tbl.append(tr);
        content.append(tbl);
    }
    
    function agregar(){
        var vlacta = $(this).attr('vlacta');
        var idmaterial =  $('#cbomaterialxa'+vlacta).val();
        var nombrematerial =  $('#cbomaterialxa'+vlacta+' option:selected').text();
        var cantidadu = $('#txtCantidad1xa'+vlacta).val();
        var area = $(this).attr('vlarea');
        var preciou = $('#txtpreciouxa'+vlacta).val();
        var inda = $(this).attr('indtract');
        var imat = parseInt($('#hda'+inda).val())+1;
        
        var tbl = $('#tbl'+vlacta);
        var tr = $('<tr>').attr('id','tr' + inda + 'a' + imat );
        tr.attr('vlmaterial',idmaterial);
        tr.attr('vlact',vlacta);
        var td = $('<td>');
        var p = $('<p>').text(nombrematerial);
        td.append(p);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<select>');
        txt.attr('id','cboprov'+ idmaterial + 'a' + vlacta );
        txt.attr('vlidma',idmaterial);
        txt.attr('vlacta',vlacta);
        txt.click(preciomaterial);
        listarProveedores(txt);
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','text');
        txt.attr('id','txtCantidad1'+ idmaterial + 'a' + vlacta );
        txt.attr('value',cantidadu);
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','text');
        txt.attr('id','txtCantidadT'+ idmaterial + 'a' + vlacta );
        txt.attr('value',(cantidadu * area));
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','text');
        txt.attr('id','txtpreciou'+ idmaterial + 'a' + vlacta);
        txt.attr('value',preciou);
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','text');
        txt.attr('id','txtpreciot'+ idmaterial + 'a' + vlacta );
        txt.attr('value',(preciou * (cantidadu * area)));
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','button');
        txt.attr('id','btncal'+ idmaterial + 'a' + vlacta );
        txt.attr('value','calcular');
        txt.on('click',calcular);
        txt.attr('vlidma',idmaterial);
        txt.attr('vlacta',vlacta);
        txt.attr('vlarea',area);
        td.append(txt);
        tr.append(td);
        var td = $('<td>');
        var txt = $('<input>').attr('type','button');
        txt.attr('id','btnel'+ idmaterial + 'a' + vlacta );
        txt.attr('value','eliminar');
        txt.on('click',eliminar);
        txt.attr('vlidma',idmaterial);
        txt.attr('vlacta',vlacta);
        td.append(txt);
        tr.append(td);
        tbl.append(tr);
        
        $('#hda'+inda).val((imat));
        
        limpiarinsertor(vlacta);
        
    }
    
    function limpiarinsertor(vlacta){
        $('#cbomaterialxa' + vlacta).val('');
        $('#cboprovxa' + vlacta).val('');
        listarProveedores($('#cboprov0a' + vlacta));
        $('#txtCantidad1xa' + vlacta).val(0);
        $('#txtCantidadTxa' + vlacta).val(0);
        $('#txtpreciouxa' + vlacta).val(0);
        $('#txtpreciotxa' + vlacta).val(0);
        
    }
    
    function listarmateriales(cbomateriales){
        $.ajax({
            'url':'listarmaterial',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                var content = cbomateriales;
                content.html('');
                data.each(function(i,item){
                    var d2 = $('<option>').text(item.nombre);
                    d2.attr('value',item.idmateriales);  
                    content.append(d2);
                });
            }
        });
    }
        
    function calcular(){
        var vlarea = $(this).attr('vlarea');
        var vlacta = $(this).attr('vlacta');
        var idmaterial = $(this).attr('vlidma');
        $('#txtCantidadT'+idmaterial+'a'+vlacta).val(($('#txtCantidad1'+idmaterial+'a'+vlacta).val() * vlarea));
        $('#txtpreciot'+idmaterial+'a'+vlacta).val(($('#txtpreciou'+idmaterial+'a'+vlacta).val() * $('#txtCantidadT'+idmaterial+'a'+vlacta).val()));
    }
    
    function calcularagregado(){
        var vlarea = $(this).attr('vlarea');
        var vlacta = $(this).attr('vlacta');
        $('#txtCantidadTxa'+vlacta).val(($('#txtCantidad1xa'+vlacta).val() * vlarea));
        $('#txtpreciotxa'+vlacta).val(($('#txtpreciouxa'+vlacta).val() * $('#txtCantidadTxa'+vlacta).val()));
    }
    
    function eliminar(){
        var vlacta = $(this).attr('vlacta');
        var idmaterial = $(this).attr('vlidma');
        $('#tr'+idmaterial+'a'+vlacta).remove();
    }
    
    function preciomaterialnuevo(){
        var vlacta = $(this).attr('vlacta');
        var idmaterial = $('#cbomaterialxa'+vlacta).val();
        var idproveedor = $(this).val();
        $.ajax({
            'url':'consultarprecioporproveedor',
            'data':{
                'idmaterial':idmaterial,
                'idproveedor':idproveedor
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                if (data.length > 0) {
                    $('#txtpreciouxa'+vlacta).val(data[0].costo);
                }else{
                    $('#txtpreciouxa'+vlacta).val(0);
                }
                
            }
        });
    }
    
    function preciomaterial(){
        var vlacta = $(this).attr('vlacta');
        var idmaterial = $(this).attr('vlidma');
        var idproveedor = $(this).val();
        $.ajax({
            'url':'consultarprecioporproveedor',
            'data':{
                'idmaterial':idmaterial,
                'idproveedor':idproveedor
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data));
                if (data.length > 0) {
                    $('#txtpreciou'+idmaterial+'a'+vlacta).val(data[0].costo);
                }else{
                    $('#txtpreciou'+idmaterial+'a'+vlacta).val(0);
                }
                
            }
        });
        
    }
    
    function error(error){
        console.error(error);
    }
    
})(jQuery);