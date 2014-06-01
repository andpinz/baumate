<%--
 * @author David Andres Gomez Zamora
 * 17-03-2014
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
	<title>Bumate</title>
   <meta charset="UTF-8">
   <link rel="stylesheet" type="text/css" href="Css/Master.css"/>
   <link rel="stylesheet" type="text/css" href="Css/alertify.core.css"/>
   <link rel="stylesheet" type="text/css" href="Css/alertify.default.css"/>
   <script type="text/javascript" src="js/alertify.js"></script>
   <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
	<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
	<script type='text/javascript' src='js/menu_jquery.js'></script>
        <script type='text/javascript' src='js/ControlCookies.js'></script>
        <script type='text/javascript' src='js/ControFecha.js'></script>
        <link href="imagenes/baumate-icono.ico" type="image/x-icon" rel="shortcut icon" />
</head>
<body background="imagenes/fondo.png">
   <div id="CG"> 
      <div id="Cin">
         <div id="Cinl">
                        <img src="imagenes/logo.png" id="l">
                        </div>
                        <input type="button" value="?" id="ayuda" onclick="window.open('Archivos/ManualUsuario.pdf')">
                        <input type="button" value="Cerrar Sesion" id="cerrarSesion">
          <label class="rol" id="rol"></label>
                        <div id='cssmenu'>
            <ul>
                <li class='active'><a id="inicio" href='administrador.jsp'><span>Inicio</span></a></li>

                <li class='has-sub'><a href='#'><span>Personal</span></a>
                    <ul>
                        <li class='has-sub'><a href='#'><span>Empleado</span></a>
                            <ul>
                                <li class='has-sub'><a href='consultarEmpleado.jsp'><span>Buscar Empleado</span></a>
                                <li class='has-sub'><a href='eliminarempleado.jsp'><span>Eliminar Empleado</span></a>
                                <li class='has-sub'><a href='modificarempleado.jsp'><span>Modificar Empleado</span></a>
                                <li class='has-sub'><a href='InsertarEmpleado.jsp'><span>Nuevo Empleado</span></a>
                                </li>
                            </ul>
                        <li class='has-sub'><a href=''><span>Usuario</span></a>
                            <ul>
                                <li class='has-sub'><a href='consultarusuario.jsp'><span>Buscar Usuario</span></a>
                                <li class='has-sub'><a href='modificarestado.jsp'><span>Inactivar/Activar Usuario</span></a>
                                <li class='has-sub'><a href='modificarusuario.jsp'><span>Modificar Usuario</span></a>
                                <li class='has-sub'><a href='nuevousuario.jsp'><span>Nuevo Usuario</span></a>
                                </li>
                            </ul>
                        </li>
            </ul>
        </li>

        <li class='has-sub'><a href='#'><span>Contactos</span></a>
            <ul>
                <li class='has-sub'><a href='#'><span>Cliente</span></a>
                    <ul>
                        <li class='has-sub'><a href='ConsultarCliente.jsp'><span>Buscar Cliente</span></a>
                        <li class='has-sub'><a href='EliminarCliente.jsp'><span>Eliminar Cliente</span></a>
                        <li class='has-sub'><a href='ActualizarCliente.jsp'><span>Modificar Cliente</span></a>
                        <li class='has-sub'><a href='CrearCliente.jsp'><span>Nuevo Cliente</span></a>
                        <li class='has-sub'><a href='GestionarCliente.jsp'><span>Nuevo Cliente</span></a>
                        </li>
                    </ul>
                </li>
                <li class='has-sub'><a href='#'><span>Proveedor</span></a>
                    <ul>
                        <li class='has-sub'><a href='consultarProveedores.jsp'><span>Buscar Proveedor</span></a>
                        <li class='has-sub'><a href='eliminarproveedores.jsp'><span>Eliminar Proveedor</span></a>
                        <li class='has-sub'><a href='modificarproveedores.jsp'><span>Modificar Proveedor</span></a>
                        <li class='has-sub'><a href='InsertarProveedores.jsp'><span>Nuevo Proveedor</span></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>

       <li class='has-sub'><a href='#'><span>Gestion</span></a>
    <ul>
        </li>
        <li class='has-sub'><a href='#'><span>Actividad</span></a>
            <ul>
                <li class='has-sub'><a href='ConsultarActividad.jsp'><span>Buscar Actividad</span></a>
                <li class='has-sub'><a href='EliminarActividad.jsp'><span>Eliminar Actividad</span></a>
                <li class='has-sub'><a href='ActualizarActividad.jsp'><span>Modificar Actividad</span></a>
                <li class='has-sub'><a href='CrearActividad.jsp'><span>Nueva Actividad</span></a>
                </li>
            </ul>
            
        </li>
        <li class='has-sub'><a href='#'><span>Orden de compra</span></a>
            <ul>
                <li class='has-sub'><a href='#'><span>Buscar Orden de Compra</span></a>
                <li class='has-sub'><a href='ChequearOrdenesCompra.jsp'><span>Chequear Orden de Compra</span></a>
                <li class='has-sub'><a href='EliminarSolicitud.jsp'><span>Eliminar Orden de Compra</span></a>
                <li class='has-sub'><a href='ModificarSolicitud.jsp'><span>Modificar Orden de Compra</span></a>
                <li class='has-sub'><a href='crearSolicitud.jsp'><span>Nueva Orden de Compra</span></a>
                </li>
            </ul>
            
        </li>
        <li class='has-sub'><a href='#'><span>Proyecto</span></a>
            <ul>
                <li class='has-sub'><a href='ConsultarProyectos.jsp'><span>Buscar Proyecto</span></a>
                <li class='has-sub'><a href='EliminarProyecto.jsp'><span>Eliminar Proyecto</span></a>
                <li class='has-sub'><a href='ActualizarProyecto.jsp'><span>Modificar Proyecto</span></a>
                <li class='has-sub'><a href='CrearProyecto.jsp'><span>Nuevo Proyecto</span></a>
                </li>
            </ul>
        </li>
    </ul>
