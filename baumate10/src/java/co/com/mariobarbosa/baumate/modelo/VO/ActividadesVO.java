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
public class ActividadesVO {
    private int codigo;
    private String descripcion;
    private int area;
    private ProyectoVO idproyecto;
    private TiposPisosVO idtipopiso;

    /**
     * @return the codigo
     */
    public int getCodigo() {
        return codigo;
    }

    /**
     * @param codigo the codigo to set
     */
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    /**
     * @return the descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * @param descripcion the descripcion to set
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    /**
     * @return the area
     */
    public int getArea() {
        return area;
    }

    /**
     * @param area the area to set
     */
    public void setArea(int area) {
        this.area = area;
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

}
