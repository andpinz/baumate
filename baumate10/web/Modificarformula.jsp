<%-- 
    Document   : Modificarformula
    Created on : 28-abr-2014, 18:20:33
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
        <title>Modificar Material por piso</title>
    </head>
    <body>
        <form>
        <div id="main">
            <div id="contenedor">
                <div id="Cabecera">
                   
                </div>
                <div id="cuerpo">
                     <h1>Modificar Material por piso</h1>
                     <input type="hidden" name="txtidformula" id="txtidformula"/>
                    <p>Material</p>
                    <select name="cboidMaterial" id="cboidMaterial">
                    </select>
                    <p>Tipo Piso</p>
                    <select name="cbotipopiso" id="cbotipopiso">
                    </select>
                    <p><input type="button" id="btnBuscarId" value="Traer Datos"></p> 
                    <p>Cantidad</p>
                    <input type="text" name="txtcantidad" id="txtcantidad" lbl="lblcantidad">
                    <label id="lblcantidad" class="lblestil" ></label>
                    <p><input type="button" id="btnGuardar" value="Guardar"></p>
                    <p><input type="button" id="btnLimpiar" value="Cancelar"></p>
                </div>
            </div>    
        </div>
                    </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/validaciones.js" type="text/javascript" ></script>
        <script src="js/ModificarFormula.js" type="text/javascript"></script>
    </body>
</html>
