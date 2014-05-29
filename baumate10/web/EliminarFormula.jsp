<%-- 
    Document   : EliminarFormula
    Created on : 28-abr-2014, 19:53:34
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Eliminar Formulas</title>
    </head>
    <body>
        <form>
        <p>Material</p>
        <select name="cbomaterial" id="cbomaterial">
        </select>
        <p>Tipo Piso</p>
        <select name="cbotipopiso" id="cbotipopiso">
        </select>
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tblformula">
        </table>
                    </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/EliminarFormula.js" type="text/javascript"></script>
    </body>
</html>
