<%-- 
    Document   : eliminarempleado
    Created on : 22/03/2014, 10:00:03 PM
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
        <title>Eliminar empleado</title>
    </head>
    <body>
        <form>
        <h1>Eliminar empleado</h1>
         <p>Documento del empleado
        <input name="txtdocumento" type="text" id="txtdocumento"></p>
         <p>Nombre completo
        <input name="txtnombre" type="text" id="txtnombre"></p>
        
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tblEmpleado">
            
        </table>
        </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/eliminarempleado.js" type="text/javascript"></script>
    </body>
</html>
