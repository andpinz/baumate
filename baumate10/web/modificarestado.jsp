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
    <link rel="stylesheet" type="text/css" href="Css/Master.css">
    <link href="baumate-icono.ico" type="image/x-icon" rel="shortcut icon" />
    <jsp:include page="administrador.jsp"></jsp:include>
</head>
<body> 
    <form>
    <h1 class="titulo">Activar / Desactivar Usuario</h1>
    Correo
                <input type="text"  id="buscar" class="buscar" placeholder="Correo"/>
                <input type="button" id="buscarUsuario" class="boton" value="..."/>
                <br>
		Tipo de Usuario
                 <br>
                 <select  id="idrol" class="tipousuario">
                </select>
                <br>
              Estado
               <br>
		
                
                <select id="estado">
                    <option value="1">Activo</option>
                    <option value="0">Inactivo</option>
                </select>
               <br>
                <input type="hidden" id="idUsuario">
                <input type="button" id="modificarEstadoUsuario" class="boton" value="Modificar"/>
            </form>
    <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
<script type="text/javascript" src="js/JavaScriptModificarestadousuario.js"></script>
</body>
</html>
        

