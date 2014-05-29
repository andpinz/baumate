/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.CargoVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author sena
 */
public class CargoDAO extends Conexion {
    
    public ArrayList<CargoVO> listar (String nombre){
        ArrayList<CargoVO> lista = new ArrayList<CargoVO>();
        CargoVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia=conectar.prepareStatement("SELECT * FROM cargo where nombre like concat('%',?,'%') ");
            sentencia.setString(1,nombre);
            ResultSet resp=sentencia.executeQuery();
            
            while(resp.next()){
                
                tipo=new CargoVO();
                tipo.setIdcargo(resp.getInt("idCargo"));
                tipo.setNombre(resp.getString("nombre"));
                
                
                lista.add(tipo);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            return lista;
        }
     }
    
     public ArrayList<CargoVO> consultar(){
        ArrayList<CargoVO> cargos = new ArrayList<CargoVO>();
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select * from cargo");
            ResultSet resp = sentencia.executeQuery();
            while (resp.next()) {
                CargoVO cargo = new CargoVO();
                cargo.setIdcargo(resp.getInt("idCargo"));
                cargo.setNombre(resp.getString("nombre"));
                cargos.add(cargo);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return cargos;
        }
    }
     
       public CargoVO consultar(String idCargo){
        CargoVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM cargo where"
                    +" idCargo=?");
            
            sentencia.setString(1, idCargo);
           
            ResultSet resp = sentencia.executeQuery();
            if (resp.next()) {
                tipo = new CargoVO();
                tipo.setIdcargo(Integer.parseInt(idCargo));
                tipo.setNombre(resp.getString("nombre"));
                
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return tipo;
        }
    }
     
      public int insertar (CargoVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("INSERT INTO cargo(idCargo,nombre) VALUES (?,?)");
            
            
            sentencia.setInt(1, data.getIdcargo());
            sentencia.setString(2, data.getNombre());
           
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
      
       public int modificar (CargoVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update cargo set nombre=?"+" where idCargo=? ");
            
            
            sentencia.setString(1, data.getNombre());
           
            sentencia.setInt(2, data.getIdcargo());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
       
       public int eliminar (String idCargo){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("delete FROM cargo where idCargo = ?");
            
            sentencia.setString(1, idCargo);
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
}
