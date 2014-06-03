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
        <link rel="stylesheet" type="text/css" href="Css/nuevomaterialofrecido.css">
        <title>Baumate</title>
        <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body>
        
        <div id="contenedor">
            <div id="titulo">
        <h1>Nuevo Material Ofrecido</h1>
            </div>
            <div id="formulario">
                <label id="material">Material:</label><select name="cboidmaterial" id="cboidmaterial"></select>
            <label id="costo">Costo:</label><input name="txtcosto" type="text" id="txtcosto" lbl="lblcosto">
            <label id="proveedor">Poroveedor</label><select name="cboidproveedor" id="cboidproveedor"></select>
                <input type="button" id="btnGuardar" value="Guardar">
                <input type="button" id="btnLimpiar" value="cancelar">
            </div>
                </div>

        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/InsertarMaterialOfrecido.js" type="text/javascript"></script>
    </body>
</html>
