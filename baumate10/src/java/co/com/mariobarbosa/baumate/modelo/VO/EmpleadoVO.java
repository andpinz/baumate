/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.modelo.VO;

/**
 *
 * @author jose
 */
public class EmpleadoVO {
    private int idempleado;
    private String primernombre;
    private String segundonombre;
    private String primerapellido;
    private String segundoapellido;
    private String direccion;
    private String telefono;
    private double salario;
    private String fechanacimiento;
    private CargoVO idcargo;
    private TipoIdentificacionVO tipodocumento;
    private String documento;
    private int estado;

    /**
     * @return the idempleado
     */
    public int getIdempleado() {
        return idempleado;
    }

    /**
     * @param idempleado the idempleado to set
     */
    public void setIdempleado(int idempleado) {
        this.idempleado = idempleado;
    }

    /**
     * @return the primernombre
     */
    public String getPrimernombre() {
        return primernombre;
    }

    /**
     * @param primernombre the primernombre to set
     */
    public void setPrimernombre(String primernombre) {
        this.primernombre = primernombre;
    }

    /**
     * @return the segundonombre
     */
    public String getSegundonombre() {
        return segundonombre;
    }

    /**
     * @param segundonombre the segundonombre to set
     */
    public void setSegundonombre(String segundonombre) {
        this.segundonombre = segundonombre;
    }

    /**
     * @return the primerapellido
     */
    public String getPrimerapellido() {
        return primerapellido;
    }

    /**
     * @param primerapellido the primerapellido to set
     */
    public void setPrimerapellido(String primerapellido) {
        this.primerapellido = primerapellido;
    }

    /**
     * @return the segundoapellido
     */
    public String getSegundoapellido() {
        return segundoapellido;
    }

    /**
     * @param segundoapellido the segundoapellido to set
     */
    public void setSegundoapellido(String segundoapellido) {
        this.segundoapellido = segundoapellido;
    }

    /**
     * @return the direccion
     */
    public String getDireccion() {
        return direccion;
    }

    /**
     * @param direccion the direccion to set
     */
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    /**
     * @return the telefono
     */
    public String getTelefono() {
        return telefono;
    }

    /**
     * @param telefono the telefono to set
     */
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    /**
     * @return the salario
     */
    public double getSalario() {
        return salario;
    }

    /**
     * @param salario the salario to set
     */
    public void setSalario(double salario) {
        this.salario = salario;
    }

    /**
     * @return the fechanacimiento
     */
    public String getFechanacimiento() {
        return fechanacimiento;
    }

    /**
     * @param fechanacimiento the fechanacimiento to set
     */
    public void setFechanacimiento(String fechanacimiento) {
        this.fechanacimiento = fechanacimiento;
    }

  

    /**
     * @return the documento
     */
    public String getDocumento() {
        return documento;
    }

    /**
     * @param documento the documento to set
     */
    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public CargoVO getIdcargo() {
        return idcargo;
    }

    public void setIdcargo(CargoVO idcargo) {
        this.idcargo = idcargo;
    }

    public TipoIdentificacionVO getTipodocumento() {
        return tipodocumento;
    }

    public void setTipodocumento(TipoIdentificacionVO tipodocumento) {
        this.tipodocumento = tipodocumento;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }
    
    
}
