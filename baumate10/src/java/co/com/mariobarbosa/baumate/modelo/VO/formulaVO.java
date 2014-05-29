/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.VO;

/**
 *
 * @author sena
 */
public class formulaVO {
    
    private int idformula;
    private materialesVO idmaterial;
    private TiposPisosVO idtipopiso;
    private int cantidad;

    /**
     * @return the idformula
     */
    public int getIdformula() {
        return idformula;
    }

    /**
     * @param idformula the idformula to set
     */
    public void setIdformula(int idformula) {
        this.idformula = idformula;
    }

    /**
     * @return the idmaterial
     */
    public materialesVO getIdmaterial() {
        return idmaterial;
    }

    /**
     * @param idmaterial the idmaterial to set
     */
    public void setIdmaterial(materialesVO idmaterial) {
        this.idmaterial = idmaterial;
    }

    /**
     * @return the idtipopiso
     */
    public TiposPisosVO getIdtipopiso() {
        return idtipopiso;
    }

    /**
     * @param idtipopiso the idtipopiso to set
     */
    public void setIdtipopiso(TiposPisosVO idtipopiso) {
        this.idtipopiso = idtipopiso;
    }

    /**
     * @return the cantidad
     */
    public int getCantidad() {
        return cantidad;
    }

    /**
     * @param cantidad the cantidad to set
     */
    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

   
}
