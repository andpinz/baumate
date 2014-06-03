<%-- 
    Document   : EliminarMaterial
    Created on : 16-mar-2014, 22:59:12
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="Css/eliminarmaterial.css">
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>
        
        <div id="contenedor">
            <div id="titulo">
        <h1>Eliminar Material</h1>
            </div>
            <div id="formulario">
                <label id="nombrematerial">Nombre del Material:</label><input name="txtnombrematerial" type="text" id="txtnombrematerial" lbl="lblnombrematerial">
        <input type="button" id="btnBuscar" value="Buscar">
            </div>
            <div id="tabla">
                <table id="tblmaterial" ></table>
            </div>
                </div>

        <script src="js/EliminarMateriales.js" type="text/javascript"></script>
    </body>
</html>
