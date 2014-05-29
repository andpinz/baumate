<%-- 
    Document   : ModificarTipoIdentificacion
    Created on : 16/03/2014, 08:01:23 PM
    Author     : Johanagt
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8" />
 <title>Modificar tipo identificación</title>
    <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
    <link rel="stylesheet" type="text/css" href="estilos/estilos.css">
    <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
      <jsp:include page="administrador.jsp"></jsp:include>
</head>
<body>
    <form>
    <h1>Modificar tipo identificación</h1>
    
        <input type="hidden" id="descripcion">
        Descripcion:
        <input name="txtidTipoIdentificacion" id="txtidTipoIdentificacion" type="text">
        <input type="button" id="btnBuscarId" value="..."><br>
        
        <input name="txtDescripcion" id="txtDescripcion" type="text" lbl="lbldescripcion">
        <label id="lbldescripcion" class="lblestil"></label>
        
        <div>
        <p><input type="button" id="btnLimpiar" value="Cancelar">
            <input type="button" id="boton" value="Modificar"></p>
        </div>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/ModificarTipoIdentificacion.js" type="text/javascript"></script>
        </form>
</body>
</html>
