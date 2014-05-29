/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.mariobarbosa.baumate.modelo.dao;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import co.com.mariobarbosa.baumate.modelo.VO.TiposPisosVO;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author Johanagt
 */
public class TiposPisosDAO extends Conexion{
     public int crearTipoPisos (TiposPisosVO data){//método que permite insertar tipos de pisos
        int resp=-1;
        try {
            conectar();
            PreparedStatement ingresar=conectar.prepareStatement("insert into tipopiso (codigo,nombre)"
                    +"value(?,?)");
            ingresar.setInt(1, data.getCodigo());
            ingresar.setString(2, data.getNombre());
            
            
             
            resp=ingresar.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally{
            desconectar();
            return resp;
        }
    }
     
      public int modificarTipopiso(TiposPisosVO data){//método que permite modificar los capos de tipo de pisos
        int resp=-1;
        try {
             conectar();
            PreparedStatement modificar=conectar.prepareStatement("update tipopiso set "+"nombre=? "+" where codigo=?");
            
            
            modificar.setString(1, data.getNombre());
            modificar.setInt(2, data.getCodigo());
           
               
            resp = modificar.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return resp;
        }
    }
       public ArrayList<TiposPisosVO> consultarpisos (){
        ArrayList<TiposPisosVO> lista = new ArrayList<TiposPisosVO>();
        try {
            conectar();
            PreparedStatement ingresar=conectar.prepareStatement("select * from tipopiso");
            ResultSet resp=ingresar.executeQuery();
            while(resp.next()){
                TiposPisosVO tipo=new TiposPisosVO();
                
                tipo.setNombre(resp.getString("nombre"));
                tipo.setCodigo(resp.getInt("codigo"));
                lista.add(tipo);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            return lista;
        }
    }
       public ArrayList<TiposPisosVO> listar (String nombre){
        ArrayList<TiposPisosVO> lista = new ArrayList<TiposPisosVO>();
        TiposPisosVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia=conectar.prepareStatement("SELECT * FROM tipopiso where nombre like concat('%',?,'%')");
            sentencia.setString(1, nombre);
            ResultSet resp=sentencia.executeQuery();
            
            while(resp.next()){
                
                tipo=new TiposPisosVO();
                tipo.setCodigo(resp.getInt("codigo"));
                tipo.setNombre(resp.getString("nombre"));
                
                
                lista.add(tipo);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            return lista;
        }
    }
       public ArrayList<TiposPisosVO> listar(){
        ArrayList<TiposPisosVO> respuesta = new ArrayList<TiposPisosVO>();
         TiposPisosVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT codigo,Nombre FROM tipopiso");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                tipo = new TiposPisosVO();
                tipo.setCodigo(res.getInt("codigo"));
                tipo.setNombre(res.getString("nombre"));
                
                respuesta.add(tipo);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
        public TiposPisosVO consultar(int codigo){
        TiposPisosVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select * from tipopiso where"
                    +" codigo=? ");
            sentencia.setInt(1, codigo);
           
            ResultSet resp = sentencia.executeQuery();
            if (resp.next()) {
                tipo = new TiposPisosVO();
                tipo.setCodigo(codigo);
                tipo.setNombre(resp.getString("nombre"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return tipo;
        }
    }
        public int eliminar (int codigo){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("delete from tipopiso where codigo=?");
            
                sentencia.setInt(1, codigo);
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
}
    

