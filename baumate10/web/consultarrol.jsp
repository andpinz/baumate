<%-- 
    Document   : crearrol
    Created on : 26/05/2014, 06:41:56 PM
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
    <h1>Lista de Usuarios</h1>
            <input type="text" id="buscar"> <input type="button" id="btnConsultar" value="..." class="boton">
            <table id="tblRol"/> </table>
                        </form>

    <script type="text/javascript" src="js/JavaScriptConsultarListarol.js"></script>
    </body>
</html>
