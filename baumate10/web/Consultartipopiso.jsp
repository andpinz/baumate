<%-- 
    Document   : Consultartipopiso
    Created on : 16/03/2014, 09:39:14 AM
    Author     : Johanagt
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Consultar tipo piso</title>
    </head>
    <body>
        
        <form>
            <h1>Consultar tipo piso</h1>
        <p>Nombre</p>
        <input name="txtCodigo" type="text" id="txtCodigo">
       
        <p><input type="button" id="btnLimpiar" value="Cancelar">
            <input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tbltipopiso">
            
        </table>
        </form>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/Consultartipopiso.js" type="text/javascript"></script>
    </body>
</html>

