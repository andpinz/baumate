<%-- 
    Document   : InsertarTipoVenta
    Created on : 31-may-2014, 18:05:22
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Insertar Tipo Venta</title>
    </head>
    <body>
        <h1>Insertar Tipo de Venta</h1>
        <p>Tipo de venta <input type="text" name="txtDescripciontipoventa" id="txtDescripciontipoventa"></p>
        <p><input type="button" id="bntGuardar" value="Guardar">
            <input type="button" id="btnLimpiar" value="Limpiar"></p>
        
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/InsertarTipoVenta.js" type="text/javascript"></script>
    </body>
</html>
