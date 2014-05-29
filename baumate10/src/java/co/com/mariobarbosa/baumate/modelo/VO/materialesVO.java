/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.VO;

/**
 *
 * @author hectorbohorquez
 */
public class materialesVO {
    //id del material
    private int idmateriales;
    //Nombre del material
    private String nombre;
    //id de la unidad de medida del material
    private unidadmedidaVO idunidadmedida;
    //cantidad total del material
    private int cantidadtotal;
    //tipo del material
    private tipomaterialVO idtipomaterial;

    public int getIdmateriales() {
        return idmateriales;
    }

    public void setIdmateriales(int idmateriales) {
        this.idmateriales = idmateriales;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public unidadmedidaVO getIdunidadmedida() {
        return idunidadmedida;
    }

    public void setIdunidadmedida(unidadmedidaVO idunidadmedida) {
        this.idunidadmedida = idunidadmedida;
    }

    public int getCantidadtotal() {
        return cantidadtotal;
    }

    public void setCantidadtotal(int cantidadtotal) {
        this.cantidadtotal = cantidadtotal;
    }

    public tipomaterialVO getIdtipomaterial() {
        return idtipomaterial;
    }

    public void setIdtipomaterial(tipomaterialVO idtipomaterial) {
        this.idtipomaterial = idtipomaterial;
    }
    
}
