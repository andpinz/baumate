<%-- 
    Document   : ConsultarMateriales
    Created on : Mar 15, 2014, 8:29:21 PM
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>Consultar Material</title>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="Css/menu_jquery.js"></script>
    <link rel="stylesheet" type="text/css" href="Css/administrador.css">
    <link href="imagenes/baumate-icono.png" type="image/x-icon" rel="shortcut icon" />
    <jsp:include page="administrador.jsp"></jsp:include>
</head>
<body>
    <form>

        <h1>Listar todos los registros </h1>   
        Nombre del Material<br>
        <input name="txtNmaterial" type="text" id="txtNmaterial">
        <p><input type="button" id="btnConsultar" value="Consultar"></p>
          <table id="tblmaterial" >
        </table>
            </form>
    <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/ConsultarMateriales.js" type="text/javascript"></script>
</body>
</html>
