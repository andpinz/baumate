/**
 *
 * @author David Andres Gomez Zamora
 * 17-03-2014
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.RolVo;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author David Andres Gomez Zamora
 * 17-03-2014
 */

public class RolDao extends Conexion{
    
    
    // Metodo ingresoRol: muestra los roles y crea un rol por usuario
    public int ingresoRol (RolVo data){
        int resp=-1;
        try {
            conectar();
            PreparedStatement ingresar=conectar.prepareStatement("insert into rol (idrol,nombrerol)"+"value(?,?)");
            ingresar.setInt(1,data.getIdrol());
            ingresar.setString(2,data.getNombrerol());
            resp=ingresar.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally{
            desconectar();
            return resp;
        }
    }
    
    public ArrayList<RolVo> listaRol (){
        ArrayList<RolVo> lista = new ArrayList<RolVo>();
        RolVo resp=null;
        try {
            conectar();
            PreparedStatement buscar=conectar.prepareStatement("select * from rol");
            ResultSet res=buscar.executeQuery();
            while(res.next()){
                resp = new RolVo();
                resp.setIdrol(res.getInt("idrol"));
                resp.setNombrerol(res.getString("nombrerol"));
                lista.add(resp);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return lista;
        }
    }
    
        // Metodo consultar: consulta un solo rol por nombre del rol
    public RolVo buscarRol (String nombrerol){
        RolVo rol=null; 
        try {
            conectar();
             PreparedStatement consultar=conectar.prepareStatement ("select * from rol where nombrerol=?");
             consultar.setString(1, nombrerol);
             ResultSet resp= consultar.executeQuery();
             if(resp.next()){
                 rol=new RolVo();
                 rol.setIdrol(resp.getInt("idrol"));
                 rol.setNombrerol(resp.getString("nombrerol"));
             }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return rol;
        }
    }
    
    // Metodo consultar: consulta un solo rol por el id del rol
    public RolVo consultar (int idrol){
        RolVo rol=null; 
        try {
            conectar();
             PreparedStatement consultar=conectar.prepareStatement ("select * from rol where idrol=?");
             consultar.setInt(1, idrol);
             ResultSet resp= consultar.executeQuery();
             if(resp.next()){
                 rol=new RolVo();
                 rol.setIdrol(idrol);
                 rol.setNombrerol(resp.getString("nombrerol"));
             }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return rol;
        }
    }
    
    // Metodo modificoUsuario: modifica un solo usuario por el correo/idUsuario
    public int modificoRol(RolVo data){
        int resp=-1;
        try {
            conectar();
            PreparedStatement modificar=conectar.prepareStatement("update rol set nombrerol=? where idrol=?");
            modificar.setString(1, data.getNombrerol());
            modificar.setInt(2,data.getIdrol());
            resp = modificar.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return resp;
        }
    }
    
//    // Metodo consultarRol: consulta todos los roles
//    public ArrayList<RolVo> consultarRol (){
//        ArrayList<RolVo> lista = new ArrayList<RolVo>();
//        try {
//            conectar();
//            PreparedStatement ingresar=conectar.prepareStatement("select * from rol");
//            ResultSet resp=ingresar.executeQuery();
//            while(resp.next()){
//                RolVo rol=new RolVo();
//                rol.setIdrol(resp.getInt("idrol"));
//                rol.setNombrerol(resp.getString("nombrerol"));
//                lista.add(rol);
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }finally{
//            return lista;
//        }
//    }
}
