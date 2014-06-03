<%-- 
    Document   : Materiales
    Created on : 15/03/2014, 09:34:57 AM
    Author     : sena
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css"> 
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="Css/nuevomaterial.css">
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>
        
        <div id="contenedor">
            <div id="titulo">
        <h1>Nuevo Material</h1>
            </div>
            <div id="formulario">
                    <label>Tipo de material:</label><select name="cboTipoMaterial" id="cboTipoMaterial"></select>
                    <label id="nombrematerial">Nombre del Material:</label><input type="text" name="txtNombreMaterial" id="txtNombreMaterial" lbl="lblNombreMaterial">
                    <label id="unidad">Unidad de medida:</label><select name="cbounidadmedida" id="cbounidadmedida"></select>
                    <label>Cantidad:</label><input type="text" name="txtcantidadTotal" id="txtcantidadTotal" lbl="lblcantidadTotal">
                    <input type="button" id="btnGuardar" value="Guardar">
                    <input type="button" id="btnLimpiar" value="Cancelar">
            </div>
                </div>

        <script src="js/validaciones.js" type="text/javascript" ></script>
        <script src="js/IngresarMaterial.js" type="text/javascript"></script>         
    </body>
</html>