</li>

<li class='has-sub'><a href='#'><span>Venta</span></a>
            <ul>
                <li class='has-sub'><a href='ConsultarVenta.jsp'><span>Buscar Venta</span></a>
                <li class='has-sub'><a href='EliminarVenta.jsp'><span>Eliminar Venta</span></a>
                <li class='has-sub'><a href='ModificarVenta.jsp'><span>Modificar Venta</span></a>
                <li class='has-sub'><a href='InsertarVenta.jsp'><span>Nueva Venta</span></a>
                </li>
            </ul>
        </li>

        <li class='has-sub'><a href='#'><span>Material</span></a>
            <ul>
                <li class='has-sub'><a href='#'><span>Material</span></a>
                    <ul>
                        <li class='has-sub'><a href='ConsultarMaterial.jsp'><span>Buscar Material</span></a>
                        <li class='has-sub'><a href='EliminarMaterial.jsp'><span>Eliminar Material</span></a>
                        <li class='has-sub'><a href='ModificarMaterial.jsp'><span>Modificar Material</span></a>
                        <li class='has-sub'><a href='IngresarMaterial.jsp'><span>Nuevo Material</span></a>
                        </li>
                    </ul>
                <li class='has-sub'><a href='#'><span>Material Ofrecido</span></a>
                    <ul>
                        <li class='has-sub'><a href='ConsultarMaterialOfrecido.jsp'><span>Buscar Precio por Material</span></a>
                        <li class='has-sub'><a href='EliminarMaterialOfrecido.jsp'><span>Eliminar Precio por Material</span></a>
                        <li class='has-sub'><a href='ModificarMaterialOfrecido.jsp'><span>Modificar Precio por Material</span></a>
                        <li class='has-sub'><a href='InsertarMaterialOfrecido.jsp'><span>Nuevo Precio por Material</span></a>
                        </li>
                    </ul>
                <li class='has-sub'><a href='#'><span>Material Por Piso</span></a>
                    <ul>
                        <li class='has-sub'><a href='ConsultarFormula.jsp'><span>Buscar Material por Piso</span></a>
                        <li class='has-sub'><a href='EliminarFormula.jsp'><span>Eliminar Material por Piso</span></a>
                        <li class='has-sub'><a href='Modificarformula.jsp'><span>Modificar Material por Piso</span></a>
                        <li class='has-sub'><a href='InsertarFormula.jsp'><span>Nuevo Material por Piso</span></a>
                        </li>
                    </ul>
        </li>
    </li>
