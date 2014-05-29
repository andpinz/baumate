<%-- 
    Document   : ConsultarVenta
    Created on : 27-abr-2014, 20:34:34
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Master.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript" ></script>
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Consultar Venta</title>
    </head>
    <body>
        <form>
        <h1>Ventas</h1>
        
        <p>Numero de registro de Venta</p>
        <input type="text" id="txtIdventa">
        
        <p>Identificacion de la Venta</p>
        <input type="text" id="txtidentificacionventa">
        
        <p><input type="button" id="btnbuscar" value="Buscar"></p>
        
        <table id="tblVentas">
        </table>
        
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/ConsultarVenta.js" type="text/javascript"></script>
        </form>
    </body>
</html>
