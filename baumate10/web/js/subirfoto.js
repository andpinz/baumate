(function($) {
    $('#btnaceptar').on('click',setCookie);
    $('#btnenviar').on('click', getCookie);
    $('#subirfoto').on('click', OpenPopup);
    $('#recuperarfoto').on('click', recuperarfoto);
    	var bandera = false;
function cerrarse(){
        if (getCookie() != "" ) {
          
            window.close()
        }
    }
function recuperarfoto(){
    var fotico = $('#divFotico');
     $("#respuesta").val(getCookie());
       fotico.html('');
      var img = $('<img>').attr('src',getCookie());
                    img.attr('height','200px')
                    fotico.append(img);
}

    function OpenPopup()
{
    //window.onbeforeunload=ClosePopup;
    ref = window.open("SubirFoto.jsp",
        "_blank",'status=no, scrollbars=yes,top=' + (( screen.AvailHeight/2)-260) + ', left=' + ((screen.AvailWidth/2)-400)+ ', height=400, width=400, resizable' );
    //ref.close();

    if(ref.attachEvent) {
        ref.attachEvent("onunload", ClosePopup);
    } else {
        if(ref.addEventListener) {
                if (bandera == true){
            ref.addEventListener("unload", ClosePopup, false);}
        } else {
            ref.onunload = ClosePopup;
        }
    }

}

function ClosePopup()
{       
    alert('Cerramos el Popup');
     $("#respuesta").val(getCookie());
        alert("el valor de la cookie la tomo insertar proveedores");
    }
    
// Esta es la funcio'n que usa Heinle para recuperar una cookie
// name - nombre de la cookie deseada
// devuelve un string conteniendo el valor de la cookie especificada o null si la cookie no existe
function getCookie(cname)
{
var name = cname;
var ca = document.cookie.split(';');
for(var i=0; i<ca.length;) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  var valorcookie= c.split("=");
            return  valorcookie[1];
        
}
return "";
}

var outlast = getCookie();

// Esta es una adaptacio'n de la funcio'n de Dorcht para colar una cookie
// name - nombre de la cookie
// value - valor de la cookie
// [expires] - fecha de caducidad de la cookie (por defecto, el final de la sesio'n)
// [path] - camino para el cual la cookie es va'lida (por defecto, el camino del documento que hace la llamada)
// [domain] - dominio para el cual la cookie es va'lida (por defecto, el dominio del documento que hace la llamada)
// [secure] - valor booleano que indica si la trasnmisio'n de la cookie requiere una transmisio'n segura
// al especificar el valor null, el argumento tomara' su valor por defecto

function setCookie(name, value ,exdays) {
    bandera = true;
        if (bandera== true){
    name="cookie ruta de la foto";
    value= "imagenesBD/" + $('#hiddenfoto').val();
            var d = new Date();
d.setTime(d.getTime()+(exdays*24*60*60*1000));
var expires = "expires="+d.toGMTString();
  document.cookie = name + "=" + unescape(value)+"; " + expires ;
        alert("cookie creada!");
            cerrarse();
    }

}
})(jQuery)


