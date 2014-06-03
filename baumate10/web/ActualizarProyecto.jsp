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
        <link rel="stylesheet" type="text/css" href="Css/modals.css">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Modificar Proyecto</title>
    </head>
    <body>
        <div id="titulo">
            <h1>Modificar Proyecto</h1>
        </div>
        <input name="txtidproy" type="hidden" id="txtidproy">
        Nombre de Proyecto:<input name="txtNombre" type="text" id="txtNombre" lbl="lblnombre">
        <input name="cliente" type="hidden" id="cliente"><br>
        <label id="lblnombre" class="lblestil"></label>
        Ciudad:<select name="cboCiudad" id="cboCiudad">
        </select>
        <input id="btnAddCiudad" value="+" type="button" data-type="zoomin">
        <input type="button" id="btnBuscarIdProy" value="Buscar proyecto" data-type="zoomin">
        <div  class="overlay-container" id="winCiudad">
            <div class="window-container zoomin" >
                <p>Nombre de la Ciudad:</p>
                <input name="txtCiudad" type="text" id="txtCiudad" lbl="lblCiudad">
                <label id="lblCiudad" class="lblestil"></label><br>
                <input type="button" id="btnGuardarCiudad" value="Guardar">
                <input type="button" value="cancelar" id="btnCancelarCiudad" />
            </div>
        </div> 
        <div  class="overlay-container" id="winProyectos">
            <div class="window-container zoomin" >
                Nombre de Proyecto:
                <input name="txtNombreBs" type="text" id="txtNombreBs" lbl="lblnombre">
                <label id="lblnombre" class="lblestil"></label>
                Ciudad:<select name="cboCiudad2" id="cboCiudad2">
                </select>
                <input type="button" id="btnBuscarId" value="Buscar">
                <input type="button" value="cancelar" id="btnCancelarProy" />
                <table id="tblProyectos">
                </table>
            </div>
        </div> 
        <br>
        Venta
        <input id="hdidventa" type="hidden">
        <label id="lblVentaSel"></label>
        <input id="btnAddVenta" value="+" type="button" data-type="zoomin">
        <div class="overlay-container" id="winVenta">
            <div class="window-container zoomin" >
                Numero de Registro de la Venta:
                <input name="txtVenta" type="text" id="txtVenta" lbl="lblVenta">
                <label id="lblVenta" class="lblestil"></label><br>
                Tipo de venta:
                <select id="tipVent"></select>
                <input type="button" id="btnBuscarVenta" value="Buscar">
                <input type="button" value="cancelar" id="btnCancelarVenta" />
                <table id="tblventa"></table>
            </div>
        </div>
        <br>
        Fecha de Inicio:<input name="txtFechaIni" type="date" id="txtFechaIni"> <br>
        Fecha Final:<input name="txtFechaFin" type="date" id="txtFechaFin"> 
        <label id="lblfecha" class="lblestil"></label><br>
        Direccion:<input name="txtDireccion" type="text" id="txtDireccion" lbl="lbldireccion"><br>
        <label id="lbldireccion" class="lblestil"></label>
        <!--Ganancias:<input name="txtGanancias" type="text" id="txtGanancias"> <br>-->
        Presupuesto:<input name="txtPresupuesto" type="text" id="txtPresupuesto" lbl="lblpresupuesto"><br>
        <label id="lblpresupuesto" class="lblestil"></label> <br>
        <input name="txtIdEmpleado" type="hidden" id="txtIdEmpleado">
        <h3>Actividades</h3>
        <table id="tblActividades" >
            <tr id="tituloActividades">
                <td>Descripcion</td>
                <td>Área</td>
                <td>Tipo de Piso</td>
                <td>funciones</td>
            </tr>
            <tr id="insActividades">
                <td>
                    <textArea id="txtDescripcionAct"></textarea>
                </td>
                <td>
                    <input id="txtAreaAct" type="text">
                </td>
                <td>
                    <select id="cbotipopisoAct"></select>
                </td>
                <td>
                    <input id="btnAgregarAct" type="button" value="+">
                </td>
            </tr>
        </table>
        <br>
        <div id="botones">
            <p>
                <input type="button" id="btnLimpiar" value="Cancelar">
                <input type="button" id="btnGuardar" value="Guardar">
            </p>
        </div>

        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/ActualizarProyecto.js" type="text/javascript"></script>
    </body>
</html>
