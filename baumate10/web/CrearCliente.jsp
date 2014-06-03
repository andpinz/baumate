<%-- 
    Document   : CrearCliente
    Created on : 17/03/2014, 10:31:12 AM
    Author     : Johanagt
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <script src="js/modernizr.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
              <link rel="stylesheet" type="text/css" href="Css/modals.css">   
        <jsp:include page="administrador.jsp"></jsp:include>
    
</head>
<body>
    <form>
    <h1>Crear cliente</h1>
                Compañia<input type="radio" name="compañia" id="compañia" value="0">
                Persona Natural<input type="radio" name="compañia" id="pernatural"  value="1"><br>
                Documento
                <input name="txtDocumento" type="text" id="txtDocumento" lbl="lbldocumento">
                <label id="lbldocumento" class="lblestil"></label><br>
                
                Tipo documento
                <select name="cboTipodocumento" id="cboTipodocumento">
                </select> 
                 <input id="btnAddCiudad" value="+" type="button" data-type="zoomin"><br>
                        <div class="overlay-container" id="winCiudad" >
                            <div class="window-container zoomin">
                                
                                <p>Descricion Documento:</p>
                                <input name="txtDescripcion" type="text" id="txtDescripcion" lbl="lblCiudad">
                                <label id="lblCiudad" class="lblestil"></label><br>
                                <input type="button" id="btnGuardarCiudad" value="Guardar">
                                <input type="button" value="cancelar" id="btnCancelarCiudad" />
                            </div>
                        </div>
                            
                            
                Primer Nombre
                <input name="txtPrimerNombre" type="text" id="txtPrimerNombre" lbl="lblprimernombre">
                <label id="lblprimernombre" class="lblestil"></label><br>
                Segundo Nombre
                <input name="txtSegundoNombre" type="text" id="txtSegundoNombre" lbl="lblsegundonombre" >
                <label id="lblsegundonombre"class="lblestil"></label><br>
                Primer Apellido
                <input name="txtPrimerApellido" type="text" id="txtPrimerApellido" lbl="lblprimerapellido">
                <label id="lblprimerapellido" class="lblestil"></label><br>
                Segundo Apellido
                <input name="txtSegundoApellido" type="text" id="txtSegundoApellido" lbl="lblsegundoapellido">
                <label id="lblsegundoapellido" class="lblestil"></label><br>
                Dirección
                <input name="txtDireccion" type="text" id="txtDireccion" lbl="lbldireccion">
                <label id="lbldireccion" class="lblestil"></label><br>
                Teléfono
                <input name="txtTelefono" type="text" id="txtTelefono" lbl="lbltelefono">
                <label id="lbltelefono" class="lblestil"></label>
                <div style="visibility:hidden">
                Estado: <select name="txtEstado" id="txtEstado" >
                 
                    <option value="1" >Activo</option>
                </select> </div> 
                
                <p><input type="button" id="btnLimpiar" value="Cancelar">
                    <input type="button" id="btnGuardar" value="Guardar"></p>
                   
                </form>

<script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
<script src="js/validaciones.js" type="text/javascript"></script>
<script src="js/CrearCliente.js" type="text/javascript"></script>
</body>
</html>