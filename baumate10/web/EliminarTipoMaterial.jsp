<%-- 
    Document   : EliminarTipoMaterial
    Created on : 17-mar-2014, 15:41:56
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <title>JSP Page</title>
    </head>
    <body>
       <p>Nombre del Tipo de Material</p>
        <input name="txtNombretm" type="text" id="txtNombretm">
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        
        <table id="tbltipomaterial">
            
        </table>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/EliminarTipoMaterial.js" type="text/javascript"></script>    </body>
</html>
