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
public class tipomaterialVO {
    private int idtipomaterial;
    private String nombre;
    private ArrayList<materialesVO> materiales;

    public int getIdtipomaterial() {
        return idtipomaterial;
    }

    public void setIdtipomaterial(int idtipomaterial) {
        this.idtipomaterial = idtipomaterial;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public ArrayList<materialesVO> getMateriales() {
        return materiales;
    }

    public void setMateriales(ArrayList<materialesVO> materiales) {
        this.materiales = materiales;
    }
    
    
    
}
