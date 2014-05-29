/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.MaterialOfrecidoVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author hectorbohorquez
 */
public class MaterialOfrecidoDAO extends Conexion{
    
    //insertar material ofrecido
    public int insertar (MaterialOfrecidoVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("insert into materialofrecido (idmaterial,costo,idproveedor)"
                    + "values (?,?,?)");
            sentencia.setInt(1, data.getIdmaterial().getIdmateriales());
            sentencia.setDouble(2, data.getCosto());
            sentencia.setString(3, data.getIdproveedor().getIdproveedores());
            respuesta = sentencia.executeUpdate();
                    
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
  
    }
    //modificar una material ofrecido
    public int modificar (MaterialOfrecidoVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update materialofrecido set costo=? where idmaterialofrecido=?");

            sentencia.setDouble(1, data.getCosto());
            sentencia.setInt(2, data.getIdmaterialofrecido());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    //listar todas los materiales ofrecidos
    public ArrayList<MaterialOfrecidoVO> listar(){
        ArrayList<MaterialOfrecidoVO> respuesta = new ArrayList<MaterialOfrecidoVO>();
        MaterialOfrecidoVO materialof = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select idmaterialofrecido, idmaterial, costo, idproveedor from materialofrecido");
            ResultSet resp = sentencia.executeQuery();
            while (resp.next()) {                
                materialof = new MaterialOfrecidoVO();
                materialof.setIdmaterialofrecido(resp.getInt("idmaterialofrecido"));
                materialof.setIdmaterial(new materialesDAO().consultar(resp.getInt("idmaterial")));
                materialof.setCosto(resp.getDouble("costo"));
                materialof.setIdproveedor(new ProveedoresDAO().consultar(resp.getString("idproveedor")));
                
                respuesta.add(materialof);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public ArrayList<MaterialOfrecidoVO> buscar(int idmaterial){
        ArrayList<MaterialOfrecidoVO> respuesta = new ArrayList<MaterialOfrecidoVO>();
        MaterialOfrecidoVO materialof = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select * from materialofrecido where idmaterialofrecido=?");
            sentencia.setInt(1, idmaterial);
            ResultSet resp = sentencia.executeQuery();
            while (resp.next()) {                
                materialof = new MaterialOfrecidoVO();
                materialof.setIdmaterialofrecido(resp.getInt("idmaterialofrecido"));
                materialof.setIdmaterial(new materialesDAO().consultar(resp.getInt("idmaterial")));
                materialof.setCosto(resp.getDouble("costo"));
                materialof.setIdproveedor(new ProveedoresDAO().consultar(resp.getString("idproveedor")));
                
                respuesta.add(materialof);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public MaterialOfrecidoVO buscar(int idmaterial, String idproveedor){
        
        MaterialOfrecidoVO materialof = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select * from materialofrecido where idmaterial=? and idproveedor=?");
            sentencia.setInt(1, idmaterial);
            sentencia.setString(2, idproveedor);
            ResultSet resp = sentencia.executeQuery();
            if (resp.next()) {                
                materialof = new MaterialOfrecidoVO();
                materialof.setIdmaterialofrecido(resp.getInt("idmaterialofrecido"));
                materialof.setIdmaterial(new materialesDAO().consultar(resp.getInt("idmaterial")));
                materialof.setCosto(resp.getDouble("costo"));
                materialof.setIdproveedor(new ProveedoresDAO().consultar(resp.getString("idproveedor")));
                
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return materialof;
        }
    }
    
    public ArrayList<MaterialOfrecidoVO> listar(int idmaterial, String idproveedor ){
        ArrayList<MaterialOfrecidoVO> respuesta = new ArrayList<MaterialOfrecidoVO>();
        MaterialOfrecidoVO materialof = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select * from materialofrecido where idmaterial=? and idproveedor=?");
            sentencia.setInt(1, idmaterial);
            sentencia.setString(2, idproveedor);
            ResultSet resp = sentencia.executeQuery();
            while (resp.next()) {                
                materialof = new MaterialOfrecidoVO();
                materialof.setIdmaterialofrecido(resp.getInt("idmaterialofrecido"));
                materialof.setIdmaterial(new materialesDAO().consultar(resp.getInt("idmaterial")));
                materialof.setCosto(resp.getDouble("costo"));
                materialof.setIdproveedor(new ProveedoresDAO().consultar(resp.getString("idproveedor")));
                
                respuesta.add(materialof);
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
            PreparedStatement sentencia = conectar.prepareStatement("delete materialofrecido from materialofrecido where idmaterialofrecido=?");
            sentencia.setInt(1, id);
            respuesta = sentencia.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public MaterialOfrecidoVO consultar(int id){
        MaterialOfrecidoVO matofre = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select idmaterialofrecido,idmaterial,costo,idproveedor from materialofrecido where idmaterialofrecido=?");
            sentencia.setInt(1, id);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                matofre = new MaterialOfrecidoVO();
                matofre.setIdmaterialofrecido(res.getInt("idmaterialofrecido"));
                matofre.setIdmaterial(new  materialesDAO().consultar(res.getInt("idmaterial")));
                matofre.setCosto(res.getInt("costo"));
                matofre.setIdproveedor(new  ProveedoresDAO().consultar(res.getString("idproveedor")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return matofre;
        }
    }
}
