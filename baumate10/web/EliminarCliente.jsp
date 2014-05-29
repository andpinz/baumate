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
 <jsp:include page="administrador.jsp"></jsp:include>
    <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <title>Eliminar Cliente</title>
    </head>
    <form>
    <div id="main">
        <div id="contenedor">
            <div id="cabecera"></div>
    <body>
        <h1>Eliminar Clientes</h1>
        <p>Documento</p>
        <input name="txtDocumento" type="text" id="txtDocumento">
        
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tblCliente">
            
        </table>
        </div>
    </div>
            </form>
    <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/EliminarCliente.js" type="text/javascript"></script>
    </body>
</html>
