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
public class SolicitudVO {
    private int idsolicitud;
    private String fechapedido;
    private String fecharecibido;
    private ProyectoVO idproyecto;
    private ProveedoresVO idproveedor;
    private int estado;

    /**
     * @return the idsolicitud
     */
    public int getIdsolicitud() {
        return idsolicitud;
    }

    /**
     * @param idsolicitud the idsolicitud to set
     */
    public void setIdsolicitud(int idsolicitud) {
        this.idsolicitud = idsolicitud;
    }

    /**
     * @return the fechapedido
     */
    public String getFechapedido() {
        return fechapedido;
    }

    /**
     * @param fechapedido the fechapedido to set
     */
    public void setFechapedido(String fechapedido) {
        this.fechapedido = fechapedido;
    }

    /**
     * @return the fecharecibido
     */
    public String getFecharecibido() {
        return fecharecibido;
    }

    /**
     * @param fecharecibido the fecharecibido to set
     */
    public void setFecharecibido(String fecharecibido) {
        this.fecharecibido = fecharecibido;
    }

    /**
     * @return the idproyecto
     */
    public ProyectoVO getIdproyecto() {
        return idproyecto;
    }

    /**
     * @param idproyecto the idproyecto to set
     */
    public void setIdproyecto(ProyectoVO idproyecto) {
        this.idproyecto = idproyecto;
    }

    /**
     * @return the idproveedor
     */
    public ProveedoresVO getIdproveedor() {
        return idproveedor;
    }

    /**
     * @param idproveedor the idproveedor to set
     */
    public void setIdproveedor(ProveedoresVO idproveedor) {
        this.idproveedor = idproveedor;
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
