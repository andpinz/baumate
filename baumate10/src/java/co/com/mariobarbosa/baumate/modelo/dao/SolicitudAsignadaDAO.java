/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.SolicitudAsignadaVO;
import co.com.mariobarbosa.baumate.modelo.VO.SolicitudVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author jose
 */
public class SolicitudAsignadaDAO extends Conexion{
    public SolicitudAsignadaVO consultar(int idsolicitud, int idmaterial){
        SolicitudAsignadaVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM solicitudasignada where idsolicitud=? and idmaterial=?");
            sentencia.setInt(1, idsolicitud);
            sentencia.setInt(2, idmaterial);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                respuesta = new SolicitudAsignadaVO();
                respuesta.setEstado(res.getInt("estado"));
                respuesta.setCantidadrecibida(res.getInt("cantidadrecibida"));
                respuesta.setCantidadsolicitada(res.getInt("cantidadsolicitada"));
                respuesta.setPrecio(res.getDouble("precio"));
                respuesta.setObservacion((res.getString("observacion")));
                respuesta.setIdsolicitud(new SolicitudDAO().consultar(res.getInt("idsolicitud")));
                respuesta.setIdmaterial(new materialesDAO().consultar(res.getInt("idmaterial")));
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public ArrayList<SolicitudAsignadaVO> listar(int idsolicitud){
        SolicitudAsignadaVO solicitudasig = null;
        ArrayList<SolicitudAsignadaVO> respuesta = new ArrayList<SolicitudAsignadaVO>();
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM solicitudasignada where idsolicitud=?");
            sentencia.setInt(1, idsolicitud);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                solicitudasig = new SolicitudAsignadaVO();
                solicitudasig.setEstado(res.getInt("estado"));
                solicitudasig.setCantidadrecibida(res.getInt("cantidadrecibida"));
                solicitudasig.setCantidadsolicitada(res.getInt("cantidadsolicitada"));
                solicitudasig.setPrecio(res.getDouble("precio"));
                solicitudasig.setObservacion((res.getString("observacion")));
                solicitudasig.setIdsolicitud(new SolicitudDAO().consultar(res.getInt("idsolicitud")));
                solicitudasig.setIdmaterial(new materialesDAO().consultar(res.getInt("idmaterial")));
                
                respuesta.add(solicitudasig);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public int insertar (SolicitudAsignadaVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("INSERT INTO solicitudasignada (idsolicitud,idmaterial,cantidadrecibida,cantidadsolicitada,precio,observacion,estado)" +
            " VALUES (?,?,?,?,?,?,1)");
            
            sentencia.setInt(1, data.getIdsolicitud().getIdsolicitud());
            sentencia.setInt(2, data.getIdmaterial().getIdmateriales());
            sentencia.setInt(3, data.getCantidadrecibida());
            sentencia.setInt(4, data.getCantidadsolicitada());
            sentencia.setDouble(5, data.getPrecio());
            sentencia.setString(6, data.getObservacion());
                        
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public int modificar (SolicitudAsignadaVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("UPDATE solicitudasignada SET cantidadrecibida=?,cantidadsolicitada=?,precio=?,observacion=?,estado=? WHERE idsolicitud=? and idmaterial=?");
            
            sentencia.setInt(1, data.getCantidadrecibida());
            sentencia.setInt(2, data.getCantidadsolicitada());
            sentencia.setDouble(3, data.getPrecio());
            sentencia.setString(4, data.getObservacion());
            sentencia.setInt(5, data.getEstado());
            sentencia.setInt(6, data.getIdsolicitud().getIdsolicitud());
            sentencia.setInt(7, data.getIdmaterial().getIdmateriales());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public int eliminar (int idsolicitud, int idmaterial){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update SolicitudAsignadaVO set estado=0 where idsolicitud=? and idmaterial=?");
            sentencia.setInt(1, idsolicitud);
            sentencia.setInt(2, idmaterial);
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
     public ArrayList<SolicitudAsignadaVO> listar(){
        SolicitudAsignadaVO solicitudasig = null;
        ArrayList<SolicitudAsignadaVO> respuesta = new ArrayList<SolicitudAsignadaVO>();
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM solicitudasignada");
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                solicitudasig = new SolicitudAsignadaVO();
                solicitudasig.setEstado(res.getInt("estado"));
                solicitudasig.setCantidadrecibida(res.getInt("cantidadrecibida"));
                solicitudasig.setCantidadsolicitada(res.getInt("cantidadsolicitada"));
                solicitudasig.setPrecio(res.getDouble("precio"));
                solicitudasig.setObservacion((res.getString("observacion")));
                solicitudasig.setIdsolicitud(new SolicitudDAO().consultar(res.getInt("idsolicitud")));
                solicitudasig.setIdmaterial(new materialesDAO().consultar(res.getInt("idmaterial")));
                
                respuesta.add(solicitudasig);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
}
