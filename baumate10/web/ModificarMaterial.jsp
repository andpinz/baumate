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
        <jsp:include page="administrador.jsp"></jsp:include>
    <title>Modificar Material</title>
    </head>
    <body>
        <form>
        <div id="main">
            <div id="contenedor">
                <div id="Cabecera">
                    <h1>Ingresar Nuevo Material</h1>
                </div>
                <div id="cuerpo">
                    <input type="hidden" name="txtidmaterial" id="txtidmaterial" lbl="lblidmaterial"> 
                    <label id="lblidmaterial" class="lblestil" ></label> 
                    <p>Nombre Material</p>
                    <input type="text" name="txtNombreMaterial" id="txtNombreMaterial" lbl="lblNombreMaterial"><input type="button" id="btnBuscarId" value="Traer Datos">
                    <label id="lblNombreMaterial" class="lblestil" ></label>
                    <table id="tblmateriales">
                    </table> 
                    <p>Unidad de Medida</p>
                    <select name="cbounidadmedida" id="cbounidadmedida">
                    </select>
                    <p>Cantidad Total</p>
                    <input type="text" name="txtcantidadTotal" id="txtcantidadTotal" lbl="lblcantidadTotal">
                    <label id="lblcantidadTotal" class="lblestil"></label>
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
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/ModificarMateriales.js" type="text/javascript"></script>
    </body>
</html>
