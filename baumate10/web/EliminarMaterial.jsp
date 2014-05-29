<%-- 
    Document   : EliminarMaterial
    Created on : 16-mar-2014, 22:59:12
    Author     : hectorbohorquez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Eliminar Material</title>
    </head>
    <body>
        <form>
        
        <p>Nombre del material a eliminar</p>
        <input name="txtnombrematerial" type="text" id="txtnombrematerial" lbl="lblnombrematerial">
        <label id="lblnombrematerial" class="lblestil"></label>
        
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tblmaterial" >
        </table>
        
         </form>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/EliminarMateriales.js" type="text/javascript"></script>
    </body>
</html>
