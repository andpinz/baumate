/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.VO;

import java.util.ArrayList;

/**
 *
 * @author jose
 */
public class CiudadVO {
    private int idciudad;
    private String nombreciudad;

    private ArrayList<ProyectoVO> proyectos;
    
    /**
     * @return the idciudad
     */
    public int getIdciudad() {
        return idciudad;
    }

    /**
     * @param idciudad the idciudad to set
     */
    public void setIdciudad(int idciudad) {
        this.idciudad = idciudad;
    }

    /**
     * @return the nombreciudad
     */
    public String getNombreciudad() {
        return nombreciudad;
    }

    /**
     * @param nombreciudad the nombreciudad to set
     */
    public void setNombreciudad(String nombreciudad) {
        this.nombreciudad = nombreciudad;
    }

    /**
     * @return the proyectos
     */
    public ArrayList<ProyectoVO> getProyectos() {
        return proyectos;
    }

    /**
     * @param proyectos the proyectos to set
     */
    public void setProyectos(ArrayList<ProyectoVO> proyectos) {
        this.proyectos = proyectos;
    }
}
