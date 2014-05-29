/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.VO;

import java.util.ArrayList;

/**
 *
 * @author hectorbohorquez
 */
public class unidadmedidaVO {
    
    private int idunidadmedida;
    private String unidadmedida;
    private ArrayList<materialesVO> materiales;
    
    
    public int getIdunidadmedida() {
        return idunidadmedida;
    }

    public void setIdunidadmedida(int idunidadmedida) {
        this.idunidadmedida = idunidadmedida;
    }

    public String getUnidadmedida() {
        return unidadmedida;
    }

    public void setUnidadmedida(String unidadmedida) {
        this.unidadmedida = unidadmedida;
    }

    public ArrayList<materialesVO> getMateriales() {
        return materiales;
    }

    public void setMateriales(ArrayList<materialesVO> materiales) {
        this.materiales = materiales;
    }
    
}
