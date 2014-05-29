/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.VO;

/**
 *
 * @author jose
 */
public class SolicitudAsignadaVO {
    
    private SolicitudVO idsolicitud;
    private materialesVO idmaterial;
    private int cantidadrecibida;
    private int cantidadsolicitada;
    private double precio;
    private String observacion;
    private int estado;

    /**
     * @return the idsolicitud
     */
    public SolicitudVO getIdsolicitud() {
        return idsolicitud;
    }

    /**
     * @param idsolicitud the idsolicitud to set
     */
    public void setIdsolicitud(SolicitudVO idsolicitud) {
        this.idsolicitud = idsolicitud;
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
     * @return the cantidadrecibida
     */
    public int getCantidadrecibida() {
        return cantidadrecibida;
    }

    /**
     * @param cantidadrecibida the cantidadrecibida to set
     */
    public void setCantidadrecibida(int cantidadrecibida) {
        this.cantidadrecibida = cantidadrecibida;
    }

    /**
     * @return the cantidadsolicitada
     */
    public int getCantidadsolicitada() {
        return cantidadsolicitada;
    }

    /**
     * @param cantidadsolicitada the cantidadsolicitada to set
     */
    public void setCantidadsolicitada(int cantidadsolicitada) {
        this.cantidadsolicitada = cantidadsolicitada;
    }

    /**
     * @return the precio
     */
    public double getPrecio() {
        return precio;
    }

    /**
     * @param precio the precio to set
     */
    public void setPrecio(double precio) {
        this.precio = precio;
    }

    /**
     * @return the observacion
     */
    public String getObservacion() {
        return observacion;
    }

    /**
     * @param observacion the observacion to set
     */
    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    /**
     * @return the estado
     */
    public int getEstado() {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(int estado) {
        this.estado = estado;
    }
}
