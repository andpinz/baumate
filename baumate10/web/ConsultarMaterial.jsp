<%-- 
    Document   : ConsultarMateriales
    Created on : Mar 15, 2014, 8:29:21 PM
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>Baumate</title>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="Css/consultarmaterial.css">
    <jsp:include page="administrador.jsp"></jsp:include>
</head>
<body>
    
    <div id="contenedor">
            <div id="titulo">
        <h1>Consultar Material</h1>
            </div>
            <div id="formulario">
                <label id="nombrematerial">Nombre del material:</label><input name="txtNmaterial" type="text" id="txtNmaterial">
        <input type="button" id="btnConsultar" value="Buscar">
            </div>
            <div id="tabla">
                <table id="tblmaterial" ></table>
            </div>
                </div>
        
          
        <script src="js/ConsultarMateriales.js" type="text/javascript"></script>
</body>
</html>
