/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.formulaVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import co.com.mariobarbosa.baumate.modelo.VO.materialesVO;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author hectorbohorquez
 */
public class materialesDAO extends Conexion{
    
    public int insertarMaterial (materialesVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("insert into materiales (nombre,idunidadmedida,cantidadtotal,tipo)"
            + "values (?,?,?,?)");
            sentenciasql.setString(1, data.getNombre());
            sentenciasql.setInt(2, data.getIdunidadmedida().getIdunidadmedida());
            sentenciasql.setInt(3, data.getCantidadtotal());
            sentenciasql.setInt(4, data.getIdtipomaterial().getIdtipomaterial());
            
            respuesta = sentenciasql.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally{
            desconectar();
            return respuesta;
        }
    }
    
    public int eliminarMaterial (int id){
        int respuesta = -1;
        
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("delete from materiales where idmateriales=?");
            sentenciasql.setInt(1, id);
            respuesta = sentenciasql.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            desconectar();
            return respuesta;
        }
    }
    
    public ArrayList<materialesVO> ListarMaterial(){
        ArrayList<materialesVO> respuesta = new ArrayList<materialesVO>();
        materialesVO material = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idmateriales,nombre,idunidadmedida,cantidadtotal,tipo FROM materiales");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                material = new materialesVO();
                material.setIdmateriales(res.getInt("idmateriales"));
                material.setNombre(res.getString("nombre"));
                material.setIdunidadmedida(new UnidadmedidaDAO().consutar(res.getInt("idunidadmedida")));
                material.setCantidadtotal(res.getInt("cantidadtotal"));
                material.setIdtipomaterial(new tipomaterialDAO().consultartm(res.getInt("tipo")));
                respuesta.add(material);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
  
   public materialesVO consultar(int id){
        materialesVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idmateriales,nombre,idunidadmedida,cantidadtotal,tipo from materiales where idmateriales=?");
            sentencia.setInt(1, id);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                respuesta = new materialesVO();
                respuesta.setIdmateriales(res.getInt("idmateriales"));
                respuesta.setNombre(res.getString("nombre"));
                respuesta.setIdunidadmedida(new UnidadmedidaDAO().consutar(res.getInt("idunidadmedida")));
                respuesta.setCantidadtotal(res.getInt("cantidadtotal"));
                respuesta.setIdtipomaterial(new tipomaterialDAO().consultartm(res.getInt("tipo")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
}
   
    public int modificarMaterial(materialesVO data){
        int respuesta = -1;
            try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update materiales set nombre=?, idunidadmedida=?, cantidadtotal=?, tipo=?"
                    + " where idmateriales=?");
            sentencia.setString(1, data.getNombre());
            sentencia.setInt(2, data.getIdunidadmedida().getIdunidadmedida());
            sentencia.setInt(3, data.getCantidadtotal());
            sentencia.setInt(4, data.getIdtipomaterial().getIdtipomaterial());
            sentencia.setInt(5, data.getIdmateriales());
            
            respuesta=sentencia.executeUpdate();
            
        } catch (Exception e) {
        e.printStackTrace();
        }finally{
                desconectar();
                return respuesta;
            }
    }
    
    public ArrayList<materialesVO> buscarmaterial(String nombre){
        ArrayList<materialesVO> buscarmat = new ArrayList<materialesVO>();
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("select * from materiales where nombre=? ");
            sentenciasql.setString(1, nombre);
            ResultSet resultado = sentenciasql.executeQuery();
            
            while (resultado.next()){
                int idm = resultado.getInt("idmateriales");
                String nombres = resultado.getString("nombre");
                int idum = resultado.getInt("idunidadmedida");
                int cantidad = resultado.getInt("cantidadtotal");
                int tipo = resultado.getInt("tipo");
                
                materialesVO data = new materialesVO();
                
                data.setIdmateriales(idm);
                data.setNombre(nombres);
                data.setIdunidadmedida(new UnidadmedidaDAO().consutar(idum));
                data.setCantidadtotal(cantidad);
                data.setIdtipomaterial(new tipomaterialDAO().consultartm(tipo));
                
                buscarmat.add(data);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return buscarmat;
        }
    }
    
}

