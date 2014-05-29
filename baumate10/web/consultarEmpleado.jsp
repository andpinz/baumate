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
         <link rel="stylesheet" type="text/css" href="Css/Master.css">
         <jsp:include page="administrador.jsp"></jsp:include>
        <title>Consultar Empleado</title>
    </head>
    <body>
        <form>
            <h1>Buscar empleado</h1>
        <p>Identificaciòn
        <input  type="text" id="txtdocumento"></p>
        <p> Nombre 
        <input  type="text" id="txtnombre"></p>
        <p><input type="button" id="btnbuscar" value="Buscar"></p>
        
        <table id="tblEmpleado">
            
        </table>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/consultarempleado.js" type="text/javascript"></script>
        </form>
    </body>
</html>
