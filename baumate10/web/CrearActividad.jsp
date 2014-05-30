<%-- 
    Document   : CrearActividad
    Created on : 16/03/2014, 04:53:05 PM
    Author     : jose
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <jsp:include page="administrador.jsp"></jsp:include>
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <title>Crear Actividad</title>
    </head>
    <body>
        <form>
            <div id="main">
                <div id="contenedor">
                    <div id="cabecera">
                        <h2>Crear actividad</h2>
                        <p>Nombre Proyecto       
                            <select id="cboProyecto"></select></p>
                        <p>Tipo de piso 
                            <select id="cboTipoPiso"></select></p>
                        <p>Descripciòn 
                            <input id="txtDescripcion" type="text"></p>
                        <p>Área <input id="txtArea" type="text" lbl="lblarea"></p>
                        <label id="lblarea" class="lblestil"></label><br>
                        <p><input type="button" id="btnLimpiar" value="Cancelar">
                            <input type="button" id="btnGuardar" value="Guardar"> </p>
                    </div>
                </div>
            </div>
        </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/CrearActividad.js" type="text/javascript"></script>
    </body>
</html>
