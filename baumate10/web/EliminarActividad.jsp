<%-- 
    Document   : EliminarActividad
    Created on : 17/03/2014, 05:04:41 PM
    Author     : jose
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <jsp:include page="administrador.jsp"></jsp:include>
        <title>Eliminar Actividad</title>
    </head>
    <body>
        <form>
        <h2>Eliminar Actividad </h2>
        <select id="cboProyecto">
        </select><input type="button" id="btnBuscarId" value="Consultar">
        <br>
        <table id="tblActividades">
        </table>
        <!--
        <input type="hidden" id="txtCodigo" >
        <p>Tipo de piso </p><select id="cboTipoPiso"></select><br>
        <p>Descripcion </p><input id="txtDescripcion" type="text"><br>
        <p>Área </p><input id="txtArea" type="text"><br>
        <p><input type="button" id="btnGuardar" value="Guardar"> </p>
        -->
        </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/EliminarActividad.js" type="text/javascript"></script>
    </body>
</html>
