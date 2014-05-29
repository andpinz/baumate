<%-- 
    Document   : eliminarproveedores
    Created on : 16/03/2014, 09:07:29 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
          <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Eliminar proveedores</title>
    </head>
    <body>
        <form>
       <h1>Eliminar Proveedores</h1>
        <p>NIT Proveedores</p>
        <input name="txtidproveedores" type="text" id="txtidproveedores" lbl="lblidproveedores">
         <label id="lblidproveedores" class="lblestil"></label>
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tblProveedores">
            
        </table>
                        </form>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/eliminarproveedores.js" type="text/javascript"></script>
    </body>
</html>
