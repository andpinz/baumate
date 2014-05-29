/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.mariobarbosa.baumate.modelo.VO;

/**
 *
 * @author Johanagt
 */
public class ClienteVO {


    private int idCliente; 
    private String Documento;
    private String primerNombre;
    private String SegundoNombre;
    private String PrimerApellido;
    private String SegundoApellido;
    private String direccion;
    private String telefono;
    private TipoIdentificacionVO idtipoIdentificacion;
    private int estado;

    /**
     * @return the idCliente
     */
    public int getIdCliente() {
        return idCliente;
    }

    /**
     * @param idCliente the idCliente to set
     */
    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    /**
     * @return the Documento
     */
    public String getDocumento() {
        return Documento;
    }

    /**
     * @param Documento the Documento to set
     */
    public void setDocumento(String Documento) {
        this.Documento = Documento;
    }

    /**
     * @return the primerNombre
     */
    public String getPrimerNombre() {
        return primerNombre;
    }

    /**
     * @param primerNombre the primerNombre to set
     */
    public void setPrimerNombre(String primerNombre) {
        this.primerNombre = primerNombre;
    }

    /**
     * @return the SegundoNombre
     */
    public String getSegundoNombre() {
        return SegundoNombre;
    }

    /**
     * @param SegundoNombre the SegundoNombre to set
     */
    public void setSegundoNombre(String SegundoNombre) {
        this.SegundoNombre = SegundoNombre;
    }

    /**
     * @return the PrimerApellido
     */
    public String getPrimerApellido() {
        return PrimerApellido;
    }

    /**
     * @param PrimerApellido the PrimerApellido to set
     */
    public void setPrimerApellido(String PrimerApellido) {
        this.PrimerApellido = PrimerApellido;
    }

    /**
     * @return the SegundoApellido
     */
    public String getSegundoApellido() {
        return SegundoApellido;
    }

    /**
     * @param SegundoApellido the SegundoApellido to set
     */
    public void setSegundoApellido(String SegundoApellido) {
        this.SegundoApellido = SegundoApellido;
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
     * @return the idtipoIdentificacion
     */
    public TipoIdentificacionVO getIdtipoIdentificacion() {
        return idtipoIdentificacion;
    }

    /**
     * @param idtipoIdentificacion the idtipoIdentificacion to set
     */
    public void setIdtipoIdentificacion(TipoIdentificacionVO idtipoIdentificacion) {
        this.idtipoIdentificacion = idtipoIdentificacion;
    }

    /**
     * @return the estado
     */
    public int getEstado() {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(int estado) {
        this.estado = estado;
    }
  }
