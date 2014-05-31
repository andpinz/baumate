function ControlCookies() {
    this.guardar = function(nombre, valor) {
        var name = nombre;
        var value = valor;
        document.cookie = name + "=" + escape(value) + "; ";
    }
    this.eliminar = function(nombre) {
        var name = nombre;
        var value = "";
        document.cookie = name + "=" + escape(value) + "; expires=Thu, 01-Jan-70 00:00:01 GMT ";

    }
    this.consultar = function(nombre) {
        var name = nombre;
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++)
        {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                var valorcookie = c.split("=");
                return  valorcookie[1];
            }
            //alert("cooki obtenida!");
        }
        return "";
    }
    this.consultarRefinado = function(nombre) {
        var str = this.consultar(nombre);
        if (str != "" && str != undefined) {
            str = str.replace("=", "");
        }
        return str;
    }
}