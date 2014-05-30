<%-- 
    Document   : InsertarCliente
    Created on : 30/05/2014, 09:31:52 AM
    Author     : SENA_2
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
          <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Crear Ciudad</title>
    </head>
    <body>
        <form>
        <div id="main">
        <div id="contenedor">
            <div id="cabecera">
                <h1>Crear Ciudad:</h1>
            </div>
            <div id="cuerpo">
                <p>Nombre de la Ciudad:</p>
                <input name="txtCiudad" type="text" id="txtCiudad" lbl="lblCiudad">
                 <label id="lblCiudad" class="lblestil"></label>
                
                <p><input type="button" id="btnGuardarCiudad" value="Guardar"></p>
                  <input type="button" value="cancelar" id="btnCancelarCiudad" />
            </div>
        </div>
    </div>
        </form>
         <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/InsertarCiudad.js" type="text/javascript"></script>
    </body>
</html>
