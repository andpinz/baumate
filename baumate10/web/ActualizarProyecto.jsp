<%-- 
    Document   : ActualizarProyecto
    Created on : 16/03/2014, 09:21:31 AM
    Author     : jose
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <link rel="stylesheet" type="text/css" href="Css/actualizarproyecto.css">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Modificar Proyecto</title>
    </head>
    <body>
        <div id="contenedor">
            <div id="titulo">
        <h1>Modificar Proyecto</h1>
            </div>
                <div id="formulariob">
                <input name="txtidproy" type="hidden" id="txtidproy">
                Nombre de Proyecto:<input name="txtNombre" type="text" id="txtNombre" lbl="lblnombre">
                <input type="button" id="btnBuscarId" value="Buscar">
    <input name="cliente" type="hidden" id="cliente"><br>
                </div>
            <div id="formulario">
        <div id="formularioi"> 
                <label id="lblnombre"class="lblestil"></label>
                Ciudad:<select name="cboCiudad" id="cboCiudad">
                </select> </p>
                Fecha de Inicio:<input name="txtFechaIni" type="date" id="txtFechaIni"> </p>
                Fecha Final:<input name="txtFechaFin" type="date" id="txtFechaFin"> </p>
        </div>
                <div id="formulariod">
                Direccion:<input name="txtDireccion" type="text" id="txtDireccion" lbl="lbldireccion">
                <label id="lbldireccion"class="lblestil"></label></p>
                Ganancias:<input name="txtGanancias" type="text" id="txtGanancias"> </p>
                Presupuesto:<input name="txtPresupuesto" type="text" id="txtPresupuesto" lbl="lblpresupuesto">
                <label id="lblpresupuesto"class="lblestil"></label> <br>
                <input name="txtIdEmpleado" type="hidden" id="txtIdEmpleado">
        <div id="botones">
                <p><input type="button" id="btnLimpiar" value="Cancelar">
                <input type="button" id="btnGuardar" value="Guardar"></p>
        </div>
                    
                </div>
            </div>
                </div>
         <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/ActualizarProyecto.js" type="text/javascript"></script>
    </body>
</html>
