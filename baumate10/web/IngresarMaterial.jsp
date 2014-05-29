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
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Insertar Material</title>
    </head>
    <body>
        <form>
        <div id="main">
            <div id="contenedor">
                <div id="Cabecera">
                    <h1>Ingresar Nuevo Material</h1>
                </div>
                <div id="cuerpo">
                    <p>Nombre Material</p>
                    <input type="text" name="txtNombreMaterial" id="txtNombreMaterial" lbl="lblNombreMaterial">
                    <label id="lblNombreMaterial" class="lblestil" ></label>
                    <p>Unidad de Medida</p>
                    <select name="cbounidadmedida" id="cbounidadmedida">
                    </select>
                    <p>Cantidad Total</p>
                    <input type="text" name="txtcantidadTotal" id="txtcantidadTotal" lbl="lblcantidadTotal">
                    <label id="lblcantidadTotal" class="lblestil" ></label>
                    <p>Tipo Material</p>
                    <select name="cboTipoMaterial" id="cboTipoMaterial">
                    </select>
                    <p><input type="button" id="btnGuardar" value="Guardar"></p>
                    <p><input type="button" id="btnLimpiar" value="Cancelar"></p>
                </div>
            </div>    
        </div>
                    </form>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/validaciones.js" type="text/javascript" ></script>
        <script src="js/IngresarMaterial.js" type="text/javascript"></script>         
    </body>
</html>
