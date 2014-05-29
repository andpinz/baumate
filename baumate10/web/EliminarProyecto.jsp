<%-- 
    Document   : EliminarProyecto
    Created on : 16/03/2014, 01:10:11 PM
    Author     : jose
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Lista de Proyectos</title>
    </head>
    <body>
        <form>
            
            <h1>Eliminar proyectos</h1>
            Nombre del proyecto
            <input name="txtNombre" type="text" id="txtNombre"><br>
            ciudad 
        <select name="cboCiudad" id="cboCiudad">
        </select><br>
        <input type="button" id="btnBuscar" value="Buscar">
        <br>
        <br>
        <table id="tblProyectos">
            
        </table>
                    </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/EliminarProyecto.js" type="text/javascript"></script>
    </body>
</html>
