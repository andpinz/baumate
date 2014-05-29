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
    <script type="text/javascript" src="Js/jquery-2.1.0.min.js"></script>
    <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
    <script type='text/javascript' src='Css/menu_jquery.js'></script>
    <link rel="stylesheet" type="text/css" href="Css/Master.css">
    <link href="baumate-icono.ico" type="image/x-icon" rel="shortcut icon" />
    <jsp:include page="administrador.jsp"></jsp:include>
</head>
<body> 
    <form>
    <h1 class="titulo">Modificar Usuario</h1>
    Correo
    <br>
                <input type="text"  id="buscar" class="buscar" placeholder="Correo"/>
                <input type="button" id="buscarUsuario" class="boton" value="..."/>
                <br>
		
                <br>
                <p class="contrasena">Contraseña</p>
		<input type="text"  id="correo" class="correo" />
                <br>
		 <p class="correo">Tipo de Usuario</p>
                <br>
		<input type="text"  id="contrasena" class="contrasena" />
                <br>
               
		<select  id="idrol" class="tipousuario">
        </select>
                <br>
                <input type="hidden" id="idUsuario">
                <input type="button" id="modificarUsuario" class="boton" value="Modificar"/>
</div>
    </form>
    <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
<script type="text/javascript" src="js/JavaScriptModificarusuario.js"></script>
</body>
</html>
        
