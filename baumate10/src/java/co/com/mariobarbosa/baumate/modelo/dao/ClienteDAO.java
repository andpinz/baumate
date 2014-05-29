
package co.com.mariobarbosa.baumate.modelo.dao;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import co.com.mariobarbosa.baumate.modelo.VO.TipoIdentificacionVO;
import co.com.mariobarbosa.baumate.modelo.VO.ClienteVO;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author Johanagt
 */
public class ClienteDAO extends Conexion{
     ///Mètodo permite modificar un cliente existente
//     
     public int modificar (ClienteVO data){
        int respuesta = -1;
       try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update cliente set tipodocumento=?,primerNombre=?,SegundoNombre=?,PrimerApellido=?,SegundoApellido=?, direccion=?, telefono=?, estado=?, Documento=?  where idCliente=?");
            sentencia.setInt(1, data.getIdtipoIdentificacion().getIdtipoIdentificacion());
            sentencia.setString(2, data.getPrimerNombre());
            sentencia.setString(3, data.getSegundoNombre());
            sentencia.setString(4, data.getPrimerApellido());
            sentencia.setString(5, data.getSegundoApellido());
            sentencia.setString(6, data.getDireccion());
            sentencia.setString(7, data.getTelefono());
            sentencia.setInt(8, data.getEstado());
            sentencia.setString(9, data.getDocumento());
            sentencia.setInt(10, data.getIdCliente());
                    
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
     
  ///Mètodo que permite insertar clientes
    public int insertar (ClienteVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("INSERT INTO cliente(Documento,tipodocumento,primerNombre,SegundoNombre,PrimerApellido,SegundoApellido, direccion, telefono,estado)"
                    +" VALUES (?,?,?,?,?,?,?,?,?)");
            
            sentencia.setString(1, data.getDocumento());
            sentencia.setInt(2, data.getIdtipoIdentificacion().getIdtipoIdentificacion());
            sentencia.setString(3, data.getPrimerNombre());
            sentencia.setString(4, data.getSegundoNombre());
            sentencia.setString(5, data.getPrimerApellido());
            sentencia.setString(6, data.getSegundoApellido());
            sentencia.setString(7, data.getDireccion());
            sentencia.setString(8, data.getTelefono());
            sentencia.setInt(9, data.getEstado());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    ///Mètodo que permite consultar todos los cliente
    public ArrayList<ClienteVO> listar(){
        ArrayList<ClienteVO> respuesta = new ArrayList<ClienteVO>();
        ClienteVO cliente = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idCliente, Documento,tipodocumento,primerNombre,SegundoNombre,PrimerApellido,SegundoApellido, direccion, telefono,estado FROM cliente");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                cliente = new ClienteVO();
               cliente.setIdCliente(res.getInt("idcliente"));
                cliente.setDocumento(res.getString("documento"));
                cliente.setIdtipoIdentificacion(new TipoIdentificacionDAO().consultar(res.getInt("tipodocumento")));
                cliente.setPrimerNombre(res.getString("primernombre"));
                cliente.setSegundoNombre(res.getString("segundonombre"));
                cliente.setPrimerApellido(res.getString("primerapellido"));
                cliente.setSegundoApellido(res.getString("segundoapellido"));
                cliente.setDireccion(res.getString("direccion"));
                cliente.setTelefono(res.getString("telefono"));
                cliente.setEstado(res.getInt("estado"));
                
                
                respuesta.add(cliente);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
     public ArrayList<ClienteVO> listar(String documento,int tipodoc){
        ArrayList<ClienteVO> respuesta = new ArrayList<ClienteVO>();
        ClienteVO cliente = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM cliente where Documento like concat('%',?,'%') and tipodocumento =? ");
            sentencia.setString(1, documento);
            sentencia.setInt(2, tipodoc);
             
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                cliente = new ClienteVO();
                cliente.setIdCliente(res.getInt("idcliente"));
                cliente.setDocumento(res.getString("documento"));
                cliente.setIdtipoIdentificacion(new TipoIdentificacionDAO().consultar(res.getInt("tipodocumento")));
                cliente.setPrimerNombre(res.getString("primernombre"));
                cliente.setSegundoNombre(res.getString("segundonombre"));
                cliente.setPrimerApellido(res.getString("primerapellido"));
                cliente.setSegundoApellido(res.getString("segundoapellido"));
                cliente.setDireccion(res.getString("direccion"));
                cliente.setTelefono(res.getString("telefono"));
                cliente.setEstado(res.getInt("estado"));
                
                respuesta.add(cliente);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    ///consulta un solo cliente en especifico
    public ClienteVO consultar(int id){
        ClienteVO cliente = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idCliente, Documento,tipodocumento,primerNombre,SegundoNombre,PrimerApellido,SegundoApellido, direccion, telefono, estado FROM cliente where idCliente=?");
            
            sentencia.setInt(1, id);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                cliente = new ClienteVO();
                cliente.setIdCliente(res.getInt("idcliente"));
                cliente.setDireccion(res.getString("direccion"));
                cliente.setDocumento(res.getString("documento"));
                cliente.setPrimerApellido(res.getString("primerapellido"));
                cliente.setPrimerNombre(res.getString("primerapellido"));
                cliente.setSegundoApellido(res.getString("segundoapellido"));
                cliente.setSegundoNombre(res.getString("segundonombre"));
                cliente.setTelefono(res.getString("telefono"));
                cliente.setEstado(res.getInt("estado"));
                cliente.setIdtipoIdentificacion(new TipoIdentificacionDAO().consultar(res.getInt("tipodocumento")));
                
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return cliente;
        }
    }
    public ClienteVO consultar(String documento){
        ClienteVO cliente = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idCliente, Documento,tipodocumento,primerNombre,SegundoNombre,PrimerApellido,SegundoApellido, direccion, telefono, estado FROM cliente where Documento=? and estado=1");
            
            sentencia.setString(1, documento);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                cliente = new ClienteVO();
                cliente.setIdCliente(res.getInt("idcliente"));
                cliente.setDocumento(res.getString("documento"));
                cliente.setIdtipoIdentificacion(new TipoIdentificacionDAO().consultar(res.getInt("tipodocumento")));
                cliente.setPrimerNombre(res.getString("primernombre"));
                cliente.setSegundoNombre(res.getString("segundonombre"));
                cliente.setPrimerApellido(res.getString("primerapellido"));
                cliente.setSegundoApellido(res.getString("segundoapellido"));
                cliente.setDireccion(res.getString("direccion"));
                cliente.setTelefono(res.getString("telefono"));
                cliente.setEstado(res.getInt("estado"));
            
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return cliente;
        }
    }
     public int eliminar (String documento){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update cliente set estado=0 where Documento=?");
            
            sentencia.setString(1, documento);
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
}