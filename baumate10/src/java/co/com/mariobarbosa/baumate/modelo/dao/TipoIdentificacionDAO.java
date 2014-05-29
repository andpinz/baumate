
package co.com.mariobarbosa.baumate.modelo.dao;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import co.com.mariobarbosa.baumate.modelo.VO.TipoIdentificacionVO;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author Johanagt
 */
public class TipoIdentificacionDAO extends Conexion{
     public int crearTipoIdentificacion (TipoIdentificacionVO data){//método que permite insertar tipos de identificacion
        int resp=-1;
        try {
            conectar();
            PreparedStatement ingresar=conectar.prepareStatement("INSERT INTO tipoidentificacion (idtipoIdentificacion,descripcion)"
                    +"values(?,?)");
            
            ingresar.setInt(1, data.getIdtipoIdentificacion());
            ingresar.setString(2, data.getDescripcion());             
            resp=ingresar.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally{
            desconectar();
            return resp;
        }
    }
     
      public int modificarTipoIdentificacion(TipoIdentificacionVO data){//método que permite modificar los capos de tipo de pisos
        int resp=-1;
        try {
            conectar();
            PreparedStatement modificar=conectar.prepareStatement("update tipoidentificacion set descripcion=? where idtipoIdentificacion=?");
            
            modificar.setString(1, data.getDescripcion());
            modificar.setInt(2, data.getIdtipoIdentificacion());
            
            resp = modificar.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return resp;
        }
    }
       public ArrayList<TipoIdentificacionVO> listar (String descripcion){
        ArrayList<TipoIdentificacionVO> lista = new ArrayList<TipoIdentificacionVO>();
        TipoIdentificacionVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia=conectar.prepareStatement("SELECT * FROM tipoidentificacion where descripcion like concat('%',?,'%')");
            sentencia.setString(1, descripcion);
           
            ResultSet resp=sentencia.executeQuery();
            
            while(resp.next()){
                
                tipo=new TipoIdentificacionVO();
                
                
                tipo.setIdtipoIdentificacion(resp.getInt("idtipoIdentificacion"));
              tipo.setDescripcion(resp.getString("descripcion"));
                lista.add(tipo);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            return lista;
        }
    }
       public ArrayList<TipoIdentificacionVO> listar(){
        ArrayList<TipoIdentificacionVO> respuesta = new ArrayList<TipoIdentificacionVO>();
        TipoIdentificacionVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idtipoIdentificacion,descripcion FROM tipoidentificacion");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                tipo = new TipoIdentificacionVO();
                tipo.setIdtipoIdentificacion(res.getInt("idtipoIdentificacion"));
                tipo.setDescripcion(res.getString("descripcion"));
                
                respuesta.add(tipo);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
        public TipoIdentificacionVO consultar(int idtipoIdentificacion){
        TipoIdentificacionVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select * from tipoidentificacion where"
                    +" idtipoIdentificacion=?");
            
            sentencia.setInt(1, idtipoIdentificacion);
            
            ResultSet resp = sentencia.executeQuery();
            if (resp.next()) {
                tipo = new TipoIdentificacionVO();
                tipo.setIdtipoIdentificacion(idtipoIdentificacion);
                tipo.setDescripcion(resp.getString("descripcion"));
                
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return tipo;
        }
    }
         public int eliminar (int idtipoIdentificacion){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("delete from tipoidentificacion where idtipoIdentificacion=?");
            
                sentencia.setInt(1, idtipoIdentificacion);
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
}
    


    

