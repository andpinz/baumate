<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="Css/consultarcliente.css">
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Baumate</title>
    </head>

<body>
    
    <div id="contenedor">
            <div id="titulo">
        <h1>Consultar Cliente</h1>
            </div>
            <div id="formulario">
       <input type="button" id="btnLimpiar" value="Cancelar">
       <label id="documento">Documento:</label><input name="txtDocumento" type="text" id="txtDocumento">
       <label id="nombrel">Nombre:</label><input name="nombre" type="text" id="nombre">
       <input type="button" id="btnBuscar" value="Buscar">
            </div>
            <div id="tabla">
                <table id="tbldocumento"></table>
            </div>
                </div>
        <script src="js/ConsultarCliente.js" type="text/javascript"></script> 
</body>
</html>
