/**
 *
 * @author David Andres Gomez Zamora
 * 17-03-2014
 */
(function($){
    $('#iniciarSesion').on('click',inicioSesion);
    
    // Function inicioSesion: valida los campos escritos en las cajas de texto con la informacio nde la Base de Datos y su rol para el redireccionamiento al lado del Cliente
    function inicioSesion(){
        var validacion=1;
        var correo = $('#correo').val();
        var contrasena = $('#contrasena').val();
        if (correo==""&&contrasena=="") {
            alert('Por favor introduzca un correo y contraseña para poder iniciar sesion'); 
            validacion=0;
                }else if(contrasena==""){
                    alert('Por favor introduzca una contraseña'); 
                    validacion=0;
                }else if(correo==""){
                    alert('Por favor introduzca un correo'); 
                    validacion=0;
                }
                if(validacion==1){
        $.ajax({
            'url':'iniciarsesion',
            'data':{
                'correo':correo,
                'contrasena':contrasena
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if(data==0){
                    alert('Datos incorrectos: Por favor verifique los datos');
                }else if (data==3){
                    alert('Usuario Incativo: El usuario se encunetra incativo, por favor comuniquese con el administrador');
                }else if (data==1){
                    setTimeout("location.href='administrador.jsp'", 1000);
                }else if (data==2){
                    setTimeout("location.href='secretaria.jsp'", 1000);
                }
                }
        });              
    }
    }
    
    function error(error){
        console.error(error);
    }
})(jQuery);