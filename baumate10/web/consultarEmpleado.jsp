<%-- 
    Document   : consultarEmpleado
    Created on : 22/03/2014, 12:59:58 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="Css/consultarempleado.css">
         <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>
        <div id="contenedore">
            <div id="titulo">
        <h1>Consultar Empleado</h1>
            </div>
            <div id="formulario">
                <label id="documento">Documento:</label><input type="text" id="txtdocumento">
                <label id="nombre">Nombre:</label><input  type="text" id="txtnombre">
        <input type="button" id="btnbuscar" value="Buscar">
            </div>
            <div id="tabla">
                <table id="tblEmpleado"></table>
            </div>
                </div>
        <script src="js/consultarempleado.js" type="text/javascript"></script>
    </body>
</html>
