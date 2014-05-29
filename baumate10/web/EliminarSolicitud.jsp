<%-- 
    Document   : EliminarSolicitud
    Created on : 28/05/2014, 07:41:32 AM
    Author     : Sena
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Eliminar solicitud</title>
    </head>
    <body>
          <h1>Eliminar Solicitud</h1>
                 <p>escoja el proyecto correspondiente a la solicitud que quiere eliminar:</p><select id="cboProyecto"></select>
                <input type="button" id="btnBuscarId" value="..."> 
                <table id="tblSolicitudes"></table>
    </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/EliminarSolicitud.js" type="text/javascript"></script>
    </body>
</html>
