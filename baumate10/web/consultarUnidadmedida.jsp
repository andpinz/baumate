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
         <jsp:include page="administrador.jsp"></jsp:include>
        <title>Consultar Unidad de medida</title>
    </head>
    <body>
        <form>
        <h1>Consultar unidad de medida</h1>
        <p>idunidadmedida</p>
        <input name="txtidunidadmedida" type="text" id="txtidunidadmedida">
       
        <p><input type="button" id="btnbuscar" value="Buscar"></p>
        
        <table id="tblunidadmedida">
            
        </table>
        </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/consultarunidadmedida.js" type="text/javascript"></script>
    </body>
</html>