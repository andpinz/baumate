<%-- 
    Document   : EliminarFormula
    Created on : 28-abr-2014, 19:53:34
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="Css/eliminarmaterialporpiso.css">
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>
        
        <div id="contenedor">
            <div id="titulo">
        <h1>Eliminar Material Por Piso</h1>
            </div>
            <div id="formulario">
            <label>Material:</label><select name="cbomaterial" id="cbomaterial"></select>
            <label id="tipopiso">Tipo de Piso:</label><select name="cbotipopiso" id="cbotipopiso"></select>
        <input type="button" id="btnBuscar" value="Buscar">
            </div>
            <div id="tabla">
                <table id="tblformula"></table>
            </div>
                </div>

        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/EliminarFormula.js" type="text/javascript"></script>
    </body>
</html>
