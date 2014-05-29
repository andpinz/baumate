<%-- 
    Document   : modificarcargo
    Created on : 17/03/2014, 04:32:48 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <title>JSP Page</title>
    </head>
    <body>
        <p>Modificar Cargo</p>
            <div id="cuerpo">
                <p>id</p>
                <input name="txtidCargo" type="text" id="txtidCargo"><input type="button" id="btnBuscarId" value="...">
                <p>Nombre</p>
                <input name="txtnombre" type="text" id="txtnombre">
                
                <p><input type="button" id="btnGuardar" value="Guardar"></p>
            </div>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/modificarcargo.js" type="text/javascript"></script>
    </body>
</html>
