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
    <link href="imagenes/baumate-icono.ico" type="image/x-icon" rel="shortcut icon" />
    <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body> 
        <form>
    <h1>Lista de Usuarios</h1>
            <input type="text" id="buscar"> <input type="button" id="btnConsultar" value="..." class="boton">
            <table id="tblUsuario"/> </table>
                        </form>

    <script type="text/javascript" src="js/JavaScriptConsultarListausuario.js"></script>
</body>
</html>