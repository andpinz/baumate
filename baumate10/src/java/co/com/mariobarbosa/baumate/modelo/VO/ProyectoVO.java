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
public class ProyectoVO {
    
    private int idproyecto;
    private String Nombre;
    private CiudadVO idciudad;
    private String fechainicio;
    private String fechafinal;
    private String direccion;
    private int estado;
    private double ganancias;
    private double totalPresupuesto;
    private double proyectocol;
    private EmpleadoVO idempleado;
    private VentaVO idventa;

    /**
     * @return the idproyecto
     */
    public int getIdproyecto() {
        return idproyecto;
    }

    /**
     * @param idproyecto the idproyecto to set
     */
    public void setIdproyecto(int idproyecto) {
        this.idproyecto = idproyecto;
    }

    /**
     * @return the Nombre
     */
    public String getNombre() {
        return Nombre;
    }

    /**
     * @param Nombre the Nombre to set
     */
    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

     /**
     * @return the fechainicio
     */
    public String getFechainicio() {
        return fechainicio;
    }

    /**
     * @param fechainicio the fechainicio to set
     */
    public void setFechainicio(String fechainicio) {
        this.fechainicio = fechainicio;
    }

    /**
     * @return the fechafinal
     */
    public String getFechafinal() {
        return fechafinal;
    }

    /**
     * @param fechafinal the fechafinal to set
     */
    public void setFechafinal(String fechafinal) {
        this.fechafinal = fechafinal;
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

    /**
     * @return the ganancias
     */
    public double getGanancias() {
        return ganancias;
    }

    /**
     * @param ganancias the ganancias to set
     */
    public void setGanancias(double ganancias) {
        this.ganancias = ganancias;
    }

    /**
     * @return the totalPresupuesto
     */
    public double getTotalPresupuesto() {
        return totalPresupuesto;
    }

    /**
     * @param totalPresupuesto the totalPresupuesto to set
     */
    public void setTotalPresupuesto(double totalPresupuesto) {
        this.totalPresupuesto = totalPresupuesto;
    }

    /**
     * @return the proyectocol
     */
    public double getProyectocol() {
        return proyectocol;
    }

    /**
     * @param proyectocol the proyectocol to set
     */
    public void setProyectocol(double proyectocol) {
        this.proyectocol = proyectocol;
    }

    /**
     * @return the idciudad
     */
    public CiudadVO getIdciudad() {
        return idciudad;
    }

    /**
     * @param idciudad the idciudad to set
     */
    public void setIdciudad(CiudadVO idciudad) {
        this.idciudad = idciudad;
    }

    /**
     * @return the idempleado
     */
    public EmpleadoVO getIdempleado() {
        return idempleado;
    }

    /**
     * @param idempleado the idempleado to set
     */
    public void setIdempleado(EmpleadoVO idempleado) {
        this.idempleado = idempleado;
    }

    /**
     * @return the idventa
     */
    public VentaVO getIdventa() {
        return idventa;
    }

    /**
     * @param idventa the idventa to set
     */
    public void setIdventa(VentaVO idventa) {
        this.idventa = idventa;
    }

  
}
