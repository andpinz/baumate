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
        <title>Eliminar Material Ofrecido</title>
        <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body>
        <form>
        <h1>Materiales</h1><br>
        
        <p>MaterialOfrecido</p>
        <select name="cboidmaterial" id="cboidmaterial">
        </select>
        <p>Proveedor</p>
        <select name="cboidproveedor" id="cboidproveedor">
        </select>
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tblMatofre">
        </table>
        </form>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/EliminarMaterialOfrecido.js" type="text/javascript"></script>
    </body>
</html>
