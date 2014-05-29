/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.ProyectoVO;
import co.com.mariobarbosa.baumate.modelo.VO.SolicitudVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author jose
 */
public class SolicitudDAO extends Conexion{
    
    public SolicitudVO consultar(int id){
        SolicitudVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idsolicitud,idproyecto,idproveedor,DATE_FORMAT(fechapedido,'%Y-%m-%d') fechapedido ,DATE_FORMAT(fecharecibido,'%Y-%m-%d') fecharecibido,estado FROM solicitud where idsolicitud=? and estado=1");
            sentencia.setInt(1, id);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                respuesta = new SolicitudVO();
                respuesta.setEstado(res.getInt("estado"));
                respuesta.setFechapedido(res.getString("fechapedido"));
                respuesta.setFecharecibido(res.getString("fecharecibido"));
                respuesta.setIdproveedor(new ProveedoresDAO().consultar(res.getString("idproveedor")));
                respuesta.setIdproyecto(new ProyectoDAO().consultar(res.getInt("idproyecto")));
                respuesta.setIdsolicitud(res.getInt("idsolicitud"));
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public SolicitudVO consultarUltimo(){
        SolicitudVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM solicitud where estado=1 order by idsolicitud desc LIMIT 1 ");
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                respuesta = new SolicitudVO();
                respuesta.setEstado(res.getInt("estado"));
                respuesta.setFechapedido(res.getString("fechapedido"));
                respuesta.setFecharecibido(res.getString("fecharecibido"));
                respuesta.setIdproveedor(new ProveedoresDAO().consultar(res.getString("idproveedor")));
                respuesta.setIdproyecto(new ProyectoDAO().consultar(res.getInt("idproyecto")));
                respuesta.setIdsolicitud(res.getInt("idsolicitud"));
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public int insertar (SolicitudVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("INSERT INTO solicitud (fechapedido,fecharecibido,idproyecto,idproveedor,estado)" +
            " VALUES (?,?,?,?,1)");
            
            //sentencia.setInt(1, data.getIdproyecto());
            sentencia.setString(1, data.getFechapedido());
            sentencia.setString(2, data.getFecharecibido());
            sentencia.setInt(3, data.getIdproyecto().getIdproyecto());
            sentencia.setString(4, data.getIdproveedor().getIdproveedores());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public int modificar (SolicitudVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("UPDATE solicitud SET fechapedido=?,fecharecibido=?,idproyecto=?,idproveedor=? WHERE idsolicitud=?");
            
            sentencia.setString(1, data.getFechapedido());
            sentencia.setString(2, data.getFecharecibido());
            sentencia.setInt(3, data.getIdproyecto().getIdproyecto());
            sentencia.setString(4, data.getIdproveedor().getIdproveedores());
            sentencia.setInt(5, data.getIdsolicitud());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public int eliminar (int id){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update solicitud set estado=0 where idsolicitud=?");
            sentencia.setInt(1, id);
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public ArrayList<SolicitudVO> listar(){
        ArrayList<SolicitudVO> respuesta = new ArrayList<SolicitudVO>();
        SolicitudVO solicitud = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM solicitud where estado=1");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                solicitud = new SolicitudVO();
                solicitud.setEstado(res.getInt("estado"));
                solicitud.setFechapedido(res.getString("fechapedido"));
                solicitud.setFecharecibido(res.getString("fecharecibido"));
                solicitud.setIdproveedor(new ProveedoresDAO().consultar(res.getString("idproveedor")));
                solicitud.setIdproyecto(new ProyectoDAO().consultar(res.getInt("idproyecto")));
                solicitud.setIdsolicitud(res.getInt("idsolicitud"));
                
                respuesta.add(solicitud);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    public ArrayList<SolicitudVO> listar(String idSolic){
        ArrayList<SolicitudVO> respuesta = new ArrayList<SolicitudVO>();
        SolicitudVO solicitud = null;
        String solicitudes ="";
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM solicitud where estado=1 and idsolicitud in(" + idSolic + ")");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                solicitud = new SolicitudVO();
                solicitud.setEstado(res.getInt("estado"));
                solicitud.setFechapedido(res.getString("fechapedido"));
                solicitud.setFecharecibido(res.getString("fecharecibido"));
                solicitud.setIdproveedor(new ProveedoresDAO().consultar(res.getString("idproveedor")));
                solicitud.setIdproyecto(new ProyectoDAO().consultar(res.getInt("idproyecto")));
                solicitud.setIdsolicitud(res.getInt("idsolicitud"));
                
                respuesta.add(solicitud);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    public ArrayList<SolicitudVO> consultar(String idproyecto){
        ArrayList<SolicitudVO> respuesta = new ArrayList<SolicitudVO>();
        SolicitudVO solicitud = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idsolicitud,idproyecto,idproveedor,DATE_FORMAT(fechapedido,'%Y-%m-%d') fechapedido ,DATE_FORMAT(fecharecibido,'%Y-%m-%d') fecharecibido,estado FROM solicitud where estado=1 and idproyecto = ?");
            sentencia.setString(1, idproyecto);
            
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                solicitud = new SolicitudVO();
                solicitud.setEstado(res.getInt("estado"));
                solicitud.setFechapedido(res.getString("fechapedido"));
                solicitud.setFecharecibido(res.getString("fecharecibido"));
                solicitud.setIdproveedor(new ProveedoresDAO().consultar(res.getString("idproveedor")));
                solicitud.setIdproyecto(new ProyectoDAO().consultar(res.getInt("idproyecto")));
                solicitud.setIdsolicitud(res.getInt("idsolicitud"));
                
                respuesta.add(solicitud);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
}