</ul>
</li>

<li class='has-sub'><a href='#'><span>Parametrizaciones</span></a>
    <ul>
        <li class='has-sub'><a href='#'><span>Cargo</span></a>
            <ul>
                <li class='has-sub'><a href='ConsultarCargo.jsp'><span>Buscar Cargo</span></a>
                <li class='has-sub'><a href='eliminarcargo.jsp'><span>Eliminar Cargo</span></a>
                <li class='has-sub'><a href='modificarcargo.jsp'><span>Modificar Cargo</span></a>
                <li class='has-sub'><a href='CrearCargo.jsp'><span>Nuevo Cargo</span></a>
                </li>
            </ul>
        </li>
        <li class='has-sub'><a href='#'><span>Ciudad</span></a>
            <ul>
                <li class='has-sub'><a href='#'><span>Buscar Ciudad</span></a>
                <li class='has-sub'><a href='#'><span>Eliminar Ciudad</span></a>
                <li class='has-sub'><a href='#'><span>Modificar Ciudad</span></a>
                <li class='has-sub'><a href='#'><span>Nueva Ciudad</span></a>
                </li>
            </ul>
        </li>
        <li class='has-sub'><a href='#'><span>Rol</span></a>
            <ul>
                <li class='has-sub'><a href='consultarrol.jsp'><span>Buscar Rol</span></a>
                <li class='has-sub'><a href='#'><span>Eliminar Rol</span></a>
                <li class='has-sub'><a href='modificorol.jsp'><span>Modificar Rol</span></a>
                <li class='has-sub'><a href='nuevorol.jsp'><span>Nuevo Rol</span></a>
                </li>
            </ul>
        </li>
        <li class='has-sub'><a href='#'><span>Tipo de Identificacion</span></a>
            <ul>
                <li class='has-sub'><a href='ConsultarTipoIdentificacion.jsp'><span>Buscar Tipo de Identificacion</span></a>
                <li class='has-sub'><a href='EliminarTipoIdentificacion.jsp'><span>Eliminar Tipo de Identificacion</span></a>
                <li class='has-sub'><a href='ModificarTipoIdentificacion.jsp'><span>Modificar Tipo de Identificacion</span></a>
                <li class='has-sub'><a href='CrearTipoIdentificacion.jsp'><span>Nuevo Tipo de Identificacion</span></a>
                </li>
            </ul>
        </li>
        <li class='has-sub'><a href='#'><span>Tipo Piso</span></a>
                    <ul>
                        <li class='has-sub'><a href='Consultartipopiso.jsp'><span>Buscar Tipo de Piso</span></a>
                        <li class='has-sub'><a href='EliminarTipoPiso.jsp'><span>Eliminar Tipo de Piso</span></a>
                        <li class='has-sub'><a href='modificartipopiso.jsp'><span>Modificar Tipo de Piso</span></a>
                        <li class='has-sub'><a href='Creartipopiso.jsp'><span>Nuevo Tipo de Piso</span></a>
                        </li>
                    </ul>
          </li>
        <li class='has-sub'><a href='#'><span>Unidad de medida</span></a>
            <ul>
                <li class='has-sub'><a href='consultarUnidadmedida.jsp'><span>Buscar Unidad de Medida</span></a>
                <li class='has-sub'><a href='eliminarunidadmedida.jsp'><span>Eliminar Unidad de Medida</span></a>
                <li class='has-sub'><a href='modificarunidadmedida.jsp'><span>Modificar Unidad de Medida</span></a>
                <li class='has-sub'><a href='InsertarUnidadmedida.jsp'><span>Nueva Unidad de Medida</span></a>
                </li>
            </ul>
        </li>
    </ul>
</li>
</ul>
</div>
      </div>
       
      </div>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
</body>
</html>