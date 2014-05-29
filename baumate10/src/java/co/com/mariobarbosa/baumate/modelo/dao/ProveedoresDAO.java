/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.ProveedoresVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author AndresFeLipe
 */
public class ProveedoresDAO extends Conexion {
    
     public int modificar (ProveedoresVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update proveedores set nombreempresa=?,idciudad=?,tipomaterial=?,foto=?,telefono=?,direccion=?, estado=? "+" where idproveedores=? ");
            
            
            sentencia.setString(1, data.getNombreempresa());
            sentencia.setInt(2, data.getIdciudad().getIdciudad());
            sentencia.setString(3, data.getTipomaterial());
            sentencia.setString(4, data.getFoto());
            sentencia.setString(5, data.getTelefono());
            sentencia.setString(6, data.getDireccion());
            sentencia.setInt(7, data.getEstado());
            sentencia.setString(8, data.getIdproveedores());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
     public int insertar (ProveedoresVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("INSERT INTO proveedores(idproveedores,nombreempresa,idciudad,tipomaterial,foto,telefono,direccion,estado) VALUES (?,?,?,?,?,?,?,?)");
            
            
            sentencia.setString(1, data.getIdproveedores());
            sentencia.setString(2, data.getNombreempresa());
            sentencia.setInt(3, data.getIdciudad().getIdciudad());
            sentencia.setString(4, data.getTipomaterial());
            sentencia.setString(5, data.getFoto());
            sentencia.setString(6, data.getTelefono());
            sentencia.setString(7, data.getDireccion());
            sentencia.setInt(8, data.getEstado());
           
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
     
     public ArrayList<ProveedoresVO> listar (String idproveedores){
        ArrayList<ProveedoresVO> lista = new ArrayList<ProveedoresVO>();
        ProveedoresVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia=conectar.prepareStatement("SELECT * FROM proveedores where idproveedores like concat('%',?,'%') and estado = 1");
            sentencia.setString(1,idproveedores);
            ResultSet resp=sentencia.executeQuery();
            
            while(resp.next()){
                
                tipo=new ProveedoresVO();
                tipo.setIdproveedores(resp.getString("idproveedores"));
                tipo.setNombreempresa(resp.getString("nombreempresa"));
                tipo.setIdciudad(new CiudadDAO().consultar(resp.getInt("idciudad")));
                tipo.setTipomaterial(resp.getString("tipomaterial"));
                tipo.setFoto(resp.getString("foto"));
                tipo.setTelefono(resp.getString("telefono"));
                tipo.setDireccion(resp.getString("direccion"));
                tipo.setEstado(resp.getInt("estado"));
                
                lista.add(tipo);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            return lista;
        }
     }
     

     public ArrayList<ProveedoresVO> listar(){
        ArrayList<ProveedoresVO> respuesta = new ArrayList<ProveedoresVO>();
        ProveedoresVO pro = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM proveedores where estado = 1");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                pro = new ProveedoresVO();
                pro.setIdproveedores(res.getString("idproveedores"));
                pro.setNombreempresa(res.getString("nombreempresa"));
                pro.setIdciudad(new CiudadDAO().consultar(res.getInt("idciudad")));
                pro.setTipomaterial(res.getString("tipomaterial"));
                pro.setFoto(res.getString("foto"));
                pro.setTelefono(res.getString("telefono"));
                pro.setDireccion(res.getString("direccion"));
                pro.setEstado(res.getInt("estado"));
                
                respuesta.add(pro);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
     
     public ProveedoresVO consultar(String idproveedores){
        ProveedoresVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM proveedores where"
                    +" idproveedores=?");
            
            sentencia.setString(1, idproveedores);
           
            ResultSet resp = sentencia.executeQuery();
            if (resp.next()) {
                tipo = new ProveedoresVO();
                tipo.setIdproveedores(idproveedores);
                tipo.setNombreempresa(resp.getString("nombreempresa"));
                tipo.setIdciudad(new CiudadDAO().consultar(resp.getInt("idciudad")));
                tipo.setTipomaterial(resp.getString("tipomaterial"));
                tipo.setFoto(resp.getString("foto"));
                tipo.setTelefono(resp.getString("telefono"));
                tipo.setDireccion(resp.getString("direccion"));
                tipo.setEstado(resp.getInt("estado"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return tipo;
        }
    }
     
        public int eliminar (String idproveedores){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update proveedores set estado=0 where idproveedores=?");
            
            sentencia.setString(1, idproveedores);
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
      
      
      

    
}
