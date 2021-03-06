<%-- 
    Document   : EliminarMaterialOfrecido
    Created on : 29-abr-2014, 3:41:47
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript" ></script>
        <link rel="stylesheet" type="text/css" href="Css/eliminarmaterialofrecido.css">
        <title>Baumate</title>
        <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body>
        
        <div id="contenedor">
            <div id="titulo">
        <h1>Eliminar Material Ofrecido</h1>
            </div>
            <div id="formulario">
            <label>Material ofrecido:</label><select name="cboidmaterial" id="cboidmaterial"></select>
            <label id="proveedor">Proveedor:</label><select name="cboidproveedor" id="cboidproveedor"></select>
        <input type="button" id="btnBuscar" value="Buscar">
            </div>
            <div id="tabla">
                <table id="tblMatofre"></table>
            </div>
                </div>

        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/EliminarMaterialOfrecido.js" type="text/javascript"></script>
    </body>
</html>
