<%-- 
    Document   : EliminarCliente
    Created on : 17/03/2014, 06:53:16 PM
    Author     : Johanagt
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
       <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
       <link rel="stylesheet" type="text/css" href="Css/eliminarcliente.css">
 <jsp:include page="administrador.jsp"></jsp:include>
    <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <title>Baumate</title>
    </head>
    <body>
        <div id="contenedor">
            <div id="titulo">
        <h1>Eliminar Cliente</h1>
            </div>
            <div id="formulario">
        <input type="button" id="btnBuscar" value="Buscar">
            <input name="txtDocumento" type="text" id="txtDocumento" placeholder="Documento">
            </div>
            <div id="tabla">
                <table id="tblCliente"></table>
            </div>
                </div>
        
        <script src="js/EliminarCliente.js" type="text/javascript"></script>
    </body>
</html>
