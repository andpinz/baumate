<%-- 
    Document   : ConsultarActividad
    Created on : 16/03/2014, 04:43:59 PM
    Author     : jose
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <jsp:include page="administrador.jsp"></jsp:include>
        <title>Consultar Actividades</title>
    </head>
    <body>
        <form>
        <h2>Consultar Actividades </h2>
        Nombre Proyecto
        <select id="cboProyecto"></select>
        <input type="button" id="btnBuscarId"value="Consultar">
        <br><br>
        <table id="tblActividades">
        </table>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/ConsultarActividad.js" type="text/javascript"></script>
        
        </form>
    </body>
</html>
