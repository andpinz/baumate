<%-- 
    Document   : ActualizarActividad
    Created on : 17/03/2014, 09:27:50 AM
    Author     : sena
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <jsp:include page="administrador.jsp"></jsp:include>
        <title>Actualizar Actividad</title>
    </head>
    <body>
        <form>
        <h2>Actualizar Actividad </h2>
        Nombre proyecto
        <select id="cboProyecto"></select>
        <input type="button" id="btnBuscarId" value="Consultar">
        <br>
        <table id="tblActividades">
        </table>
        <input type="hidden" id="txtCodigo" >
        <p>Tipo de piso <select id="cboTipoPiso"></select></p>
        <p>Descripciòn <input id="txtDescripcion" type="text"></p>
        <p>Área <input id="txtArea" type="text" lbl="lblarea"></p>
        <label id="lblarea" class="lblestil"></label>
        
        <p><input type="button" id="btnLimpiar" value="Cancelar">
        <input type="button" id="btnGuardar" value="Guardar"> </p>
        
        </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/ActualizarActividad.js" type="text/javascript"></script>
    </body>
</html>
