<%-- 
    Document   : eliminarcargo
    Created on : 17/03/2014, 05:49:58 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
          <jsp:include page="administrador.jsp"></jsp:include>
        <title>Eliminar Unidad de medida</title>
    </head>
    <body>
        <form>
       <h1>Cargo</h1>
        <p>Unidad de medida</p>
        <input name="txtunidadmedida" type="text" id="txtunidadmedida">
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tblunidadmedida">
            
        </table>
        </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
        <script src="js/eliminarunidadmedida.js" type="text/javascript"></script>
    </body>
</html>