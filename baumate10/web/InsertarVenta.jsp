<%-- 
    Document   : InsertarVenta
    Created on : 27-abr-2014, 8:48:30
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"> </script>
        <title>Insertar Venta</title>
        <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body>
        <form>
        <div id="main">
        <div id="contenedor">
            <div id="cabecera">
                <p>Crear Venta</p>
            </div>
            <div id="cuerpo">
                <p>identificacion</p>
                <input name="txtidentificacion" type="text" id="txtidentificacion" lbl="lblidentificacion">
                <label id="lblidentificacion" class="lblestil"></label>
                <p>Nombre</p>
                <input name="txtNombreventa" type="text" id="txtNombreventa" lbl="lblNombreventa">
                <label id="lblNombreventa" class="lblestil"> </label>
                <p>Fecha</p>
                <input name="txtfecha" type="date" id="txtfecha">
                <p>valor</p>
                <input name="txtvalor" type="text" id="txtvalor" lbl="lblvalor">
                <label id="lblvalor" class="lblestil"></label>
                <p>idcliente</p>
                <select name="cboidcliente" id="cboidcliente">
                </select>
                <select name="cboestado" id="cboestado">
                    <option value="0">Inactivo</option>
                    <option value="1">Activo</option>
                </select>
                <p><input type="button" id="btnGuardar" value="Guardar"></p>
                <p><input type="button" id="btnLimpiar" value="Cancelar"></p>
            </div>
        </div>
    </div>
            </form>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/InsertarVenta.js" type="text/javascript"></script>
    </body>
</html>
