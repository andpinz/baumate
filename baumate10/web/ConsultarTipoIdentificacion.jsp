<%-- 
    Document   : ConsultarTipoIdentificacion
    Created on : 16/03/2014, 07:52:57 PM
    Author     : Johanagt
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
           <jsp:include page="administrador.jsp"></jsp:include>
        <title>Consultar tipo identificación</title>
    </head>
    <body>
        
        <form>
        <h2>Consultar tipo identificación</h2>
        <p>Tipo Documento
        <input name="txtIdTipoIdentificacion" type="text" id="txtIdTipoIdentificacion"></p>
       
        <p><input type="button" id="btnBuscar" value="Buscar"></p>
        <table id="tbltipoidentificacion">
            
        </table>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/ConsultarTipoIdentificacion.js" type="text/javascript"></script>
        </form>
    </body>
</html>



