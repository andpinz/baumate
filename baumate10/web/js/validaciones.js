function validadores() {

    this.validarletras = function() {

        var text = $(this).attr('lbl');
        var valo = $(this).val();
        if (!/^[a-z A-Z]*$/.test(valo)) {

            $('#' + text).text;
            alertify.error("Este campo solo puede contener letras");


            return false;
        } else {
            $('#' + text).text("");
            return true;
        }
    }
    this.caracteresespeciales = function() {
        var camp = $(this).attr('lbl');
        var valor = $(this).val();
        if (!/^[0-9 a-z A-z]*$/.test(valor)) {
            $('#' + camp).text;
            alertify.error("Este campo no puede contener caracteres especiales como: (*,.-+/%)");

            return false;
        } else {
            $('#' + camp).text("");
            return true;

        }
    }
     this.caracterecamposvacios = function() {
        var camp = $(this).attr('lbl');
        var valor = $(this).val();
        if (valor === null || valor.length === 0 ||
                /^\s+$/.test(valor)) {
            $('#' + camp).text;
            alertify.error("El campo no puede estar vacìo");
        }
        else if (!/^[0-9 a-z A-z]*$/.test(valor)) {
            $('#' + camp).text;
            alertify.log("Este campo no puede contener caracteres especiales como: (*,.-+/%)");
            return false;
        } else {
            $('#' + camp).text("");
            return true;
        }
    }
    this.validarcamposvacios = function() {
        var camvac = $(this).attr('lbl');
        var valor = $(this).val();
        if (valor === null || valor.length === 0 ||
                /^\s+$/.test(valor)) {
            $('#' + camvac).text;
            alertify.error("El campo no puede estar vacìo");
            return false;
        } else {
            $('#' + camvac).text("");
            return true;

        }
    }
    this.validarletrascamposvacios = function () {
        var letrasvacios = $(this).attr('lbl');
        var valor = $(this).val();
        if (valor === null || valor.length === 0 ||
                /^\s+$/.test(valor)) {
            $('#' + letrasvacios).text;
            alertify.error("El campo no puede estar vacìo");
        }
        else if (!/^[a-z A-Z]*$/.test(valor)) {
            $('#' + letrasvacios).text;
            alertify.error("Este campo solo puede contener letras");
            return false;
        } else {
            $('#' + letrasvacios).text("");
            return true;
        }
    }
   
    this.validarnumeros = function () {
        var numerosvacios = $(this).attr('lbl');
        var valor = $(this).val();
        if (!/^(\d{2}\.)?(\d+\.?)+(,\d{2})?$/.test(valor)) {
            $('#' + numerosvacios).text;
            alertify.error("Este campos solo acepta nùmeros enteros con dos decimales");

         return false;
        } else {
            $('#' + numerosvacios).text("");
            return true;

        }
    }
}
function validaciones() {
    this.fntValidar = function(formul) {
        var resp = true;
        formul.each(function(i, item) {
            var res = true;
            if (item.tip == 1) {
                res = caracteresespeciales($(('#' + item.nom)).val(),item.lbl);
            } else if (item.tip == 2) {
               res = validarletras($(('#' + item.nom)).val(),item.lbl);
            } else if (item.tip == 3) {
                res = validarcamposvacios($(('#' + item.nom)).val(),item.lbl);
            } else if (item.tip == 4) {
                res = validarletrascamposvacios($(('#' + item.nom)).val(),item.lbl);
            } else if (item.tip == 5) {
                res = validarnumeros($(('#' + item.nom)).val(),item.lbl);
            }else if (item.tip == 6) {
                res = caracterecamposvacios($(('#' + item.nom)).val(),item.lbl);
            }
            if (!res) {
                resp = false;
            }
        });
        return resp;
    }
    function validarletras(valo,textlbl) {
        var text = textlbl;
        if (!/^[a-z A-Z]*$/.test(valo)) {
            $('#' + text).text;
            alertify.error("Este campo solo puede contener letras");
            return false;
        } else {
            $('#' + text).text("");
            return true;
        }
    }
    
    function validarcamposvacios(valor,camvac) {
        if (valor === null || valor.length === 0 ||
                /^\s+$/.test(valor)) {
            $('#' + camvac).text;
            alertify.error("El campo no puede estar vacìo");
            return false;
        } else {
            $('#' + camvac).text("");
            return true;
        }
    }
    function validarletrascamposvacios(valor,letrasvacios) {
        if (valor === null || valor.length === 0 ||
                /^\s+$/.test(valor)) {
            $('#' + letrasvacios).text("El campo no puede estar vacìo");
        }
        else if (!/^[a-z A-Z]*$/.test(valor)) {
            $('#' + letrasvacios).text("Este campo solo puede contener letras");
            return false;
        } else {
            $('#' + letrasvacios).text("");
            return true;
        }
    }
    function validarnumeros(valor, numerosvacios) {
        if (!/^(\d{2}\.)?(\d+\.?)+(,\d{2})?$/.test(valor)) {
            $('#' + numerosvacios).text("Este campos solo acepta nùmeros enteros, con dos decimales");
            return false;
        } else {
            $('#' + numerosvacios).text("");
            return true;
        }
    }
    function caracteresespeciales(valor, numeros) {
        if (!/^[0-9]*$/.test(valor)) {
            $('#' + numeros).text("Este campo no puede contener caracteres especiales como: (*/%?=!+-&)");

            return false;
        } else {
            $('#' + numeros).text("");
            return true;
        }
    }
    function caracterecamposvacios(valor, numeros) {
        if (valor === null || valor.length === 0 ||
                /^\s+$/.test(valor)) {
            $('#' + numeros).text("El campo no puede estar vacìo");
        }
        else if (!/^[0-9 a-z A-z]*$/.test(valor)) {
            $('#' + numeros).text("Este campo no puede contener caracteres especiales como: (*,.-+/%)");

            return false;
        } else {
            $('#' + numeros).text("");
            return true;

        }
    }
}    