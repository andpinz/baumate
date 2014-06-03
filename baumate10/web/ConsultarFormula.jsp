<%-- 
    Document   : ConsultarFormula
    Created on : 28-abr-2014, 19:11:37
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript" ></script>
        <link rel="stylesheet" type="text/css" href="Css/consultarmaterialporpiso.css">
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>
        
        <div id="contenedor">
            <div id="titulo">
        <h1>Cosnultar Material Por Piso</h1>
            </div>
            <div id="formulario">
            <label>Material:</label><select name="cbomaterial" id="cbomaterial"></select>
            <label id="tipopiso">Tipo de piso:</label><select name="cbotipopiso" id="cbotipopiso"></select>
        <input type="button" id="btnBuscarpornombre" value="buscar">
            </div>
            <div id="tabla">
                <table id="tblformula"></table>
            </div>
                </div>

        <script src="js/validaciones.js" type="text/javascript"></script> 
        <script src="js/ConsultarFormula.js" type="text/javascript"></script>
        </div>
    </body>
</html>
