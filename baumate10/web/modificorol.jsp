<%-- 
    Document   : modificorol
    Created on : 26/05/2014, 08:29:41 PM
    Author     : david
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>
    <body>
        <form>
    <h1 class="titulo">Modificar Usuario</h1>
    Correo
    <br>
                <input type="text"  id="buscar" class="buscar" placeholder="NombreRol"/>
                <input type="button" id="buscarRol" class="boton" value="..."/>
                <br>
		
                <br>
                <p class="nombrerol">Nombre Rol</p>
		<input type="text"  id="nombrerol" class="nombrerol" />
                <input type="hidden" id="idRol">
                <input type="button" id="modificarRol" class="boton" value="Modificar"/>
    </form>
        <script type="text/javascript" src="js/JavaScriptModificarrol.js"></script>
    </body>
</html>
