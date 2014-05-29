<%-- 
    Document   : CrearTipoIdentificacion
    Created on : 16/03/2014, 05:20:48 PM
    Author     : Johanagt
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Crear Tipo de Identificación</title>
    </head>
<body>
    <form>
    
    <h1>Crear Tipo de Identificación</h1>
        Nombre: <input name="txtDescripcion" id="txtDescripcion" type="text" lbl="lbldescripcion">
        <label id="lbldescripcion" class="lblestil"></label>
        
        
        <p><input type="button" id="btnLimpiar" value="Cancelar">
            <input type="button" id="boton" value="Guardar"></p>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/CrearTipoIdentificacion.js" type="text/javascript"></script>
        </form>
        
</body>
</html>