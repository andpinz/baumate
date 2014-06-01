<%-- 
    Document   : Proveedor
    Created on : 15/03/2014, 08:00:00 AM
    Author     : sena
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <link rel="stylesheet" type="text/css" href="Css/modals.css">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Crear Proyecto</title>
    </head>
    <body>
        <form>
            <div id="main">
                <div id="contenedor">
                    <div id="cabecera">
                        <h1>Crear proyecto</h1>
                    </div>
                    <div id="cuerpo">
                        Nombre
                        <input name="txtNombre" type="text" id="txtNombre" lbl="lblnombre">
                        <label id="lblnombre" class="lblestil"></label> <br>
                        Ciudad
                        <select name="cboCiudad" id="cboCiudad">
                        </select> <input id="btnAddCiudad" value="+" type="button" data-type="zoomin"><br>
                        <div class="overlay-container" id="winCiudad" >
                            <div class="window-container zoomin">
                                <p>Nombre de la Ciudad:</p>
                                <input name="txtCiudad" type="text" id="txtCiudad" lbl="lblCiudad">
                                <label id="lblCiudad" class="lblestil"></label><br>
                                <input type="button" id="btnGuardarCiudad" value="Guardar">
                                <input type="button" value="cancelar" id="btnCancelarCiudad" />
                            </div>
                        </div>
                        Venta
                        <label id="txtVenta"></label>
                        <input id="btnAddVenta" value="+" type="button" data-type="zoomin">
                        <div class="overlay-container" id="winVenta">
                            <div class="window-container zoomin" >
                                <p>Numero de Registro de la Venta:</p>
                                <input name="txtVenta" type="text" id="txtVenta" lbl="lblVenta">
                                <label id="lblVenta" class="lblestil"></label><br>
                                <input type="button" id="btnGuardarVenta" value="Guardar">
                                <input type="button" value="cancelar" id="btnCancelarVenta" />
                            </div>
                        </div>
                        <br>
                        Fecha de inicio 
                        <input name="txtFechaIni" type="date" id="txtFechaIni"> <br>
                        Fecha de final 
                        <input name="txtFechaFin" type="date" id="txtFechaFin"> 
                        <label id="lblfecha" class="lblestil"></label>
                        <br>
                        Direcciòn 
                        <input name="txtDireccion" type="text" id="txtDireccion" lbl="lbldireccion"> 
                        <label id="lbldireccion" class="lblestil"></label><br><!--
                        Ganancias
                        <input name="txtGanancias" type="text" id="txtGanancias"> <br>
                        <label id="lblganacias"class="lblestil"></label><br>-->
                        Presupuesto
                        <input name="txtPresupuesto" type="text" id="txtPresupuesto" lbl="lblpresupuesto">
                        <label id="lblpresupuesto" class="lblestil"></label><br>
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
                                    <input id="txtDescripcionAct" type="text">
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
                        <input type="button" id="btnLimpiar" value="Cancelar">
                        <input type="button" id="btnGuardar" value="Guardar">
                    </div>
                </div>
            </div>
            <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
            <script src="js/validaciones.js" type="text/javascript"></script>
            <script src="js/CrearProyecto.js" type="text/javascript"></script>
        </form>
    </body>
</html>
