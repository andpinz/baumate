<%-- 
    Document   : crearSolicitud
    Created on : 17/03/2014, 05:42:04 PM
    Author     : jose
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Crear solicitud</title>
    </head>
    <body>
        <form>
        <p>Proyecto </p><select id="cboProyecto"></select><input type="button" id="btnBuscarId" value="...">
        <br>
        <div id="tblActividades">
        </div>
        <input type="hidden" id="hdcont">
        <input type="button" id="btnGuardar" value="Guardar">
        </form>
        <script src="js/CrearSolicitud.js" type="text/javascript"></script>
        
    </body>
</html>
