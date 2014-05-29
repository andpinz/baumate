<%-- 
    Document   : ConsultarTipoMaterial
    Created on : 17-mar-2014, 15:41:13
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
        <input name="txtidtipomaterial" type="text" id="txtidtipomaterial">
       
        <p><input type="button" id="btnConsultar" value="Consutar"></p>
        
        <table id="tblmaterial">
            
        </table>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/ConsultarTipoMaterial.js" type="text/javascript"></script>  
    </body>
</html>
