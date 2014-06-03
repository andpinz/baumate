<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp"></jsp:include>
        <title>Consultar cliente</title>
    </head>

<form>

        <h1>Consultar Cliente</h1>
        <p>Documento
        <input name="txtDocumento" type="text" id="txtDocumento"></p>
        <p> nombre
        <input name="nombre" type="text" id="nombre"></p>
        <%--> Nombre
        <input name="nombre" type="text" id ="nombre"></p> <--%>

        <p><input type="button" id="btnLimpiar" value="Cancelar">
            <input type="button" id="btnBuscar" value="Buscar"></p>
        
        <table id="tbldocumento">

        </table>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/ConsultarCliente.js" type="text/javascript"></script> 
   
    </form>
</body>
</html>
