/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.mariobarbosa.baumate.modelo.dao;

import co.com.mariobarbosa.baumate.modelo.conexion.Conexion;
import co.com.mariobarbosa.baumate.modelo.VO.unidadmedidaVO;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author hectorbohorquez
 */
public class UnidadmedidaDAO extends Conexion {
    
       
      
        
         
//          
//                cliente = new ClienteVO();
//                cliente.setIdCliente(res.getInt("idcliente"));
//                cliente.setDocumento(res.getString("documento"));
//                cliente.setIdtipoIdentificacion(new TipoIdentificacionDAO().consultar(res.getInt("tipodocumento")));
//                cliente.setPrimerNombre(res.getString("primernombre"));
//                cliente.setSegundoNombre(res.getString("segundonombre"));
//                cliente.setPrimerApellido(res.getString("primerapellido"));
//                cliente.setSegundoApellido(res.getString("segundoapellido"));
//                cliente.setDireccion(res.getString("direccion"));
//                cliente.setTelefono(res.getString("telefono"));
//                cliente.setEstado(res.getInt("estado"));
//    

    public unidadmedidaVO consutar(int idunidadmedida) {
        unidadmedidaVO unidadmedida = null;

        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("select * from unidadmedida where idunidadmedida like concat('%',?,'%')");
            sentenciasql.setInt(1, idunidadmedida);
            ResultSet resp = sentenciasql.executeQuery();
            while (resp.next()) {
                unidadmedida = new unidadmedidaVO();
                unidadmedida.setIdunidadmedida(resp.getInt("idunidadmedida"));
                unidadmedida.setUnidadmedida(resp.getString("unidadmedida"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            desconectar();
            return unidadmedida;
        }
    }

    public ArrayList<unidadmedidaVO> consultar() {
        ArrayList<unidadmedidaVO> unidadmedidas = new ArrayList<unidadmedidaVO>();
        try {
            conectar();
            PreparedStatement sentenciasql = conectar.prepareStatement("select * from unidadmedida");
            ResultSet resp = sentenciasql.executeQuery();
            while (resp.next()) {
                unidadmedidaVO unidadmedida = new unidadmedidaVO();
                unidadmedida.setIdunidadmedida(resp.getInt("idunidadmedida"));
                unidadmedida.setUnidadmedida(resp.getString("unidadmedida"));
                unidadmedidas.add(unidadmedida);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            desconectar();
            return unidadmedidas;
        }
    }

    public ArrayList<unidadmedidaVO> listar(String idunidadmedida) {
        ArrayList<unidadmedidaVO> lista = new ArrayList<unidadmedidaVO>();
        unidadmedidaVO tipo = null;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("SELECT * FROM unidadmedida where unidadmedida like concat('%',?,'%') ");
            sentencia.setString(1, idunidadmedida);
            ResultSet resp = sentencia.executeQuery();

            while (resp.next()) {

                tipo = new unidadmedidaVO();
                tipo.setIdunidadmedida(resp.getInt("idunidadmedida"));
                tipo.setUnidadmedida(resp.getString("unidadmedida"));
                lista.add(tipo);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            return lista;
        }
    }

    public int insertar(unidadmedidaVO data) {
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("INSERT INTO unidadmedida(idunidadmedida,unidadmedida) VALUES (?,?)");

            sentencia.setInt(1, data.getIdunidadmedida());
            sentencia.setString(2, data.getUnidadmedida());

            respuesta = sentencia.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            desconectar();
            return respuesta;
        }
    }

    public int modificar(unidadmedidaVO data) {
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("update unidadmedida set unidadmedida=?" + " where idunidadmedida=? ");

            sentencia.setString(1, data.getUnidadmedida());

            sentencia.setInt(2, data.getIdunidadmedida());

            respuesta = sentencia.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            desconectar();
            return respuesta;
        }
    }

    public int eliminar(String idunidadmedida) {
        int respuesta = -1;
        try {
            conectar();
            PreparedStatement sentencia = conectar.prepareStatement("delete FROM unidadmedida where idunidadmedida = ?");

            sentencia.setString(1, idunidadmedida);
            respuesta = sentencia.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            desconectar();
            return respuesta;
        }
    }
}
