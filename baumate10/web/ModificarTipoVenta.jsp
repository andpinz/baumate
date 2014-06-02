<%-- 
    Document   : TipoVenta
    Created on : 31-may-2014, 19:25:10
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp" ></jsp:include> 
        <title>Modificar Tipo Venta</title>
    </head>
    <body>
        <input type="hidden" id="txtidTipoVenta" name="txtidTipoVenta">
        <p>Tipo de venta <input type="text" name="txtDescripciontipoventa" id="txtDescripciontipoventa"><input type="button" id="btntraerdatos" value="Traer Datos"></p>
        <input type="text" id="txtDetalle" name="txtDetalle">
        
        <p><input type="button" id="bntGuardar" value="Guardar">
            <input type="button" id="btnLimpiar" value="Limpiar"></p>
        
        <script src="js/ModificarTipoVenta.js" type="text/javascript"></script>
    </body>
</html>
