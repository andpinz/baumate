<%-- 
    Document   : ConsultarSolicitud
    Created on : 11/05/2014, 10:43:16 PM
    Author     : jose
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Consultar Solicitud</title>
        
    </head>
    <body>
        <form>
            <h1>Solicitudes Generadas</h1>
            <div id="contenedor">
                <p>Proyecto </p><select id="cboProyecto"></select>
                <input type="button" id="btnBuscarId" value="...">
            
            <table id="tblSolicitudes">

            </table>
            <div>
                <input type="hidden" id="hdidsolicitud" >
                Número de la Solicitud <p id="pidsolic"></p> <br>
                Fecha de pedido <input type="date" id="dtfechpedido" > <br>
                <!--Fecha de recibido <input type="date" id="dtfechrecibido" > <br>-->
                <!--Proyecto <select id="cboProyectoc"></select> <br>-->
                Proveedor <select id="cboProveedor"></select>
            </div>
            </div>
            <table id="tblSolicitudesAsignadas">
            </table>
            <input type="hidden" id="hdcantsolicasig" >
            <input type="button" id="btnGuardar" value="Guardar">
        </form>
        <script src="js/ConsultarSolicitud.js" type="text/javascript"></script>
        
    </body>
</html>
