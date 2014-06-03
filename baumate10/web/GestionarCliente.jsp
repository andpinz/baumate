<%-- 
    Document   : GestionarCliente
    Created on : 29-may-2014, 16:50:47
    Author     : johana
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Gestionar cliente</title>
        
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <script src="js/modernizr.js" type="text/javascript"></script>
        
       
        
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <link rel="stylesheet" type="text/css" href="estilos/Style.css">
        <script src="js/jquery-2.0.3.min.js" type="text/javascript"></script>
        <jsp:include page="administrador.jsp"></jsp:include>
    </head>
<body>
    <div id="contenedor"> 
        <div id="titulo">
        <h1>Cliente</h1>
            </div>
        <div id="derecha">
                    <label>Tipo documento</label><select name="cboTipoDocumento" id="cboTipoDocumento"></select>
                    <label id="documento">Documento:</label><input name="texDocumento" type="text" id="idcontacto" lbl="lbldocumento"><br>
                    <label>Primer nombre:</label><input name="txtPrimerNombre" type="text" id="txtPrimerNombre" lbl="lblprimernombre"><br>
                    <label>Segundo nombre:</label><input name="txtSegundoNombre" type="text" id="txtSegundoNombre" lbl="lblsegundonombre"><br>
                    <label>Primer apellido:</label><input name="txtPrimerApellido" type="text" id="txtPrimerApellido" lbl="lblprimerapellido"><br>
                    <label>Segundo apellido:</label><input name="txtSegundoApellido" type="text" id="txtSegundoApellido" lbl="lblsegundoapellido"><br>
                    <label>Direcciòn:</label><input name="txtDireccion" type="text" id="txtDireccion">
                    <label id="telefono">Telèfono:</label><input name="txtTelefono" type="text" id="txtTelefono"  lbl="lbltelefono">
            <input type="button" id="add" value="Crear">
            <input type="button" id="edi" value= "Modificar">
            <input type="button" id="del" value="Eliminar">
            </div>
        <div id="izquierda">

        </div>
    </div>
    <script src="js/validaciones.js" type="text/javascript"></script>
    <script src="js/GestionarCliente.js" type="text/javascript"></script>
</body>
</html>