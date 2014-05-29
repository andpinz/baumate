<%-- 
    Document   : InsertarTipoMaterial
    Created on : 17-mar-2014, 15:40:52
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
        <div id="main">
            <div id="contenedor">
                <div id="Cabecera">
                    <p>Ingresar Nuevo Material</p>
                </div>
                <div id="cuerpo">
                    <p>Nombre del Tipo de Material</p>
                    <input type="text" name="txtNombreTipoMaterial" id="txtNombreTipoMaterial">
                    <p><input type="button" id="btnGuardar" value="Guardar"></p>
                </div>
            </div>    
        </div>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/IngresarTipoMaterial.js" type="text/javascript"></script>
    </body>
</html>
