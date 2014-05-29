<%-- 
    Document   : ModificarMaterialOfrecido
    Created on : 29-abr-2014, 2:10:52
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="Css/Master.css">
        <title>Modificar Material Ofrecido</title>
        <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body>
        <form>
            
   
  
        <div id="main">
            <div id="contenedor">
                <div id="Cabecera">
                    <p>Modificar Material Ofrecido</p>
                </div>
                <div id="cuerpo">
                    <input type="hidden" name="txtidmaterialofrecido" id="txtidmaterialofrecido">
                    <p>Material</p>
                    <select name="cbomaterial" id="cbomaterial">
                    </select>
                    <p>Proveedor</p>
                    <select name="cboidproveedor" id="cboidproveedor">
                    </select>
                    <p><input type="button" id="btnBuscarMatofre" value="Traer Datos"></p>
                    <p>Costo</p>
                    <input type="text" name="txtcosto" id="txtcosto" lbl="lblcosto">
                    <label id="lblcosto" class="lblestil"></label>
                    <p><input type="button" id="btnGuardar" value="Guardar"></p>
                    <p><input type="button" id="btnLimpiar" value="Cancelar"></p>
                </div>
            </div>    
        </div>
                 </form>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/validaciones.js" type="text/javascript" ></script>
        <script src="js/ModificarMaterialOfrecido.js" type="text/javascript"></script>
    </body>
</html>
