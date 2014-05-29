<%-- 
    Document   : iniciosesion
    Created on : 27/05/2014, 10:54:44 PM
    Author     : david
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>Bumate</title>
   <meta charset="UTF-8">
   <link rel="stylesheet" type="text/css" href="Css/iniciosesion.css"/>
   <link rel="stylesheet" type="text/css" href="Css/alertify.core.css"/>
   <link rel="stylesheet" type="text/css" href="Css/alertify.default.css"/>
   <script type="text/javascript" src="js/alertify.js"></script>
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
          <div id="cbotones">
                            <input type="text" placeholder="Correo" class="correo" id="correo">            
                            <input type="password" placeholder="Contraseña" class="contrasena" id="contrasena">
                            <input type="button" value="Iniciar Sesion"  class="boton" id="iniciarSesion" /> 
                            <input type="button" value="?" id="ayuda" onclick="window.open('Archivos/ManualUsuario.pdf')">
          </div>
      </div>
      <div id="contenedor">
                <div id="leyenda">
        <h1>Optimiza el desempeño de la constructora.</h1>
        <h4>Almacena la informacion, contacta tus clientes y proveedores,protege los datos,</h4>
        <h4>evalua tu constructora y calcula el material necesario; Todo desde cualquier lugar.</h4>
         </div>
                <div id="imagen">
            <img src="imagenes/img3.png">
          </div>
      </div>
       </div>
   <script type="text/javascript" src="js/JavaScript.js"></script>
</body>
</html>
