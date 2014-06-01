<%-- 
    Document   : ConsultarReporteSolicitud
    Created on : 27-may-2014, 10:35:50
    Author     : Sena
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
        <title>Consultar solicitudes generadas</title>
    </head>
    <body>
        <form>
            <h1>Solicitudes Generadas</h1>
            <div id="contenedor">
                <p>Proyecto </p><select id="cboProyecto"></select>
                <input type="button" id="btnBuscarId" value="...">
            </div>
            <table id="tblSolicitudes">

            </table>
            <a href="reportsolicitud?idsolicitud=1">generarreporte</a>
        </form>
        <script src="js/ConsultarReporteSolicitud.js" type="text/javascript"></script>
        
    </body>
</html>
