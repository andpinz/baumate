(function($){
    seguridad();
//    ingresoNombre();
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
                insertarRol();
                document.getElementById('inicio').href="secretaria.jsp";
                //Empleado
                document.getElementsByTagName("li")[5].style.display='none';
                document.getElementsByTagName("li")[6].style.display='none';
                document.getElementsByTagName("li")[7].style.display='none';
                //Usuario
                document.getElementsByTagName("li")[10].style.display='none';
                document.getElementsByTagName("li")[11].style.display='none';
                document.getElementsByTagName("li")[12].style.display='none';
                //Cliente
                document.getElementsByTagName("li")[16].style.display='none';
                document.getElementsByTagName("li")[17].style.display='none';
                document.getElementsByTagName("li")[18].style.display='none';
                //Actividad
                document.getElementsByTagName("li")[27].style.display='none';
                document.getElementsByTagName("li")[28].style.display='none';
                document.getElementsByTagName("li")[29].style.display='none';
                //Orden de Compra
                document.getElementsByTagName("li")[33].style.display='none';
                document.getElementsByTagName("li")[34].style.display='none';
                document.getElementsByTagName("li")[35].style.display='none';
                //Proyecto
                document.getElementsByTagName("li")[38].style.display='none';
                document.getElementsByTagName("li")[39].style.display='none';
                document.getElementsByTagName("li")[40].style.display='none';
                //Solicitud
                document.getElementsByTagName("li")[43].style.display='none';
                document.getElementsByTagName("li")[44].style.display='none';
                document.getElementsByTagName("li")[45].style.display='none';
                //Venta
                document.getElementsByTagName("li")[48].style.display='none';
                document.getElementsByTagName("li")[49].style.display='none';
                document.getElementsByTagName("li")[50].style.display='none';
                //Cargo
                document.getElementsByTagName("li")[75].style.display='none';
                document.getElementsByTagName("li")[76].style.display='none';
                document.getElementsByTagName("li")[77].style.display='none';
                //Ciudad
                document.getElementsByTagName("li")[80].style.display='none';
                document.getElementsByTagName("li")[81].style.display='none';
                document.getElementsByTagName("li")[82].style.display='none';
                //Rol
                document.getElementsByTagName("li")[85].style.display='none';
                document.getElementsByTagName("li")[86].style.display='none';
                document.getElementsByTagName("li")[87].style.display='none';
//                //Formula
//                document.getElementsByTagName("li")[85].style.display='none';
//                document.getElementsByTagName("li")[86].style.display='none';
//                document.getElementsByTagName("li")[87].style.display='none';
                //Tipo de Identificacion
                document.getElementsByTagName("li")[90].style.display='none';
                document.getElementsByTagName("li")[91].style.display='none';
                document.getElementsByTagName("li")[92].style.display='none';
                //Tipo de Piso
                document.getElementsByTagName("li")[95].style.display='none';
                document.getElementsByTagName("li")[96].style.display='none';
                document.getElementsByTagName("li")[97].style.display='none';
                //Unidad de Medida
                document.getElementsByTagName("li")[100].style.display='none';
                document.getElementsByTagName("li")[101].style.display='none';
                document.getElementsByTagName("li")[102].style.display='none';
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
        var contrasena = prompt ('Bloqueo de Seguridad: Por favor introdusca su contraseña','');  
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
                alert('No se ha podido cerrar la sesion: Intente de nuevo'); 
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


