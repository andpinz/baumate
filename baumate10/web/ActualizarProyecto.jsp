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
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Modificar Proyecto</title>
    </head>
    <body>
         <form>
        <div id="main">
        <div id="contenedor">
            <div id="cabecera">
                <h1>Modificar Proyecto</h1>
            </div>
            <div id="cuerpo">
                
                <input name="txtidproy" type="hidden" id="txtidproy">
                
                <br>
                Nombre de proyecto
                <input name="txtNombre" type="text" id="txtNombre" lbl="lblnombre">
                <input type="button" id="btnBuscarId" value="...">
                <label id="lblnombre"class="lblestil"></label>
                
                <br>
                Ciudad 
                <select name="cboCiudad" id="cboCiudad">
                </select> <br>
                Fecha de inicio 
                <input name="txtFechaIni" type="date" id="txtFechaIni"> <br>
                Fecha de final 
                <input name="txtFechaFin" type="date" id="txtFechaFin"> <br>
                Direcciòn 
                <input name="txtDireccion" type="text" id="txtDireccion" lbl="lbldireccion">
                <label id="lbldireccion"class="lblestil"></label></p>
            Ganancias 
            <input name="txtGanancias" type="text" id="txtGanancias"> <br>
            Presupuesto
                <input name="txtPresupuesto" type="text" id="txtPresupuesto" lbl="lblpresupuesto">
                <label id="lblpresupuesto"class="lblestil"></label> <br>
                
                <input name="txtIdEmpleado" type="hidden" id="txtIdEmpleado">
                
                
                <p><input type="button" id="btnLimpiar" value="Cancelar">
                <input type="button" id="btnGuardar" value="Guardar"></p>
            </div>
        </div>
    </div>
                        </form>
         <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/ActualizarProyecto.js" type="text/javascript"></script>
    </body>
</html>
