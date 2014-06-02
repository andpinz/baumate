<%-- 
    Document   : EliminarVenta
    Created on : 27-abr-2014, 22:11:13
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript" ></script>
        <title>Eliminar Venta</title>
        <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body>
        <form>
        <h1>Eliminar Ventas</h1><br>
        
        <p>Tipo de Venta</p>
        <input type="text" id="txtIdventa">
        <select id="">
        </select>
        
        <p>Identificacion de la Venta</p>
        <input type="text" id="txtidentificacionventa">
        
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        
        <table id="tblVentas">
            
        </table>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/EliminarVenta.js" type="text/javascript"></script>
        </form>
    </body>
</html>
