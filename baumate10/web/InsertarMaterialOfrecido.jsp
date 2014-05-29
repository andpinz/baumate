<%-- 
    Document   : InsertarMaterialOfrecido
    Created on : 28-abr-2014, 8:40:31
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"> </script>
        <title>Insertar Material Ofrecido</title>
        <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body>
        <form>
                <p>Nuevo Material Ofrecido</p>
                <p>Material</p>
                <select name="cboidmaterial" id="cboidmaterial">
                </select>
                <p>costo</p>
                <input name="txtcosto" type="text" id="txtcosto" lbl="lblcosto">
                <label id="lblcosto" class="lblestil" ></label>
                <p>Proveedor</p>
                <select name="cboidproveedor" id="cboidproveedor">
                 
                </select>
                <p><input type="button" id="btnGuardar" value="Guardar"></p>
                <p><input type="button" id="btnLimpiar" value="cancelar"></p>
            </div>
</form>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/InsertarMaterialOfrecido.js" type="text/javascript"></script>
    </body>
</html>
