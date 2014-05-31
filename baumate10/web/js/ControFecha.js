function ControlFecha(){
    this.hoy = function(){
        var fecha = new Date();
        return fecha;
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