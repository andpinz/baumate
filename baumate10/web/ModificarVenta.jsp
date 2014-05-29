<%-- 
    Document   : ModificarVenta
    Created on : 27-abr-2014, 19:35:09
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript" ></script>
        <title>Modificar Venta</title>
        <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body>
        <form>
                <p>Modificar Venta</p>
                <input type="hidden" name="txtidvent" id="txtidvent">
                <p>identificacion</p>
                <input name="txtidentificacion" type="text" id="txtidentificacion" lbl="lblidentirifacion"><input type="button" id="btntraerdatos" value="...">
                <label id="lblidentificacion" class="lblestil"></label>
                <p>Nombre venta</p>
                <input name="txtNombreventa" type="text" id="txtNombreventa" lbl="lblNombreventa">
                <label id="lblNombreventa" class="lblestil"></label>
                <table id="tblventa">
                </table>
                <p>fecha</p>
                <input type="date" name="txtfecha" id="txtfecha" lbl="lblfecha">
                <label id="lblfecha" class="lblestil"></label>
                <p>valor</p>
                <input name="txtvalor" type="text" id="txtvalor" lbl="lblvalor">
                <label id="lblvalor" class="lblestil"></label>
                <p>idcliente</p>
                <select name="cboidcliente" id="cboidcliente">
                </select>
                <p>Estado</p>
                <select name="cboestado" id="cboestado">
                    <option value="0">Inactivo</option>
                    <option value="1">Activo</option>
                </select>
                <p><input type="button" id="btnGuardar" value="Guardar"></p>
                <p><input type="button" id="btnLimpiar" value="Cancelar"></p>
            </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/ModificarVenta.js" type="text/javascript"></script>
    </body>
</html>
