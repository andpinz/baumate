/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.EmpleadoVO;
import co.com.mariobarbosa.baumate.modelo.VO.TipoIdentificacionVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author AndresFeLipe
 */
public class EmpleadoDAO extends Conexion {
    
       public int insertar (EmpleadoVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("INSERT INTO empleado(primernombre,segundonombre,primerapellido,segundoapellido,direccion,telefono,salario,fechanacimiento,idcargo,tipodocumento,documento,estado) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)");
            
            
            sentencia.setString(1, data.getPrimernombre());
            sentencia.setString(2, data.getSegundonombre());
            sentencia.setString(3, data.getPrimerapellido());
            sentencia.setString(4, data.getSegundoapellido());
            sentencia.setString(5, data.getDireccion());
            sentencia.setString(6, data.getTelefono());
            sentencia.setDouble(7, data.getSalario());
            sentencia.setString(8, data.getFechanacimiento());
            sentencia.setInt(9, data.getIdcargo().getIdcargo());
            sentencia.setInt(10, data.getTipodocumento().getIdtipoIdentificacion());
            sentencia.setString(11, data.getDocumento());
            sentencia.setInt(12, data.getEstado());
            
           
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
       
        public ArrayList<EmpleadoVO> listar (String documento, String nombre){
        ArrayList<EmpleadoVO> lista = new ArrayList<EmpleadoVO>();
        EmpleadoVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia=conectar.prepareStatement("SELECT * FROM empleado WHERE  documento LIKE concat('%',?,'%') and CONCAT(primernombre,' ',segundonombre,' ' , primerapellido,'',segundoapellido) LIKE concat('%',?,'%') and estado =1");
            sentencia.setString(1,documento);
            sentencia.setString(2,nombre);
            ResultSet resp=sentencia.executeQuery();
            
            while(resp.next()){
                
                tipo=new EmpleadoVO();
                tipo.setIdempleado(resp.getInt("idempleado"));
                tipo.setPrimernombre(resp.getString("primernombre"));
                tipo.setSegundonombre(resp.getString("segundonombre"));
                tipo.setPrimerapellido(resp.getString("primerapellido"));
                tipo.setSegundoapellido(resp.getString("segundoapellido"));
                tipo.setDireccion(resp.getString("direccion"));
                tipo.setTelefono(resp.getString("telefono"));
                tipo.setSalario(resp.getDouble("salario"));
                tipo.setFechanacimiento(resp.getString("fechanacimiento"));
                tipo.setIdcargo(new CargoDAO().consultar(resp.getString("idcargo")));
                tipo.setTipodocumento(new TipoIdentificacionDAO().consultar(resp.getInt("tipodocumento")));
                tipo.setDocumento(resp.getString("documento"));
                tipo.setEstado(resp.getInt("estado"));
                
                lista.add(tipo);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            return lista;
        }
     }
        
        public ArrayList<EmpleadoVO> listar(){
        ArrayList<EmpleadoVO> respuesta = new ArrayList<EmpleadoVO>();
        EmpleadoVO pro = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM empleado where estado = 1");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                pro = new EmpleadoVO();
               pro.setIdempleado(res.getInt("idempleado"));
                pro.setPrimernombre(res.getString("primernombre"));
                pro.setSegundonombre(res.getString("segundonombre"));
                pro.setPrimerapellido(res.getString("primerapellido"));
                pro.setSegundoapellido(res.getString("segundoapellido"));
                pro.setDireccion(res.getString("direccion"));
                pro.setTelefono(res.getString("telefono"));
                pro.setSalario(res.getDouble("salario"));
                pro.setFechanacimiento(res.getString("fechanacimiento"));
                pro.setIdcargo(new CargoDAO().consultar(res.getString("idcargo")));
                pro.setTipodocumento(new TipoIdentificacionDAO().consultar(res.getInt("tipodocumento")));
                pro.setDocumento(res.getString("documento"));
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
        
        public EmpleadoVO consultar(int documento){
        EmpleadoVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT primernombre,segundonombre,primerapellido,segundoapellido,direccion,telefono,salario,DATE_FORMAT(fechanacimiento,'%Y-%m-%d') fechanacimiento,idcargo,tipodocumento,documento,estado FROM empleado where"
                    + " documento=?");
            
            sentencia.setInt(1, documento);
           
            ResultSet resp = sentencia.executeQuery();
            if (resp.next()) {
                tipo = new EmpleadoVO();
//                tipo.setDocumento(resp.getString(documento));
                tipo.setPrimernombre(resp.getString("primernombre"));
                tipo.setSegundonombre(resp.getString("segundonombre"));
                tipo.setPrimerapellido(resp.getString("primerapellido"));
                tipo.setSegundoapellido(resp.getString("segundoapellido"));
                tipo.setDireccion(resp.getString("direccion"));
                tipo.setTelefono(resp.getString("telefono"));
                tipo.setSalario(resp.getDouble("salario"));
                tipo.setFechanacimiento(resp.getString("fechanacimiento"));
                tipo.setIdcargo(new CargoDAO().consultar(resp.getString("idcargo")));
                tipo.setTipodocumento(new TipoIdentificacionDAO().consultar(resp.getInt("tipodocumento")));
                tipo.setDocumento(resp.getString("documento"));
                tipo.setEstado(resp.getInt("estado"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return tipo;
        }
        }
        
        public int modificar (EmpleadoVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update empleado set primernombre=?,segundonombre=?,primerapellido=?,segundoapellido=?,direccion=?,telefono=?,salario=?,fechanacimiento=?,idcargo=?,tipodocumento=?,estado=? "+" where documento=? ");
            
            
            
            sentencia.setString(1, data.getPrimernombre());
            sentencia.setString(2, data.getSegundonombre());
            sentencia.setString(3, data.getPrimerapellido());
            sentencia.setString(4, data.getSegundoapellido());
            sentencia.setString(5, data.getDireccion());
            sentencia.setString(6, data.getTelefono());
            sentencia.setDouble(7, data.getSalario());
            sentencia.setString(8, data.getFechanacimiento());
            sentencia.setInt(9, data.getIdcargo().getIdcargo());
            sentencia.setInt(10, data.getTipodocumento().getIdtipoIdentificacion());
            sentencia.setInt(11, data.getEstado());
            sentencia.setString(12, data.getDocumento());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
        
        public int eliminar (int documento){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update empleado set estado=0 where documento=?");
            
            sentencia.setInt(1, documento);
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
}
