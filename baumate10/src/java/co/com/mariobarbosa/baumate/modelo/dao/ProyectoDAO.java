/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.VO.CiudadVO;
import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import co.com.mariobarbosa.baumate.modelo.VO.ProyectoVO;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Date;

/**
 *
 * @author AndresFeLipe
 */
public class ProyectoDAO extends Conexion{
    
    ///JC 14/03/2014 {
    ///este metodo modifica un proyecto ya existente
    public int modificar (ProyectoVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update proyecto set nombre=?,idciudad=?,fechainicio=?,fechafinal=?,direccion=?,estado=?,ganancias=?, totalPresupuesto=?,idventa=? where idproyecto=?");
            
            sentencia.setString(1, data.getNombre());
            sentencia.setInt(2, data.getIdciudad().getIdciudad());
            sentencia.setString(3, data.getFechainicio());
            sentencia.setString(4, data.getFechafinal());
            sentencia.setString(5, data.getDireccion());
            sentencia.setInt(6, data.getEstado());
            sentencia.setDouble(7, data.getGanancias());
            sentencia.setDouble(8, data.getTotalPresupuesto());
            sentencia.setInt(9, data.getIdproyecto());
            sentencia.setInt(10, data.getIdventa().getIdventa());
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    /// este metodo elimina (en forma logica) el proyecto (estado=1 es activo, estado=0 es inactivo)
    public int eliminar (int id){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update proyecto set estado=0 where idproyecto=?");
            sentencia.setInt(1, id);
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    //inserta un proyecto en la tabla de proyecto
    public int insertar (ProyectoVO data){
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("INSERT INTO proyecto(Nombre,idciudad,fechainicio,fechafinal,direccion,estado,ganancias,totalPresupuesto,idventa) VALUES (?,?,?,?,?,?,?,?,?)");
            
            //sentencia.setInt(1, data.getIdproyecto());
            sentencia.setString(1, data.getNombre());
            sentencia.setInt(2, data.getIdciudad().getIdciudad());
            sentencia.setString(3, data.getFechainicio());
            sentencia.setString(4, data.getFechafinal());
            sentencia.setString(5, data.getDireccion());
            sentencia.setInt(6, data.getEstado());
            sentencia.setDouble(7, data.getGanancias());
            sentencia.setDouble(8, data.getTotalPresupuesto());
            sentencia.setInt(9, data.getIdventa().getIdventa());
            
            respuesta = sentencia.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    /// consulta todos los proyectos
    public ArrayList<ProyectoVO> listar(){
        ArrayList<ProyectoVO> respuesta = new ArrayList<ProyectoVO>();
        ProyectoVO proyecto = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idproyecto,Nombre,idciudad,fechainicio,fechafinal,direccion,estado,ganancias,totalPresupuesto,idempleado,idventa FROM proyecto where estado=1");
                        
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                proyecto = new ProyectoVO();
                proyecto.setIdproyecto(res.getInt("idproyecto"));
                proyecto.setNombre(res.getString("Nombre"));
                proyecto.setIdciudad(new CiudadDAO().consultar(res.getInt("idciudad")));
                proyecto.setFechainicio(res.getDate("fechainicio").toString());
                proyecto.setFechafinal(res.getDate("fechafinal").toString());
                proyecto.setDireccion(res.getString("direccion"));
                proyecto.setEstado(res.getInt("estado"));
                proyecto.setGanancias(res.getDouble("ganancias"));
                proyecto.setTotalPresupuesto(res.getDouble("totalPresupuesto"));
                proyecto.setIdventa(new VentaDAO().consultar(res.getInt("idventa")));
                //proyecto.setIdempleado();
                respuesta.add(proyecto);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    public ArrayList<ProyectoVO> listar(String nombproy, int ciudad){
        ArrayList<ProyectoVO> respuesta = new ArrayList<ProyectoVO>();
        ProyectoVO proyecto = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM proyecto where Nombre like concat('%',?,'%') and idciudad =? and estado=1 order by Nombre");
            sentencia.setString(1, nombproy);
            sentencia.setInt(2, ciudad);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                proyecto = new ProyectoVO();
                proyecto.setIdproyecto(res.getInt("idproyecto"));
                proyecto.setNombre(res.getString("Nombre"));
                proyecto.setIdciudad(new CiudadDAO().consultar(res.getInt("idciudad")));
                proyecto.setFechainicio(res.getDate("fechainicio").toString());
                proyecto.setFechafinal(res.getDate("fechafinal").toString());
                proyecto.setDireccion(res.getString("direccion"));
                proyecto.setEstado(res.getInt("estado"));
                proyecto.setGanancias(res.getDouble("ganancias"));
                proyecto.setTotalPresupuesto(res.getDouble("totalPresupuesto"));
                proyecto.setIdventa(new VentaDAO().consultar(res.getInt("idventa")));
                //proyecto.setIdempleado();
                respuesta.add(proyecto);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    ///consulta un solo proyecto en especifico
    public ProyectoVO consultar(int id){
        ProyectoVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idproyecto,Nombre,idciudad,fechainicio,fechafinal,direccion,estado,ganancias,totalPresupuesto,idempleado,idventa FROM proyecto where idproyecto=? and estado=1");
            sentencia.setInt(1, id);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                respuesta = new ProyectoVO();
                respuesta.setIdproyecto(res.getInt("idproyecto"));
                respuesta.setNombre(res.getString("Nombre"));
                respuesta.setIdciudad(new CiudadDAO().consultar(res.getInt("idciudad")));
                respuesta.setFechainicio(res.getDate("fechainicio").toString());
                respuesta.setFechafinal(res.getDate("fechafinal").toString());
                respuesta.setDireccion(res.getString("direccion"));
                respuesta.setEstado(res.getInt("estado"));
                respuesta.setGanancias(res.getDouble("ganancias"));
                respuesta.setTotalPresupuesto(res.getDouble("totalPresupuesto"));
                respuesta.setIdventa(new VentaDAO().consultar(res.getInt("idventa")));
                //proyecto.setIdempleado();
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
    /// } JC 14/03/2014
    
    // JC 16/03/2014 {
    public ArrayList<ProyectoVO> listar (String nombre){
        ArrayList<ProyectoVO> lista = new ArrayList<ProyectoVO>();
        ProyectoVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM proyecto where Nombre like concat('%',?,'%')");
            sentencia.setString(1, nombre);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                respuesta = new ProyectoVO();
                respuesta.setIdproyecto(res.getInt("idproyecto"));
                respuesta.setNombre(res.getString("Nombre"));
                respuesta.setIdciudad(new CiudadDAO().consultar(res.getInt("idciudad")));
                respuesta.setFechainicio(res.getDate("fechainicio").toString());
                respuesta.setFechafinal(res.getDate("fechafinal").toString());
                respuesta.setDireccion(res.getString("direccion"));
                respuesta.setEstado(res.getInt("estado"));
                respuesta.setGanancias(res.getDouble("ganancias"));
                respuesta.setTotalPresupuesto(res.getDouble("totalPresupuesto"));
                respuesta.setIdventa(new VentaDAO().consultar(res.getInt("idventa")));
                //proyecto.setIdempleado();
                 lista.add(respuesta);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return lista;
        }
    }
    /// } JC 16/03/2014
    
    public ProyectoVO consultarUltimo(){
        ProyectoVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idproyecto,Nombre,idciudad,fechainicio,fechafinal,direccion,estado,ganancias,totalPresupuesto,idempleado,idventa FROM proyecto where estado=1 order by idproyecto desc Limit 1");
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                respuesta = new ProyectoVO();
                respuesta.setIdproyecto(res.getInt("idproyecto"));
                respuesta.setNombre(res.getString("Nombre"));
                respuesta.setIdciudad(new CiudadDAO().consultar(res.getInt("idciudad")));
                respuesta.setFechainicio(res.getDate("fechainicio").toString());
                respuesta.setFechafinal(res.getDate("fechafinal").toString());
                respuesta.setDireccion(res.getString("direccion"));
                respuesta.setEstado(res.getInt("estado"));
                respuesta.setGanancias(res.getDouble("ganancias"));
                respuesta.setTotalPresupuesto(res.getDouble("totalPresupuesto"));
                respuesta.setIdventa(new VentaDAO().consultar(res.getInt("idventa")));
                //proyecto.setIdempleado();
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
    }
    
}
