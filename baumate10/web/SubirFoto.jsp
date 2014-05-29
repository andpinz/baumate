<%-- 
    Document   : SubirFoto
    Created on : 23/04/2014, 10:14:16 AM
    Author     : sena
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
        <script src="js/modernizr.js" type="text/javascript"></script>
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/style.css">
        <title>Subir Foto</title>
       
    </head>
    <body>
        
            <%--CARGAR FOTO --%>

    <%@page language="java" import="javazoom.upload.*" %>
    <%@page language="java" import="java.util.*" %>
    <%@page errorPage="errorFoto.jsp" %>

    <%
        String direccion = request.getSession().getServletContext().getRealPath("imagenesBD/");
        String ruta = "";
        String nombreimagen = "";
    %>

    <jsp:useBean id="upBean" scope="page" class="javazoom.upload.UploadBean" >
        <jsp:setProperty name="upBean" property="folderstore" value="<%= direccion%>" />
        <jsp:setProperty name="upBean" property="whitelist" value="*.jpg,*.gif,*.png" />
        <jsp:setProperty name="upBean" property="overwritepolicy" value="nametimestamp"/>
    </jsp:useBean>
    <form method="post" action="SubirFoto.jsp" name="upform" enctype="multipart/form-data">

        <%
            if (MultipartFormDataRequest.isMultipartFormData(request)) {
                MultipartFormDataRequest mrequest = new MultipartFormDataRequest(request);
                String todo = null;
                if (mrequest != null) {
                    todo = mrequest.getParameter("todo");
                }
                if ((todo != null) && (todo.equalsIgnoreCase("upload"))) {
                    Hashtable files = mrequest.getFiles();
                    if ((files != null) && (!files.isEmpty())) {
                        java.text.SimpleDateFormat formato = new java.text.SimpleDateFormat("yyMMddHHmmss");
                        String archivo = ((UploadFile) mrequest.getFiles().get("uploadfile")).getFileName();
                        int posicionPunto = archivo.indexOf(".");
                        String nombreImagen = archivo.substring(0, posicionPunto);
                        String extension = archivo.substring(posicionPunto);
                        nombreImagen = nombreImagen + formato.format(new java.util.Date());
                        nombreImagen = nombreImagen + extension;
                        ((UploadFile) mrequest.getFiles().get("uploadfile")).setFileName(nombreImagen);
                        UploadFile file = (UploadFile) files.get("uploadfile");
                        if (file != null) {
                            out.println("El archivo: " + file.getFileName() + " se subio correctamente");
                           
                            ruta = direccion + "/" + nombreImagen;
                           
                            nombreimagen = nombreImagen;
                           
                        }
                        upBean.store(mrequest, "uploadfile");
                    } else {
                        out.println("Archivos no subidos");
                    }
                } else {
                    out.println("<BR> todo=" + todo);
                }
            }
        %>
        <div class="container">    
            <table border="0" cellpadding="2" cellspacing="2">
                <tbody>
                    <tr>
                        <td>Archivo:</td>

                        <td>   <span class="file-input btn btn-primary btn-file">
                                <input type="file" name="uploadfile" id="files"/>
                             
                                
                            </span>

                        </td>

                <output id="list"></output>

                <script>
                    function archivo(evt) {
                        var files = evt.target.files; // FileList object

                        // Obtenemos la imagen del campo "file".
                        for (var i = 0, f; f = files[i]; i++) {
                            //Solo admitimos imágenes.
                            if (!f.type.match('image.*')) {
                                continue;
                            }

                            var reader = new FileReader();

                            reader.onload = (function(theFile) {
                                return function(e) {
                                    // Insertamos la imagen
                                    document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="200px" title="', escape(theFile.name), '"/>'].join('');
                                };
                            })(f);

                            reader.readAsDataURL(f);
                        }
                    }

                    document.getElementById('files').addEventListener('change', archivo, false);
                </script>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="hidden" name="todo" value="upload"/>
                        <input type="submit" name="btnagregar" id="btnagregar"   value="Agregar" class="btn btn-default" />
                       
                           <input type="hidden"  value="<% out.print(nombreimagen); %>" id="hiddenfoto"/>
                           <input type="text"  value="<% out.print(nombreimagen); %>" id="h"/>
                              

                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <script type='text/javascript' src='js/JavaScriptSecretaria.js'></script>
         <input type="submit" name="btnaceptar" id="btnaceptar"   value="Aceptar" class="btn btn-default" />
    </form>
                                <script src="js/subirfoto.js" type="text/javascript"></script>
    </body>
</html>
