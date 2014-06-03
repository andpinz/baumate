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
    <script type='text/javascript' src='js/menu_jquery.js'></script>
    <link rel="stylesheet" type="text/css" href="Css/consultarusuario.css">
    <link href="imagenes/baumate-icono.ico" type="image/x-icon" rel="shortcut icon" />
    <jsp:include page="administrador.jsp"></jsp:include>
    </head>
    <body> 
        <div id="contenedor">
            <div id="titulo">
        <h1>Consultar Usuario</h1>
            </div>
            <div id="formulario">
            <input type="button" id="btnConsultar" value="Buscar" >
               <input type="text" id="buscar" placeholder="Correo"  > 
            <input type="button" id="btnCancelar" value="Cancelar" >
            </div>
            <div id="tabla">
                <table id="tblUsuario"></table>
            </div>
                </div>

    <script type="text/javascript" src="js/JavaScriptConsultarListausuario.js"></script>
</body>
</html>