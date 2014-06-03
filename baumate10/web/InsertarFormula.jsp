<%-- 
    Document   : InsertarFormula
    Created on : 28-abr-2014, 16:33:41
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="Css/nuevomaterialporpiso.css">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>

        <div id="contenedor">
            <div id="titulo">
        <h1>Nuevo Material Por Piso</h1>
            </div>
            <div id="formulario">
                <label id="material">Material:</label><select name="cboidMaterial" id="cboidMaterial"></select>
                <label id="tipopiso">Tipo de piso:</label><select name="cbotipopiso" id="cbotipopiso"></select>
                <label id="cantidad">Cantidad:</label><input type="text" name="txtcantidad" id="txtcantidad" lbl="lblcantidad">
                    <input type="button" id="btnGuardar" value="Guardar">
                    <input type="button" id="btnLimpiar" value="Cancelar">
            </div>
                </div>

        <script src="js/validaciones.js" type="text/javascript" ></script>
        <script src="js/InsertarFormula.js" type="text/javascript"></script>
    </body>
</html>
