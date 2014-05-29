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
   <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
	<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
        <link href="imagenes/baumate-icono.ico" type="image/x-icon" rel="shortcut icon" />
</head>
<body background="imagenes/fondo.png">
   <div id="CG">
      <div id="Cin">
         <div id="Cinl">
                        <img src="imagenes/logo.png" id="l">
                        </div>
                        <input type="button" value="?" id="ayuda" onclick="window.open('Archivos/ManualUsuario.pdf')">
                        
      </div>
       <form>
           <div id="titulo">
           <h1>Inicio De Sesion</h1>
           </div>
		<input type="text" placeholder="Correo" class="correo" id="correo">  
		<br>
		<input type="password" placeholder="Contraseña" class="contrasena" id="contrasena">
		<input type="button" value="Iniciar Sesion"  class="boton" id="iniciarSesion" />
       </form>
      </div>
   <script type="text/javascript" src="js/JavaScript.js"></script>
</body>
</html>
