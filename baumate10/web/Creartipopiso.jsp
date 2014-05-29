<%-- 
    Document   : Creartipopiso
    Created on : 27/04/2014, 01:37:59 AM
    Author     : Johanagt
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8" />
 <title>Crear tipo piso</title>
<link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
    <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
      <jsp:include page="administrador.jsp"></jsp:include>
</head>
<body>
    <form>
    <h1>Crear Tipo de Piso</h1>
         <p>Nombre:</p>
         <input name="txtNombre" id="txtNombre" type="text" lbl="lblnombre">
        
        <label id="lblnombre" class="lblestil"></label>
        
        <p><input type="button" id="btnLimpiar" value="Cancelar">
            <input type="button" id="boton" value="Guardar"></p>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
         <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/Creartipopiso.js" type="text/javascript"></script>
            </form>
</body>
</html>
