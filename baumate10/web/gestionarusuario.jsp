<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Baumate</title>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
    <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
    <script type='text/javascript' src='js/menu_jquery.js'></script>
    <link rel="stylesheet" type="text/css" href="Css/gestionarusuario.css">
    <link href="imagenes/baumate-icono.ico" type="image/x-icon" rel="shortcut icon" />
    <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body> 
        <div id="contenedor">
            <div id="titulo">
        <h1>Usuario</h1>
            </div>
            <div id="formularioc">
                <input type="hidden" id="estado" value="1"/>
                <input type="text"  id="correo" placeholder="Correo"/>
                <input type="password"  id="contrasena" placeholder="Contraseña"/>
                <input type="password"  id="contrasena2" placeholder="Confirmar contraseña "/>
                <label id="lbelrol">Rol de usuario:</label><select  id="idrol"></select>
                <label>Agregar un nuevo rol:</label><input id="btnVcrearr" value="+" type="button" data-type="zoomin">
                        <div class="overlay-container" id="winRol" >
                            <div class="window-container zoomin">
                                <h1>Crear Rol</h1>
                                <label id="lblCiudad" class="lblestil">Nombre del Rol:</label>
                                <input type="text" id="Nombrerol">
                                <input type="button" id="btnVCrearr" value="Crear">
                                <input type="button" value="Cancelar" id="btnVCancelarr" />
                            </div>
                        </div>
                <label>Usuario de empleado:</label><select  id="idempleado"></select>
                <input type="button" id="btnModificaru" value="Modificar Usuario" >
                <input type="button" id="btnCrearu" value="Crear Usuario" >
            <input type="button" id="btnCancelaru" value="Cancelar" >
            </div>
            <div id="formulario">
            <input type="button" id="btnConsultar" value="Buscar" >
               <input type="text" id="buscar" placeholder="Correo"  > 
            <input type="button" id="btnCrear" value="Crear Usuario" >
            <input type="button" id="btnCancelar" value="Cancelar" >
            </div>
            <div id="tabla">
                <table id="tblUsuario"></table>
            </div>
                </div>

    <script type="text/javascript" src="js/JavaScriptGestionarusuario.js"></script>
</body>
</html>