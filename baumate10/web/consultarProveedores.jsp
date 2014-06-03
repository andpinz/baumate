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
         <link rel="stylesheet" type="text/css" href="Css/consultarproveedores.css">
         <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>
        
        <div id="contenedor">
            <div id="titulo">
        <h1>Consultar Proveedor</h1>
            </div>
            <div id="formulario">
                <label id="nit">Nit del proveedor:</label><input name="txtidproveedores" type="text" id="txtidproveedores">
        <input type="button" id="btnbuscar" value="Buscar">
            </div>
            <div id="tabla">
                <table id="tblProveedores"></table>
            </div>
                </div>
        
        <script src="js/consultarproveedores.js" type="text/javascript"></script>
    </body>
</html>
