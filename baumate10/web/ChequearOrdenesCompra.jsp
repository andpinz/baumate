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
                <link rel="stylesheet" type="text/css" href="Css/chequearordendecompra.css">
          <jsp:include page="secretaria.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>
        
        <div id="contenedor">
            <div id="titulo">
        <h1>Chequear Orden De Compra</h1>
            </div>
            <div id="formularioc">
          <label>Seleccione el proyecto con el que quiere verificar la orden de compra:</label><select id="cboProyecto"></select>
          <input type="button" id="btnBuscarId" value="Buscar">  
                <div id="tabla">
                <table id="tblSolicitudes"></table>
            </div>
            </div>
          <div id="tabla">
                <table id="tblUsuario"></table>
            </div>
            <input type="button" id="btnCantidadrecibida" value="modificar"/>
         <input type="hidden" id="txtcontadorcajas"/>
         <input type="hidden" id="txtidsolicitud"/>
                </div>
        
        <script src="js/chequearordenescompra.js" type="text/javascript"></script>
    </body>
</html>
