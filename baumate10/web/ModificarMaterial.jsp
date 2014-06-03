<%-- 
    Document   : ModificarMateriales
    Created on : 15-mar-2014, 21:24:10
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="Css/modificarmaterial.css">
        <jsp:include page="administrador.jsp"></jsp:include>
    <title>Baumate</title>
    </head>
    <body>
        
        <div id="contenedor">
            <div id="titulo">
        <h1>Modificar Material</h1>
            </div>
            <div id="formularioc">
                <input type="hidden" name="txtidmaterial" id="txtidmaterial" lbl="lblidmaterial"> 
                    <label>Nombre del Material:</label><input type="text" name="txtNombreMaterial" id="txtNombreMaterial" lbl="lblNombreMaterial">
                    <input type="button" id="btnBuscarId" value="Seleccionar">
            </div>
            <div id="tabla">
                <table id="tblmateriales"></table>
            </div>
            <div id="formulario">
            <label>Unidad de Medida:</label><select name="cbounidadmedida" id="cbounidadmedida"></select>
            <label id="cantidadtotal">Cantidad Total:</label><input type="text" name="txtcantidadTotal" id="txtcantidadTotal" lbl="lblcantidadTotal">
            <label id="tipomaterial">Tipo de Material:</label><select name="cboTipoMaterial" id="cboTipoMaterial"></select><br>
                    <input type="button" id="btnGuardar" value="Guardar">
                    <input type="button" id="btnLimpiar" value="Cancelar">
            </div>
                </div>

        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/ModificarMateriales.js" type="text/javascript"></script>
    </body>
</html>
