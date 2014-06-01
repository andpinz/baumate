<%--
 * @author David Andres Gomez Zamora
 * 17-03-2014
 --%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>Baumate</title>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
    <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
    <script type='text/javascript' src='Css/menu_jquery.js'></script>
    <%--   <link rel="stylesheet" type="text/css" href="Css/administrador.css">  --%>
    <link rel="stylesheet" type="text/css" href="Css/Master.css">
    <link href="baumate-icono.ico" type="image/x-icon" rel="shortcut icon" />
    <jsp:include page="administrador.jsp"></jsp:include>
</head>
<body> 
    
    <form>
		<h1 class="titulo">Nuevo Usuario</h1>
		<p class="correo">Correo:</p><input type="text"  id="correo" class="correo" lbl="lblCorreo"/>
                <label id="LblCorreo" class="lblestil"></label>
		<p class="contrasena">Contraseña:</p><input type="password"  id="contrasena" class="contrasena" lbl="lblContrasena"/>
                <label id="LblContrasena" class="lblestil"></label>
		<p class="tipousuario">Tipo de Usuario:</p>
		<select  id="idrol" class="tipousuario"></select>
		<select  id="idempleado" class="tipoempleado"></select>
                <p class="tipousuario">Empleado:</p>
                <p class="estadousuario">Tipo de Estado:</p>
                <select class="estado" id="estado">
                    <option value="1">Activo</option>
                    <option value="0">Inactivo</option>
                </select>
                <br>
                <input type="button" id="ingresarUsuario" class="boton" value="Nuevo"/>

    </form>
    <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
<script type="text/javascript" src="js/validaciones.js"></script>
<script type="text/javascript" src="js/JavaScriptNuevousuario.js"></script>
</body>
</html>