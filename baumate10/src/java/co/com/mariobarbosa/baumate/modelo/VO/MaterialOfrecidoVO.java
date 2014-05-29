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
public class MaterialOfrecidoVO {
    
    public int idmaterialofrecido;
    public materialesVO idmaterial;
    public double costo;
    public ProveedoresVO idproveedor;

    public int getIdmaterialofrecido() {
        return idmaterialofrecido;
    }

    public void setIdmaterialofrecido(int idmaterialofrecido) {
        this.idmaterialofrecido = idmaterialofrecido;
    }

    public materialesVO getIdmaterial() {
        return idmaterial;
    }

    public void setIdmaterial(materialesVO idmaterial) {
        this.idmaterial = idmaterial;
    }

    public double getCosto() {
        return costo;
    }

    public void setCosto(double costo) {
        this.costo = costo;
    }

    public ProveedoresVO getIdproveedor() {
        return idproveedor;
    }

    public void setIdproveedor(ProveedoresVO idproveedor) {
        this.idproveedor = idproveedor;
    }
    
    
    
    
}
