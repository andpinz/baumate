<%-- 
    Document   : InsertarUnidadmedida
    Created on : 27/04/2014, 12:22:18 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
          <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Crear Unidad de medida</title>
    </head>
    <body>
        <form>
        <div id="main">
        <div id="contenedor">
            <div id="cabecera">
                <H1>Crear Unidad de medida</h1>
            </div>
            <div id="cuerpo">
                <p>Unidad de medida:</p>
                <input name="txtUnidadmedida" type="text" id="txtUnidadmedida" lbl="lblunidadmedida">
                 <label id="lblunidadmedida" class="lblestil"></label>
                
                <p><input type="button" id="btnGuardar" value="Guardar"></p>
                  <input type="button" value="cancelar" id="btncancelar" />
            </div>
        </div>
    </div>
        </form>
         <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/InsertarUnidadmedida.js" type="text/javascript"></script>
    </body>
</html>
