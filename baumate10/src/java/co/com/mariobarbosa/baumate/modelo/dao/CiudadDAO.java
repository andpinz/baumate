/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import co.com.mariobarbosa.baumate.modelo.VO.CiudadVO;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author jose
 */
public class CiudadDAO extends Conexion{
    public CiudadVO consultar(int idciudad){
        CiudadVO ciudad = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select * from ciudad where idciudad=?");
            sentencia.setInt(1, idciudad);
            ResultSet resp = sentencia.executeQuery();
            if (resp.next()) {
                ciudad = new CiudadVO();
                ciudad.setIdciudad(idciudad);
                ciudad.setNombreciudad(resp.getString("nombreciudad"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return ciudad;
        }
    }
    public ArrayList<CiudadVO> consultar(){
        ArrayList<CiudadVO> ciudades = new ArrayList<CiudadVO>();
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select * from ciudad");
            ResultSet resp = sentencia.executeQuery();
            while (resp.next()) {
                CiudadVO ciudad = new CiudadVO();
                ciudad.setIdciudad(resp.getInt("idciudad"));
                ciudad.setNombreciudad(resp.getString("nombreciudad"));
                ciudades.add(ciudad);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return ciudades;
        }
    }
}
