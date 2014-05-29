<%-- 
    Document   : ConsultarMaterialOfrecido
    Created on : 29-abr-2014, 3:29:13
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Consultarp Material Ofrecido</title>
        <script src="js/jquery-2.1.0.min.js" type="text/javascript" ></script>
        <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body>
        <form>
        <div id="informacion">
        <h1>Material Ofrecido</h1>
        <p>MaterialOfrecido</p>
        <select name="cboidmaterial" id="cboidmaterial">
        </select>
        <p>Proveedor</p>
        <select name="cboidproveedor" id="cboidproveedor">
        </select>
        <p><input type="button" id="btnBuscarpornombre" value="buscar"></p>
        <table id="tblmaterialofrecido" border="1">
        </table>
        </div>
         </form>   
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script> 
        <script src="js/ConsultarMaterialOfrecido.js" type="text/javascript"></script>
    </body>
</html>
