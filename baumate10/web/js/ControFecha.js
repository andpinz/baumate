function ControlFecha(){
    this.hoy = function(){
        var fecha = new Date();
        var str = fecha.getFullYear() + "-" + (fecha.getMonth()<10 ? '0' : '') + (fecha.getMonth() +1) + "-" + (fecha.getDate()<10 ? '0' : '') + fecha.getDate();
        return str;
    }
    this.comparar = function(mayor,menor){
        var dateMayor = new Date(mayor);
        var dateMenor = new Date(menor);
        if (dateMayor >= dateMenor) {
            return true;
        }else{
            return false;
        }
    }
}