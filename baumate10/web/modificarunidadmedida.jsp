<%-- 
    Document   : modificarcargo
    Created on : 17/03/2014, 04:32:48 PM
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

        <title>Modificar  unidad de medida</title>
    </head>
    <body>
        <form>
        <h1>Modificar Unidad de medida</h1>
        <div id="cuerpo">
            <p>id</p>
            <input name="txtidunidadmedida" type="text" id="txtidunidadmedida" lbl="lblidunidadmedida" ><input type="button" id="btnBuscarId" value="...">
            <label id="lblidunidadmedida" class="lblestil"></label>

            <p>Nombre</p>
            <input name="txtunidadmedida" type="text" id="txtunidadmedida" lbl="lblunidadmedida">
            <label id="lblunidadmedida" class="lblestil"></label>

            <p><input type="button" id="btnGuardar" value="Guardar"></p>
              <input type="button" value="cancelar" id="btncancelar" />
        </div>
        </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/modificarunidadmedida.js" type="text/javascript"></script>
    </body>
</html>
