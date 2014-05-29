<%-- 
    Document   : consultarProveedores
    Created on : 16/03/2014, 03:35:09 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
         <jsp:include page="administrador.jsp"></jsp:include>
        <title>Consultar Porveedores</title>
    </head>
    <body>
        <h1>Buscar proveedores</h1>
        <p>NIT Proveedor</p>
        <input name="txtidproveedores" type="text" id="txtidproveedores">
       
        <p><input type="button" id="btnbuscar" value="Buscar"></p>
        <table id="tblProveedores"></table>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/consultarproveedores.js" type="text/javascript"></script>
    </body>
</html>
