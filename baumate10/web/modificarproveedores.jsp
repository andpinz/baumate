<%-- 
    Document   : modificarproveedores
    Created on : 16/03/2014, 05:28:11 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
           <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
           <link rel="stylesheet" type="text/css" href="Css/botonesSubirfoto.css">
           <jsp:include page="administrador.jsp"></jsp:include>
        <title>Modificar proveedores</title>
    </head>
    <body>
        <form>
           <h1>Modificar proveedores</h1>
            <div id="cuerpo">
                NIT <br>
                <input name="txtidproveedores" type="text" id="txtidproveedores" lbl="lblidproveedores" >
                <input type="button" id="btnBuscarId"  value="...">
                  <label id="lblidproveedores" class="lblestil"></label>
                  <br>
            Nombre <br>
                <input name="txtnombreempresa" type="text" id="txtnombreempresa" lbl="lblnombreempresa">
                  <label id="lblnombreempresa" class="lblestil"></label>
                  <br>
                  Ciudad <br>
                <select name="Sidciudad" id="Sidciudad">
                </select><br>
                Tipo material <br>
                <input name="txttipomaterial" type="text" id="txttipomaterial">
                <br>
                Foto <br>
                <input type="button" value="Añadir Foto" id="subirfoto" />
         <input type="button" value="Vista previa" id="recuperarfoto" />
                 <input type="hidden" name="respuesta" id="respuesta" />
                  <div id="divFotico"></div>
                  <br>
                  Telefono <br>
                <input name="txttelefono" type="text" id="txttelefono" lbl="lbltelefono">
                  <label id="lbltelefono" class="lblestil"></label>
                <p>direccion</p>
                <input name="txtdireccion" type="text" id="txtdireccion" lbl="lbldireccion">
                  <label id="lbldireccion" class="lblestil"></label>
                <br>
                Estado <br> <select name="Sestado" id="Sestado">
                 <option value="0" > Inactivo </option>
                 <option value="1">Activo</option>
                </select>  <br>
                
                
                <input type="button" id="btnGuardar" value="Guardar">
                 <input type="button" value="cancelar" id="btncancelar" />
            </div>
                    </form>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
            <script src="js/validaciones.js" type="text/javascript"></script>
           <script src="js/subirfoto.js" type="text/javascript"></script>
        <script src="js/modificarproveedores.js" type="text/javascript"></script>
    </body>
</html>
