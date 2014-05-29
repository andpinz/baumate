/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.VO;

/**
 *
 * @author hectorbohorquez
 */
public class VentaVO {
    
    private int idventa;
    private String nombreventa;
    private String fecha;
    private int identificacion;
    private String valor;
    private ClienteVO idcliente;
    private int estado;

    public int getIdventa() {
        return idventa;
    }

    public void setIdventa(int idventa) {
        this.idventa = idventa;
    }

    public String getNombreventa() {
        return nombreventa;
    }

    public void setNombreventa(String nombreventa) {
        this.nombreventa = nombreventa;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public int getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(int identificacion) {
        this.identificacion = identificacion;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    public ClienteVO getIdcliente() {
        return idcliente;
    }

    public void setIdcliente(ClienteVO idcliente) {
        this.idcliente = idcliente;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }
    
    
    
}
