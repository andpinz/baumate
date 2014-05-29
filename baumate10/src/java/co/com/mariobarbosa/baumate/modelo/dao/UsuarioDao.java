/**
 *
 * @author David Andres Gomez Zamora
 * 17-03-2014
 */

package co.com.mariobarbosa.baumate.modelo.dao;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import co.com.mariobarbosa.baumate.modelo.VO.UsuarioVo;
import co.com.mariobarbosa.baumate.modelo.dao.EmpleadoDAO;
import co.com.mariobarbosa.baumate.modelo.VO.EmpleadoVO;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author David Andres Gomez Zamora
 * 17-03-2014
 */

public class UsuarioDao extends Conexion {

    // Metodo inicioSesion: Realiza la consulta a la tabla usuario donde el correo y la contraseña sean validas.
    public UsuarioVo inicioSesion(String correo, String contrasena){
        UsuarioVo usuario=null;
        RolDao rol=null;
        try {
            conectar();
            PreparedStatement inicio=conectar.prepareStatement("select * from usuario where correo=? and contrasena=?");
            inicio.setString(1, correo); 
            inicio.setString(2, contrasena);
            ResultSet resp= inicio.executeQuery();
            if (resp.next()){
                usuario =new UsuarioVo();
                rol =new RolDao();
                usuario.setContrasena(contrasena);
                usuario.setCorreo(correo);
                usuario.setEstado(resp.getInt("estado"));
                usuario.setIdUsuario(resp.getInt("idUsuario"));
                usuario.setRol(rol.consultar(resp.getInt("idrol"))); 
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return usuario;
        }
    }
    
    // Metodo ingresoUsuario: Crea usuarios en la tabla usuario. 
    public int ingresoUsuario (UsuarioVo data){
        int resp=-1;
        try {
            conectar();
            PreparedStatement ingresar=conectar.prepareStatement("insert into usuario (correo,contrasena,idrol,estado,idempleado)"+"value(?,?,?,?,?)");
            ingresar.setString(1,data.getCorreo());
            ingresar.setString(2,data.getContrasena());
            ingresar.setInt(3,data.getRol().getIdrol());
            ingresar.setInt(4,data.getEstado());
            ingresar.setInt(5, data.getEmpleado().getIdempleado());
            resp=ingresar.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally{
            desconectar();
            return resp;
        }
    }
    
    // Metodo listaUsuario: consulta todos lso usuarios donde el estado sea 1 (Activo)
    public ArrayList<UsuarioVo> listaUsuario (){
        ArrayList<UsuarioVo> lista = new ArrayList<UsuarioVo>();
        UsuarioVo resp=null;
        try {
            conectar();
            PreparedStatement buscar=conectar.prepareStatement("select * from usuario");
            ResultSet res=buscar.executeQuery();
            while(res.next()){
                resp = new UsuarioVo();
                resp.setEstado(res.getInt("estado"));
                resp.setIdUsuario(res.getInt("idUsuario"));
                resp.setCorreo(res.getString("Correo"));
                resp.setRol(new RolDao().consultar(res.getInt("idrol")));
                lista.add(resp);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return lista;
        }
    }
    
    //Metodo BuscarUsuario: consulta un solo usuario por el correo
    public UsuarioVo BuscarUsuario(String correo){
        UsuarioVo resp=null;
        try {
            conectar();
            PreparedStatement buscar=conectar.prepareStatement("select * from usuario where correo=?");
            buscar.setString(1, correo);
            ResultSet res = buscar.executeQuery();
            while(res.next()){
                resp = new UsuarioVo();
                resp.setEstado(res.getInt("estado"));
                resp.setIdUsuario(res.getInt("idUsuario"));
                resp.setCorreo(res.getString("Correo"));
                resp.setRol(new RolDao().consultar(res.getInt("idrol")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            return resp;
        }
    }
    
    public UsuarioVo consultar(int idUsuario){
        UsuarioVo ciudad = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("select * from usuario where idUsuario=?");
            sentencia.setInt(1, idUsuario);
            ResultSet resp = sentencia.executeQuery();
            if (resp.next()) {
                ciudad = new UsuarioVo();
                ciudad.setIdUsuario(idUsuario);
                ciudad.setCorreo(resp.getString("correo"));
                ciudad.setRol(new RolDao().consultar(resp.getInt("idrol")));
                ciudad.setContrasena(resp.getString("contrasena"));
                ciudad.setEstado(resp.getInt("estado"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return ciudad;
        }
    }

    // Metodo BuscarEstadoUsuario: consulta el estado de un solo usuario por correo
    public UsuarioVo BuscarEstadoUsuario(String correo){
        UsuarioVo resp=null;
        try {
            conectar();
            PreparedStatement buscar=conectar.prepareStatement("select * from usuario where correo=?");
            buscar.setString(1, correo);
            ResultSet res = buscar.executeQuery();
            while(res.next()){
                resp = new UsuarioVo();
                resp.setEstado(res.getInt("estado"));
                resp.setIdUsuario(res.getInt("idUsuario"));
                resp.setCorreo(res.getString("correo"));
                resp.setRol(new RolDao().consultar(res.getInt("idrol")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            return resp;
        }
    }
    
    // Metodo modificoUsuario: modifica un solo usuario por el correo/idUsuario
    public int modificoUsuario(UsuarioVo data){
        int resp=-1;
        try {
            conectar();
            PreparedStatement modificar=conectar.prepareStatement("update usuario set correo=?,contrasena=?,idrol=? where idUsuario=?");
            modificar.setString(1,data.getCorreo());
            modificar.setString(2,data.getContrasena());
            modificar.setInt(3,data.getRol().getIdrol());
            modificar.setInt(4,data.getIdUsuario());
            resp = modificar.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return resp;
        }
    }
    
    // Metodo modificoEstadoUsuario: modifica el estado de un solo usuario por el correo/idUsuario
    public int modificoEstadoUsuario (UsuarioVo data){
        int resp=-1;
        try {
            conectar();
            PreparedStatement modificarestado=conectar.prepareStatement("update usuario set estado=? where idUsuario=?");
            modificarestado.setInt(1, data.getEstado());
            modificarestado.setInt(2, data.getIdUsuario());
            resp = modificarestado.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return resp;
        }
    }
    
}
