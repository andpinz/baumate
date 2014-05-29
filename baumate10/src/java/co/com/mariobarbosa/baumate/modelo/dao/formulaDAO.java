/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import co.com.mariobarbosa.baumate.modelo.VO.formulaVO;
import co.com.mariobarbosa.baumate.modelo.VO.materialesVO;
import co.com.mariobarbosa.baumate.modelo.VO.unidadmedidaVO;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author sena
 */
public class formulaDAO extends Conexion{
    
    /*
      Metodos para desplegables de IdMaterial y IdTipoPiso que se requieren en el formulario de 
    formula
    */
   public formulaVO consutar(int codigo){
            formulaVO codigos = null;
        
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("select * from unidadmedida where idunidadmedida=?");
            sentenciasql.setInt(1, codigo);
            ResultSet resp = sentenciasql.executeQuery();
            if (resp.next()) {
                codigos = new formulaVO();
//                codigos.set;
//                codigos.setUnidadmedida(resp.getString("unidadmedida"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return codigos;
        }
    }
   
   
        
    
    /*
        CRUD completo para la tabla Formula
    */
    
    public int insertarformula (formulaVO data){
        int respuesta = -1;
        
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("insert into formula (idmaterial,idtipopiso,cantidad)"
            + "values (?,?,?)");
            sentenciasql.setInt(1, data.getIdmaterial().getIdmateriales());
            sentenciasql.setInt(2, data.getIdtipopiso().getCodigo());
            sentenciasql.setInt(3, data.getCantidad());
            respuesta = sentenciasql.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        } finally{
            desconectar();
            return respuesta;
        }
    }
    
    public int eliminarformula (int id){
        int respuesta = -1;
        
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("delete from formula where idformula=?");
            sentenciasql.setInt(1, id);
            respuesta = sentenciasql.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            desconectar();
            return respuesta;
        }
    }
    
    public ArrayList<formulaVO> Consultarformula(){
        ArrayList<formulaVO> Listaformula = new ArrayList<formulaVO>();
        
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("select * from formula");
            ResultSet resultado = sentenciasql.executeQuery();
            
            while (resultado.next()){
                int idf = resultado.getInt("idformula");
                int idm = resultado.getInt("idmaterial");
                int idtp = resultado.getInt("idtipopiso");
                int cantidad = resultado.getInt("cantidad");
                
                formulaVO data = new formulaVO();
                
                data.setIdformula(idf);
                data.setIdmaterial(new materialesDAO().consultar(idm));
                data.setIdtipopiso(new TiposPisosDAO().consultar(idtp) );
                data.setCantidad(cantidad);
                
                Listaformula.add(data);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return Listaformula;
        }
    }
    
    public formulaVO consultar1(int idmaterial, int idtipopiso){
        formulaVO respuesta = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT idformula,idmaterial,idtipopiso,cantidad from formula where idmaterial=? and idtipopiso=?");
            sentencia.setInt(1, idmaterial);
            sentencia.setInt(2, idtipopiso);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                respuesta = new formulaVO();
                respuesta.setIdformula(res.getInt("idformula"));
                respuesta.setIdmaterial(new  materialesDAO().consultar(res.getInt("idmaterial")));
                respuesta.setIdtipopiso(new  TiposPisosDAO().consultar(res.getInt("idtipopiso")));
                respuesta.setCantidad(res.getInt("cantidad"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return respuesta;
        }
}

    public formulaDAO() {
    }
    
    public int modificarFormula(formulaVO data){
        int respuesta = -1;
            try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("update formula set cantidad=? where idformula=?");

            sentenciasql.setInt(1, data.getCantidad());
            sentenciasql.setInt(2, data.getIdformula());
            
            respuesta=sentenciasql.executeUpdate();
            
        } catch (Exception e) {
        e.printStackTrace();
        }finally{
                desconectar();
                return respuesta;
            }
        
    }
    
    public ArrayList<formulaVO> buscarformula(int idtipopiso){
        ArrayList<formulaVO> Listaformula = new ArrayList<formulaVO>();
        
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("select * from formula where idtipopiso=? ");
            sentenciasql.setInt(1, idtipopiso);
            ResultSet resultado = sentenciasql.executeQuery();
            
            while (resultado.next()){
                int idf = resultado.getInt("idformula");
                int idm = resultado.getInt("idmaterial");
                int idtp = resultado.getInt("idtipopiso");
                int cantidad = resultado.getInt("cantidad");
                
                formulaVO data = new formulaVO();
                
                data.setIdformula(idf);
                data.setIdmaterial(new materialesDAO().consultar(idm));
                data.setIdtipopiso(new TiposPisosDAO().consultar(idtp));
                data.setCantidad(cantidad);
                
                Listaformula.add(data);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            desconectar();
            return Listaformula;
        }
    }
    
}
