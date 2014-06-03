<%-- 
    Document   : ModificarMaterialOfrecido
    Created on : 29-abr-2014, 2:10:52
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="Css/modificarmaterialofrecido.css">
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>
        
        <div id="contenedor">
            <div id="titulo">
        <h1>Modificar Material Ofrecido</h1>
            </div>
            <div id="formulario">
            <input type="hidden" name="txtidmaterialofrecido" id="txtidmaterialofrecido">
                    <label>Material:</label><select name="cbomaterial" id="cbomaterial"></select>
                    <label id="proveedor">Proveedor:</label><select name="cboidproveedor" id="cboidproveedor"></select>
                    <input type="button" id="btnBuscarMatofre" value="Seleccionar">
                    <label id="costo">Costo de Material:</label><input type="text" name="txtcosto" id="txtcosto" lbl="lblcosto">
                    <input type="button" id="btnGuardar" value="Guardar">
                    <input type="button" id="btnLimpiar" value="Cancelar">
            </div>
                </div>

        <script src="js/validaciones.js" type="text/javascript" ></script>
        <script src="js/ModificarMaterialOfrecido.js" type="text/javascript"></script>
    </body>
</html>
