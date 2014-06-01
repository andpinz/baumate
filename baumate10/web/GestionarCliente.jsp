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
        <div id="derecha">
            <div id="informacion">
                <div id="informacion2">
                     
                  
                    <div><p>Tipo documento</p><select name="cboTipoDocumento" id="cboTipoDocumento">
                    </select></div>
                    <hr>
                    
                    <div><p>Documento:</p><input name="texDocumento" type="text" id="idcontacto" lbl="lbldocumento">
                    <label id="lbldocumento" class="lblestil"></label></div>
                    <hr>
                    <div><p>Primer nombre:</p><input name="txtPrimerNombre" type="text" id="txtPrimerNombre" lbl="lblprimernombre"><br>
                    <label id="lblprimernombre" class="lblestil"></label></div>
                    <div><p>Segundo nombre</p><input name="txtSegundoNombre" type="text" id="txtSegundoNombre" lbl="lblsegundonombre">
                    <label id="lblsegundonombre"class="lblestil"></label></div>
                    <hr>
                    <div><p>Primer apellido</p><input name="txtPrimerApellido" type="text" id="txtPrimerApellido" lbl="lblprimerapellido">
                    <label id="lblprimerapellido" class="lblestil"></label></div>
                    <hr>
                    <div><p>Segundo apellido</p><input name="txtSegundoApellido" type="text" id="txtSegundoApellido" lbl="lblsegundoapellido">
                    <label id="lblsegundoapellido" class="lblestil"></label></div>
                    <hr>
                    <div><p>Direcciòn</p><input name="txtDireccion" type="text" id="txtDireccion"></div>
                    <hr>
                    <div><p>Telèfono</p><input name="txtTelefono" type="text" id="txtTelefono"  lbl="lbltelefono">
                    <label id="lbltelefono" class="lblestil"></label>
                    
                    
                    </div>
                    <hr
                        </div>
                </div>
                <div id="btnguardar">
                  
                </div>
            </div>
        </div>
        <div id="izquierda">

        </div>
        <div id="botones">
            <div id="botonesstyle">
            
            <input type="button" id="add" value="Crear">
            <input type="button" id="edi" value= "Modificar">
            <input type="button" id="del" value="Eliminar">
            
            </div>
            
        </div>
        
    </div>
    <script src="js/validaciones.js" type="text/javascript"></script>
    <script src="js/GestionarCliente.js" type="text/javascript"></script>
</body>
</html>