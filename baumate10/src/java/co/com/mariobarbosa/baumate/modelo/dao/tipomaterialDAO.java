/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import co.com.mariobarbosa.baumate.modelo.VO.materialesVO;
import co.com.mariobarbosa.baumate.modelo.VO.tipomaterialVO;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author hectorbohorquez
 */
public class tipomaterialDAO extends Conexion{
    
    /*
    Metodos consultar para llenar la lista desplegable de "tipo material" en los formularios 
    los cuales requieren ID de tipo material en la tabla MATERIALES
    */
    
    public tipomaterialVO consutar(int idtipomaterial){
        tipomaterialVO tipomaterial = null;
        
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("select * from tipomaterial where idtipomaterial=?");
            sentenciasql.setInt(1, idtipomaterial);
            ResultSet resp = sentenciasql.executeQuery();
            if (resp.next()) {
                tipomaterial = new tipomaterialVO();
                tipomaterial.setIdtipomaterial(idtipomaterial);
                tipomaterial.setNombre(resp.getString("nombre"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return tipomaterial;
        }
    }
    
    public ArrayList<tipomaterialVO> consultar(){
        ArrayList<tipomaterialVO> tipomateriales = new ArrayList<tipomaterialVO>();
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("select * from tipomaterial");
            ResultSet resp = sentenciasql.executeQuery();
            while (resp.next()) {                
                tipomaterialVO tipomaterial = new tipomaterialVO();
                tipomaterial.setIdtipomaterial(resp.getInt("idtipomaterial"));
                tipomaterial.setNombre(resp.getString("nombre"));
                tipomateriales.add(tipomaterial);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return tipomateriales;
        } 
    }
    
    /*
    Metodos completos (CRUD) de la tabla TIPO MATERIAL 
    */
    
//031930sgat
            
    public int insertarTipoMaterial (tipomaterialVO data){
        
        int respuesta = -1;
        
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("insert into tipomaterial (nombre)"
            + "values (?)");
            
            sentenciasql.setString(1, data.getNombre());
            
            respuesta = sentenciasql.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally{
            desconectar();
            return respuesta;
        }
    }
       
    public int eliminarTipoMaterial (int id){
        int respuesta = -1;
        
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("delete from tipomaterial where idtipomaterial=?");
            sentenciasql.setInt(1, id);
            respuesta = sentenciasql.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            desconectar();
            return respuesta;
        }
    }   
    
    public int modificarTipoMaterial(tipomaterialVO data){
        
        int respuesta = -1;
            try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update tipomaterial set nombre=?"
                    + " where idtipomaterial=?");
            sentencia.setString(1, data.getNombre());
            sentencia.setInt(2, data.getIdtipomaterial());            
            respuesta=sentencia.executeUpdate();
            
        } catch (Exception e) {
        e.printStackTrace();
        }finally{
                desconectar();
                return respuesta;
            }
        
    }
    
    public ArrayList<tipomaterialVO> ListarTipoMaterial(){
        ArrayList<tipomaterialVO> respuesta = new ArrayList<tipomaterialVO>();
        tipomaterialVO material = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM tipomaterial");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                material = new tipomaterialVO();
                material.setIdtipomaterial(res.getInt("idtipomaterial"));
                material.setNombre(res.getString("nombre"));
                respuesta.add(material);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }    
       
    public tipomaterialVO consultartm(int id){
        tipomaterialVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * from tipomaterial where idtipomaterial=?");
            sentencia.setInt(1, id);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                respuesta = new tipomaterialVO();
                respuesta.setIdtipomaterial(res.getInt("idtipomaterial"));
                respuesta.setNombre(res.getString("nombre"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
}
}

