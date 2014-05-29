<%-- 
    Document   : eliminarcargo
    Created on : 17/03/2014, 05:49:58 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <title>Eliminar cargo</title>
    </head>
    <body>
       <h1>Cargo</h1>
        <p>Nombre del cargo</p>
        <input name="txtnombre" type="text" id="txtnombre">
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tblCargo">
            
        </table>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/eliminarcargo.js" type="text/javascript"></script>
    </body>
</html>
