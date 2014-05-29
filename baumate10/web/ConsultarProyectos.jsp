<%-- 
    Document   : ConsultarProyectos
    Created on : 15/03/2014, 11:22:27 PM
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
        <h1>Consultar Proyectos</h1>
        <p>Nombre del proyecto <br>
        <input name="txtNombre" type="text" id="txtNombre"></p>
        <p>ciudad <br>
        <select name="cboCiudad" id="cboCiudad">
        </select></p>
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tblProyectos">
            
        </table>
                    </form>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/ConsultarProyectos.js" type="text/javascript"></script>
    </body>
</html>
