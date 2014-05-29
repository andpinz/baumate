(function($){
        seguridad();
    $('#cerrarSesion').on('click',cerrarSesion);
    
function seguridad(){
    $.ajax({
        'url':'verificarseguridad',
        'type':'POST',
        'error':error,
        'success':function(data){
            if(data==0){
                setTimeout("location.href='index.jsp'", 0);
            }else if(data==2){
                setTimeout("location.href='secretaria.jsp'", 0);
            }else{
                insertarRol();
            }
        }  
    });
}

    function insertarRol(){
        $.ajax({
            'url':'insertarrol',
            'type':'POST',
            'error':error,
            'success': function(data) {
                data = $(JSON.parse(data))
                data.each(function(i,item){
                $('#rol').text(item.rol.nombrerol);
                });
            }
        });
    }


var tiempoincativo = 300; 
var Reiniciocontador = 0;
document.onclick = function() {
    Reiniciocontador = 0;
};
document.onmousemove = function() {
    Reiniciocontador = 0;
};
document.onkeypress = function() {
    Reiniciocontador = 0;
};

window.setInterval(Bloquear, 1000);


function Bloquear() {
    Reiniciocontador++;
    var oPanel = document.getElementById("tiempoexpirado");
    if (oPanel)
        oPanel.innerHTML = (tiempoincativo - Reiniciocontador) + "";
    if (Reiniciocontador >= tiempoincativo) {
        bloqueoUsuario();}
}

function bloqueoUsuario(){
        var contrasena;
        alertify.prompt("Bloqueo de Seguridad: Por favor introdusca su contraseña",'');  
        $.ajax({
            'url':'bloqueousuario',
            'data':{
                'contrasena':contrasena
            },
            'type':'POST',
            'error':error,
            'success': function(data) {
                if(data==1){
             window.close();
               Reiniciocontador=0;
                }else{
               Reiniciocontador=0;
                    cerrarSesion();
                }
                }
        });              
    }

    function cerrarSesion(){
    $.ajax({
        'url':'cerrarsesion',
        'type':'POST',
        'error':error,
        'success':function(data){
            if(data!=0){
                alertify.error("No se ha podido cerrar la sesion: Intente de nuevo"); 
            }else{
                setTimeout("location.href='index.jsp'", 1000);
            }
        }  
    });
}
    
    function error(error){
        console.error(error);
    }
})(jQuery);