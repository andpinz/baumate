<%-- 
    Document   : modificarempleado
    Created on : 22/03/2014, 01:46:08 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
          <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
          <link rel="stylesheet" type="text/css" href="Css/Master.css">
          <jsp:include page="administrador.jsp"></jsp:include>
            <title>Modificar empleado</title>
    </head>
    <body>
        <form>
        <h1>Modificar Empleado</h1>
            <div id="cuerpo">
                Documento 
                <input type="text" id="txtdocumento" lbl="lblidempleado"><input type="button" id="btnBuscarId" value="...">
                 <label id="lbldocumento" class="lblestil"></label>
                 <label id="lblidempleado" class="lblestil"></label>
                 <br>
                Primer Nombre <input type="text" name="txtprimernombre" id="txtprimernombre" lbl="lblprimernombre"/>
              <label id="lblprimernombre" class="lblestil"></label>
            <br>
            Segundo Nombre<input type="text" name="txtsegundonombre" id="txtsegundonombre" lbl="lblsegundonombre"/>
              <label id="lblsegundonombre" class="lblestil"></label>
            <br>
            Primer Apellido <input type="text" name="txtprimerapellido" id="txtprimerapellido" lbl="lblprimerapellido"/>
              <label id="lblprimerapellido" class="lblestil"></label>
            <br>
            Segundo Apellido <input type="text" name="txtsegundoapellido" id="txtsegundoapellido" lbl="lblsegundoapellido"/>
              <label id="lblsegundoapellido" class="lblestil"></label>
            <br>
            Direcciòn <input type="text" name="txtdireccion" id="txtdireccion" lbl="lbldireccion"/>
              <label id="lbldireccion" class="lblestil"></label>
            <br>
            Telèfono <input type="text" name="txttelefono" id="txttelefono" lbl="lbltelefono"/>
              <label id="lbltelefono" class="lblestil"></label>
            <br/>
            Salario <input type="text" name="txtsalario" id="txtsalario" lbl="lblsalario"/>
              <label id="lblsalario" class="lblestil"></label>
            <br/>
            Fecha nacimiento
            <input type="date" name="txtfechanacimiento" id="txtfechanacimiento">
            <br>
            Cargo <select name="Scargo" id="Scargo">
                
            </select>  
            <br/>
            Tipo Documento<select name="Stipodocumento" id="Stipodocumento">
                
            </select>  
            <br/>
                      ESTADO<select name="Sestado" id="Sestado">
                 <option value="0" > Inactivo </option>
                 <option value="1">Activo</option>
            </select>  
                <br>
                <p><input type="button" id="btnGuardar" value="Guardar"></p>
                   <input type="button" value="Cancelar" id="btncancelar" />
            </div>
        </form>
        <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
          <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/modificarempleado.js" type="text/javascript"></script>
    </body>
</html>
