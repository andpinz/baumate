<%-- 
    Document   : modificartipopiso
    Created on : 16/03/2014, 01:39:55 PM
    Author     : Johanagt
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8" />
 <title>Actualizar tipo piso</title>
    <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
    <link rel="stylesheet" type="text/css" href="estilos/estilos.css">
    <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
      <jsp:include page="administrador.jsp"></jsp:include>
</head>
<body>
    <form>
    <h1>Actualizar tipo piso</h1>
    <input type="hidden" id="codigo">
    Nombre 
    <input name="txtcodigo" id="txtcodigo" type="text">
    
    <input type="button" id="btnBuscarId" value="..."><br>
    <input name="txtNombre" id="txtNombre" type="text" lbl="lbldescripcion">
        <label id="lbldescripcion" class="lblestil"></label>
        <p><input type="button" id="btnLimpiar" value="Cancelar">
            <input type="button" id="boton" value="Guardar"></p>
            </form>
    <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
         <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/Modificartipopiso.js" type="text/javascript"></script>
</body>
</html>
