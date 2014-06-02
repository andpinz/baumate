/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.IdentificacionVentaVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author hectorbohorquez
 */
public class IdentificacionVentaDAO extends Conexion{
    
    /*El metodo "insertarIdentificacionVenta" me permide ingresar en la Base de Datos un nuevo registro sobre una nueva
    venta*/
    public int insertarIdentificacionVenta(IdentificacionVentaVO data){
        int resp = -1;
        try {
            conectar();
            PreparedStatement sentencia=conectar.prepareStatement("INSERT INTO identificacionVenta (ididentificacionVenta,tipoidentificacionventa)"
            + "values (?,?)");
            sentencia.setInt(1, data.getIdidentificacionventa());
            sentencia.setString(2, data.getTipoidentificacionventa());
            resp=sentencia.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return resp;
        }
    }
    /*El metodo "modificarIdentificacionVenta" me perimite Modificar lo registros de la Base de Datos */
    public int modificarIdentificacionVenta(IdentificacionVentaVO data){
        int resp = -1;
        try {
            conectar();
            PreparedStatement sentencia=conectar.prepareStatement("UPDATE identificacionVenta set tipoidentificacionventa=? where ididentificacionVenta=?");
            sentencia.setString(1, data.getTipoidentificacionventa());
            sentencia.setInt(2, data.getIdidentificacionventa());
            resp=sentencia.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return resp;
        }
    }
    /*El metodo "consultarIdentificacionVenta" me permite consultar los registros de l Base de Datos segun el Id que ingrese el Usuario"*/
    public IdentificacionVentaVO consultarIdentificacionVenta(int ididentificacionVenta){
        IdentificacionVentaVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia=conectar.prepareStatement("SELECT * FROM identificacionVenta WHERE ididentificacionVenta=?");
            sentencia.setInt(1, ididentificacionVenta);
            ResultSet resp = sentencia.executeQuery();
            if (resp.next()) {
                tipo = new IdentificacionVentaVO();
                tipo.setIdidentificacionventa(ididentificacionVenta);
                tipo.setTipoidentificacionventa(resp.getString("tipoidentificacionventa"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return tipo;
        }
    }
    /*El metodo "eliminarIdentificaiconVenta" me permite elimiar un registro de la Base de Datos*/
    public int eliminarIdentificacionVenta(int ididentificacionVenta){
        int resp = -1;
        try {
            conectar();
            PreparedStatement sentencia=conectar.prepareStatement("DELETE from identificacionVenta WHERE ididentificacionVenta=?");
            sentencia.setInt(1, ididentificacionVenta);
            resp= sentencia.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return resp;
        }
    }
    
    public ArrayList<IdentificacionVentaVO> listar (String TipoDoc){
        ArrayList<IdentificacionVentaVO> lista = new ArrayList<IdentificacionVentaVO>();
        IdentificacionVentaVO re = null;
        try {
            conectar();
            PreparedStatement sentencia=conectar.prepareStatement("SELECT * FROM identificacionVenta WHERE tipoidentificacionventa like concat('%',?,'%')");
            sentencia.setString(1, TipoDoc);
            ResultSet resp=sentencia.executeQuery();
            while(resp.next()){
                  re=new IdentificacionVentaVO();
                  re.setIdidentificacionventa(resp.getInt("ididentificacionVenta"));
                  re.setTipoidentificacionventa(resp.getString("tipoidentificacionventa"));
                lista.add(re);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            return lista;
        }
    }
    
    public ArrayList<IdentificacionVentaVO> listar(){
        ArrayList<IdentificacionVentaVO> respuesta = new ArrayList<IdentificacionVentaVO>();
        IdentificacionVentaVO re = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT ididentificacionVenta,tipoidentificacionventa FROM identificacionVenta");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                re = new IdentificacionVentaVO();
                re.setIdidentificacionventa(res.getInt("ididentificacionventa"));
                re.setTipoidentificacionventa(res.getString("tipoidentificacionventa"));
                respuesta.add(re);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    
}
