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
                    $('#rol').text("Secretaria"); 
                document.getElementById('inicio').href="secretaria.jsp";
                document.getElementsByTagName("li")[5].style.display='none';
                document.getElementsByTagName("li")[6].style.display='none';
                document.getElementsByTagName("li")[7].style.display='none';
                document.getElementsByTagName("li")[10].style.display='none';
                document.getElementsByTagName("li")[11].style.display='none';
                document.getElementsByTagName("li")[12].style.display='none';
                document.getElementsByTagName("li")[16].style.display='none';
                document.getElementsByTagName("li")[17].style.display='none';
                document.getElementsByTagName("li")[18].style.display='none';
                document.getElementsByTagName("li")[27].style.display='none';
                document.getElementsByTagName("li")[28].style.display='none';
                document.getElementsByTagName("li")[29].style.display='none';
                document.getElementsByTagName("li")[33].style.display='none';
                document.getElementsByTagName("li")[34].style.display='none';
                document.getElementsByTagName("li")[35].style.display='none';
                document.getElementsByTagName("li")[38].style.display='none';
                document.getElementsByTagName("li")[39].style.display='none';
                document.getElementsByTagName("li")[40].style.display='none';
                document.getElementsByTagName("li")[43].style.display='none';
                document.getElementsByTagName("li")[44].style.display='none';
                document.getElementsByTagName("li")[45].style.display='none';
                document.getElementsByTagName("li")[65].style.display='none';
                document.getElementsByTagName("li")[66].style.display='none';
                document.getElementsByTagName("li")[67].style.display='none';
                document.getElementsByTagName("li")[70].style.display='none';
                document.getElementsByTagName("li")[71].style.display='none';
                document.getElementsByTagName("li")[72].style.display='none';
                document.getElementsByTagName("li")[75].style.display='none';
                document.getElementsByTagName("li")[76].style.display='none';
                document.getElementsByTagName("li")[77].style.display='none';
                document.getElementsByTagName("li")[80].style.display='none';
                document.getElementsByTagName("li")[81].style.display='none';
                document.getElementsByTagName("li")[82].style.display='none';
                document.getElementsByTagName("li")[88].style.display='none';
                document.getElementsByTagName("li")[85].style.display='none';
                document.getElementsByTagName("li")[86].style.display='none';
                document.getElementsByTagName("li")[87].style.display='none';
                document.getElementsByTagName("li")[91].style.display='none';
                document.getElementsByTagName("li")[92].style.display='none';
                document.getElementsByTagName("li")[93].style.display='none';
            }else{
                    $('#rol').text("Administrador"); 
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


