<%-- 
    Document   : InsertarEmpleado
    Created on : 22/03/2014, 11:56:53 AM
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
        <title>Registrar Empleado</title>
    </head>
    <body>
        <form>
            <h1> Registrar Empleado </h1>
       <br>
            Primer Nombre <input type="text" name="txtprimernombre" id="txtprimernombre" lbl="lblprimernombre"/>
              <label id="lblprimernombre" class="lblestil"></label>
            <br/>
            Segundo Nombre <input type="text" name="txtsegundonombre" id="txtsegundonombre" lbl="lblsegundonombre"/>
              <label id="lblsegundonombre" class="lblestil"></label>
            <br/>
            Primer Apellido <input type="text" name="txtprimerapellido" id="txtprimerapellido" lbl="lblprimerapellido"/>
              <label id="lblprimerapellido" class="lblestil"></label>
            <br/>
            Segundo Apellido <input type="text" name="txtsegundoapellido" id="txtsegundoapellido" lbl="lblsegundoapellido"/>
              <label id="lblsegundoapellido" class="lblestil"></label>
            <br/>
            Direccion <input type="text" name="txtdireccion" id="txtdireccion" lbl="lbldireccion"/>
              <label id="lbldireccion" class="lblestil"></label>
            <br>
            Telefono <input type="text" name="txttelefono" id="txttelefono" lbl="lbltelefono"/>
              <label id="lbltelefono" class="lblestil"></label>
            <br/>
            Salario  <input type="text" name="txtsalario" id="txtsalario" lbl="lblsalario"/>
              <label id="lblsalario" class="lblestil"></label>
            <br/>
            Fecha nacimiento 
            <input type="date" name="txtfechanacimiento" id="txtfechanacimiento">
            <br/>
            Cargo <select name="Scargo" id="Scargo">
                
            </select>  
            <br/>
            Tipo Documento <br> <select name="Stipodocumento" id="Stipodocumento">
                
            </select>  
            <br/>
            Documento <br> <input type="text" name="txtdocumento" id="txtdocumento" lbl="lbldocumento"/>
            <label id="lbldocumento" class="lblestil"></label>
            <br/>
             Estado <br> <select name="Sestado" id="Sestado">
                 <option value="0" > Inactivo </option>
                 <option value="1">Activo</option>
            </select>  
             <br>
             <input type="button" id="btnenviar" value="enviar">
              <input type="button" value="cancelar" id="btncancelar" />
        </form>
            <script type='text/javascript' src='js/JavaScriptAdministrador.js'></script>
              <script src="js/validaciones.js" type="text/javascript"></script>
             <script src="js/registrarempleado.js" type="text/javascript"></script>
    </body>
</html>
