<%-- 
    Document   : ConsultarCargo
    Created on : 17/03/2014, 04:13:52 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <title>Consultar cargo</title>
    </head>
    <body>
        
        <p>Nombre Cargo</p>
        <input name="txtnombre" type="text" id="txtnombre">
       
        <p><input type="button" id="btnbuscar" value="Buscar"></p>
        <table id="tblProveedores">
            
        </table>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/consultarcargo.js" type="text/javascript"></script>
    </body>
</html>
