<%-- 
    Document   : SolicitudAsignada
    Created on : 10/05/2014, 09:54:37 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Chequear Ordenes de Compra</title>
    </head>
    <body>
        <form>
        <div>
        <h1>Chequear ordenes compra</h1>
        
          <p>Seleccione el proyecto con el que quiere verificar la orden de compra </p><select id="cboProyecto"></select><input type="button" id="btnBuscarId" value="...">
        <br>
          <table id="tblSolicitudes"></table>
             <table id="tblSolicitudesAsignadas"></table>
         <input type="button" id="btnCantidadrecibida" value="modificar"/>
         <input type="hidden" id="txtcontadorcajas"/>
         <input type="hidden" id="txtidsolicitud"/>
                    </div>
        </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/chequearordenescompra.js" type="text/javascript"></script>
    </body>
</html>
