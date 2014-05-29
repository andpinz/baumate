/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.VentaVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author hectorbohorquez
 */
public class VentaDAO extends Conexion{
    
    // insertar una nueva venta
    public int insertar (VentaVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("insert into venta (nombreventa,fecha,identificacion,valor,idcliente,estado)"
                    + "values (?,?,?,?,?,?)" );
            
            sentencia.setString(1, data.getNombreventa());
            sentencia.setString(2, data.getFecha());
            sentencia.setInt(3, data.getIdentificacion());
            sentencia.setString(4, data.getValor());
            sentencia.setInt(5, data.getIdcliente().getIdCliente());
            sentencia.setInt(6, data.getEstado());
            
            respuesta = sentencia.executeUpdate();
                    
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
  
    }
    
    //modificar una venta
    public int modificar (VentaVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update venta set nombreventa=?,fecha=?,identificacion=?,valor=?,idcliente=?,estado=? where idventa=?");
            
            sentencia.setString(1, data.getNombreventa());
            sentencia.setString(2, data.getFecha());
            sentencia.setInt(3, data.getIdentificacion());
            sentencia.setString(4, data.getValor());
            sentencia.setInt(5, data.getIdcliente().getIdCliente());
            sentencia.setInt(6, data.getEstado());
            sentencia.setInt(7, data.getIdventa());
            
            respuesta = sentencia.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    //listar todas las ventas realizadas y almacenadas
    public ArrayList<VentaVO> listar(){
        ArrayList<VentaVO> respuesta = new ArrayList<VentaVO>();
        VentaVO venta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select idventa,nombreventa,DATE_FORMAT(fecha,'%Y-%m-%d')fecha,identificacion,valor,idcliente,estado from venta where estado=1");
            ResultSet resp = sentencia.executeQuery();
            while (resp.next()) {                
                venta = new VentaVO();
                venta.setIdventa(resp.getInt("idventa"));
                venta.setNombreventa(resp.getString("nombreventa"));
                venta.setFecha(resp.getString("fecha"));
                venta.setIdentificacion(resp.getInt("identificacion"));
                venta.setValor(resp.getString("valor"));
                venta.setIdcliente(new ClienteDAO().consultar(resp.getInt("idcliente")));
                venta.setEstado(resp.getInt("estado"));
                
                respuesta.add(venta);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    //cambiar el estado de una venta para inhabilitarla de la base de datos mas no para eliminarla 
    public int eliminar (int id){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update venta set estado=0 where idventa=?");
            sentencia.setInt(1, id);
            respuesta = sentencia.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public ArrayList<VentaVO> listar (String idventa ,String identificacion){
        ArrayList<VentaVO> respuesta = new ArrayList<VentaVO>();
        VentaVO venta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idventa,nombreventa,DATE_FORMAT(fecha,'%Y-%m-%d')fecha,identificacion,valor,idcliente,estado FROM venta WHERE idventa LIKE concat('%',?,'%') and identificacion LIKE concat('%',?,'%') and estado=1");
            sentencia.setString(1, idventa);
            sentencia.setString(2, identificacion);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                venta = new VentaVO();
                venta.setIdventa(res.getInt("idventa"));
                venta.setNombreventa(res.getString("nombreventa"));
                venta.setFecha(res.getString("fecha"));
                venta.setIdentificacion(res.getInt("identificacion"));
                venta.setValor(res.getString("valor"));
                venta.setIdcliente(new ClienteDAO().consultar(res.getInt("idcliente")));
                venta.setEstado(res.getInt("estado"));
                respuesta.add(venta);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
//            desconectar();
            return respuesta;
        }
    }
    
    //consultar proyecto especifico
    public VentaVO consultar (int ident){
        VentaVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select idventa,nombreventa,DATE_FORMAT(fecha,'%Y-%m-%d')fecha,identificacion,valor,idcliente,estado from venta where identificacion=?");
            sentencia.setInt(1, ident);
            ResultSet res = sentencia.executeQuery();
            while(res.next()){
                respuesta = new VentaVO();
                respuesta.setIdventa(res.getInt("idventa"));
                respuesta.setNombreventa(res.getString("nombreventa"));
                respuesta.setFecha(res.getString("fecha"));
                respuesta.setIdentificacion(res.getInt("identificacion"));
                respuesta.setValor(res.getString("valor"));
                respuesta.setIdcliente(new ClienteDAO().consultar(res.getInt("idcliente")));
                respuesta.setEstado(res.getInt("estado"));
                
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    
}
