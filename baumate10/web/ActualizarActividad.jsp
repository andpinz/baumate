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
        <link rel="stylesheet" type="text/css" href="Css/actualizaractividad.css">
        <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>
        <div id="contenedor">
            <div id="titulo">
                <h1>Modificar Actividad</h1>
            </div>
            <div id="formulario">
                <div id="formulariod">
                    Nombre del proyecto:<select id="cboProyecto"></select>
                    <input type="button" id="btnBuscarId" value="Buscar">
                    <input type="hidden" id="txtCodigo">
                    <div id="tabla">
                        <table id="tblActividades"></table>
                    </div>  
                </div>
                <div id="formularioi">
                    Tipo de Piso: <select id="cboTipoPiso"></select>
                    <p>Descripciòn <input id="txtDescripcion" type="text"></p>
                    <p>Área <input id="txtArea" type="text" lbl="lblarea"></p>
                    <label id="lblarea" class="lblestil"></label>
                    <p><input type="button" id="btnLimpiar" value="Cancelar">
                        <input type="button" id="btnGuardar" value="Guardar"> </p> 
                </div>
            </div>
        </div>

        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/ActualizarActividad.js" type="text/javascript"></script>
    </body>
</html>
