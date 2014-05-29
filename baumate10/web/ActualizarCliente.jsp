<%-- 
    Document   : ActualizarCliente
    Created on : 17/03/2014, 11:22:42 AM
    Author     : Johanagt
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>Actualizar Cliente</title>
	<link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
 <jsp:include page="administrador.jsp"></jsp:include>
    <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
</head>
<form>
    <h1>Actualizar cliente</h1>
    Compañia<input type="radio" name="compañia" id="compañia" value="0">
    Persona Natural<input type="radio" name="compañia" id="pernatural"  value="1">
    <div id="cuerpo">
        
        <input name="cliente" type="hidden" id="cliente">
        
        <p>Documento
        <input name="texDocumento" type="text" id="texDocumento" >
        <input type="button" id="btnBuscarId" value="..."></p>
        <p>Tipo Documento
        <select name="cboTipoDocumento" id="cboTipoDocumento"></p>
        </select>
        <p>Primer Nombre
        <input name="txtPrimerNombre" type="text" id="txtPrimerNombre" lbl="lblprimernombre">
        <label id="lblprimernombre" class="lblestil"></label></p>
        <p>Segundo Nombre
        <input name="txtSegundoNombre" type="text" id="txtSegundoNombre" lbl="lblsegundonombre">
        <label id="lblsegundonombre"class="lblestil"></label></p>
        <p>Primer Apellido
        <input name="txtPrimerApellido" type="text" id="txtPrimerApellido" lbl="lblprimerapellido">
        <label id="lblprimerapellido" class="lblestil"></label></p>
        <p>Segundo Apellido
        <input name="txtSegundoApellido" type="text" id="txtSegundoApellido" lbl="lblsegundoapellido">
        <label id="lblsegundoapellido" class="lblestil"></label></p>
        <p>Dirección
        <input name="txtDireccion" type="text" id="txtDireccion"></p>
        <p>Teléfono
        <input name="txtTelefono" type="text" id="txtTelefono"  lbl="lbltelefono">
        <label id="lbltelefono" class="lblestil"></label></p>
        <p>Estado
        <select name="txtEstado" id="txtEstado">
            <option value="0" > Inactivo </option>
            <option value="1">Activo</option>
        </select>  </p>

        <input type="button" id="btnLimpiar" value="Cancelar">
            <input type="button" id="btnGuardar" value="Guardar">
    </div>
</div>
</div>
</form>
<script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
<script src="js/validaciones.js" type="text/javascript"></script>
<script src="js/ActualizarCliente.js" type="text/javascript"></script>
</div>
</body>
</html>
