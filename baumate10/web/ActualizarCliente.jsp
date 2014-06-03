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
	<link rel="stylesheet" type="text/css" href="Css/actualizarcliente.css">
        <jsp:include page="administrador.jsp"></jsp:include>
    <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
</head>
<body>
    <div id="contenedor">
        <div id="titulo">
            <h1>Modificar Cliente</h1>
        </div>
        <div id="formulariob">
            Compañia: <input type="radio" name="compañia" id="compañia" value="0">
            Persona Natural: <input type="radio" name="compañia" id="pernatural"  value="1">
            <p>
            Documento:<input name="texDocumento" type="text" id="texDocumento" ></p>
            <p>
            Nombre:<input name="nombre" type="text" id="nombre" ></p>
            
            <input type="button" id="btnBuscarId" value="Buscar">
            <input name="cliente" type="hidden" id="cliente"><br>
            
        </div>
        <div id="formulario">
            <div id="formularioi"> 
                Tipo de Documento:<select name="cboTipoDocumento" id="cboTipoDocumento"></p>
                </select><br>
                Primer Nombre:<input name="txtPrimerNombre" type="text" id="txtPrimerNombre" lbl="lblprimernombre">
                <label id="lblprimernombre" class="lblestil"></label></p>
                Segundo Nombre:<input name="txtSegundoNombre" type="text" id="txtSegundoNombre" lbl="lblsegundonombre">
                <label id="lblsegundonombre"class="lblestil"></label></p>
                <label id="lblprimerapellido" class="lblestil"></label></p>
                Segundo Apellido:<input name="txtSegundoApellido" type="text" id="txtSegundoApellido" lbl="lblsegundoapellido">
                <label id="lblsegundoapellido" class="lblestil"></label></p>
            </div>
            <div id="formulariod">
                Primer Apellido:<input name="txtPrimerApellido" type="text" id="txtPrimerApellido" lbl="lblprimerapellido"></p>
                Direcciòn:<input name="txtDireccion" type="text" id="txtDireccion"></p>
                Telèfono:<input name="txtTelefono" type="text" id="txtTelefono"  lbl="lbltelefono">
                <label id="lbltelefono" class="lblestil"></label></p>
                Estado:<select name="txtEstado" id="txtEstado">
                    <option value="0" > Inactivo </option>
                    <option value="1">Activo</option>
                </select> 



                <div id="botones">
                    <input type="button" id="btnLimpiar" value="Cancelar">
                    <input type="button" id="btnGuardar" value="Guardar">
                </div>

            </div>
        </div>
    </div>
    <table id="tblclientes">
    </table>
    <script src="js/validaciones.js" type="text/javascript"></script>
    <script src="js/ActualizarCliente.js" type="text/javascript"></script>
</body>
</html>
