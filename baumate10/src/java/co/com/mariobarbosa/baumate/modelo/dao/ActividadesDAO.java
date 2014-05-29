/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.ActividadesVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author sena
 */
public class ActividadesDAO extends Conexion{
    
    ///JC 15/03/2014 {
    ///este metodo modifica un proyecto ya existente
    public int modificar (ActividadesVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update actividades set descripcion = ?, area = ?, idproyecto = ?, idtipopiso = ?  where codigo=?");
            
            sentencia.setString(1, data.getDescripcion());
            sentencia.setInt(2, data.getArea());
            sentencia.setInt(3, data.getIdproyecto().getIdproyecto());
            sentencia.setInt(4, data.getIdtipopiso().getCodigo());
            sentencia.setInt(5, data.getCodigo());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    /// este metodo elimina (en forma logica) el proyecto (estado=1 es activo, estado=0 es inactivo)
    public int eliminar (int id){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update actividades set estado=0 where codigo=?");
            sentencia.setInt(1, id);
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    //inserta un proyecto en la tabla de proyecto
    public int insertar (ActividadesVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("INSERT INTO actividades (descripcion,area,idproyecto,idtipopiso) VALUES (?,?,?,?)");
            
            sentencia.setString(1, data.getDescripcion());
            sentencia.setInt(2, data.getArea());
            sentencia.setInt(3, data.getIdproyecto().getIdproyecto());
            sentencia.setInt(4, data.getIdtipopiso().getCodigo());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    /// consulta todos los proyectos
    public ArrayList<ActividadesVO> listar(){
        ArrayList<ActividadesVO> respuesta = new ArrayList<ActividadesVO>();
        ActividadesVO actividad = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * from actividades where estado = 1");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                actividad = new ActividadesVO();
                actividad.setIdproyecto(new ProyectoDAO().consultar(res.getInt("idproyecto")));
                actividad.setCodigo(res.getInt("codigo"));
                actividad.setIdtipopiso(new TiposPisosDAO().consultar(res.getInt("idtipopiso")));
                actividad.setArea(res.getInt("area"));
                actividad.setDescripcion(res.getString("descripcion"));
                
                respuesta.add(actividad);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    ///consulta la lista de actividades de un proyecto
     public ArrayList<ActividadesVO> listar(int idproyecto){
        ArrayList<ActividadesVO> respuesta = new ArrayList<ActividadesVO>();
        ActividadesVO actividad = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * from actividades where idproyecto=? and estado=1");
            sentencia.setInt(1, idproyecto);
            
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                actividad = new ActividadesVO();
                actividad.setIdproyecto(new ProyectoDAO().consultar(res.getInt("idproyecto")));
                actividad.setCodigo(res.getInt("codigo"));
                actividad.setIdtipopiso(new TiposPisosDAO().consultar(res.getInt("idtipopiso")));
                actividad.setArea(res.getInt("area"));
                actividad.setDescripcion(res.getString("descripcion"));
                
                respuesta.add(actividad);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    ///consulta un solo proyecto en especifico
    public ActividadesVO consultar(int id){
        ActividadesVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM actividades where codigo=?");
            sentencia.setInt(1, id);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                respuesta = new ActividadesVO();
                
                respuesta.setIdproyecto(new ProyectoDAO().consultar(res.getInt("idproyecto")));
                respuesta.setCodigo(res.getInt("codigo"));
                respuesta.setIdtipopiso(new TiposPisosDAO().consultar(res.getInt("idtipopiso")));
                respuesta.setArea(res.getInt("area"));
                respuesta.setDescripcion(res.getString("descripcion"));
                
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    /// } JC 15/03/2014
}
