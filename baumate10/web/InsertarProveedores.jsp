<%-- 
    Document   : InsertarProveedores
    Created on : 16/03/2014, 12:33:52 PM
    Author     : AndresFeLipe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <script src="js/modernizr.js" type="text/javascript"></script>
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/botonesSubirfoto.css">
        <link rel="stylesheet" type="text/css" href="Css/Validaciones.css">
        <jsp:include page="administrador.jsp"></jsp:include>
     
     
        <script>
            function abrir(url) {
                open(url, '', 'top=300,left=300,width=300,height=300');
            }
        </script> 

        <style>
            .thumb {
                height: 300px;
                border: 1px solid #000;
                margin: 10px 5px 0 0;
            }
        </style>
    </head>
    <title>Insertar Proveedores</title>

    <body>
        <form>
<div id="recibirVariable"></div>
<h2>Insertar Proveedores</h2>

NIT <br> <input type="text" name="txtidproveedores" id="txtidproveedores" lbl="lblidproveedores" />
        <label id="lblidproveedores" class="lblestil"></label>
        <br/>
        Nombre Empresa <br> <input type="text" name="txtnombreempresa" id="txtnombreempresa" lbl="lblnombreempresa"/>
         <label id="lblnombreempresa" class="lblestil"></label>
        <br/>
        Ciudad <br> <select name="Sidciudad" id="Sidciudad">

        </select>  
        <br/>
        Tipo Material <br> <input type="text" id="txttipomaterial" />
        <br/>
        Foto <br>
         <input type="button" value="Añadir Foto" id="subirfoto" />
         <input type="button" value="Vista previa" id="recuperarfoto" />
      
         <input type="hidden" name="respuesta" id="respuesta" />
         <div id="divFotico"></div>
        <br/>
        Telefono <br> <input type="text" name="txttelefono" id="txttelefono" lbl="lbltelefono"/>
          <label id="lbltelefono" class="lblestil"></label>
        <br/>
        Direccion <br> <input type="text" name="txtdireccion" id="txtdireccion" lbl="lbldireccion"/>
        <label id="lbldireccion" class="lblestil"></label>
        <br>
        <div style="visibility:hidden">
                Estado: <select name="Sestado" id="Sestado" >
                    <option value="1" >Activo</option>
                </select> </div> 
        <input type="button" id="btnenviar" value="enviar">
        <input type="button" value="cancelar" id="btncancelar" />
         </form>
        
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
        <script src="js/validaciones.js" type="text/javascript"></script>
        <script src="js/registrarproveedores.js" type="text/javascript"></script>
        <script src="js/subirfoto.js" type="text/javascript"></script>
      
    </body>
</html>
