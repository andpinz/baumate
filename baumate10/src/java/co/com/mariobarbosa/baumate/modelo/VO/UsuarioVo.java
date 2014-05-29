package co.com.mariobarbosa.baumate.modelo.VO;

/**
 *
 * @author David Andres Gomez Zamora
 * 17-03-2014
 */

// Clase UsuarioVo: encapsula todos los datos de la Base de Datos usuario
public class UsuarioVo {

    private int idUsuario;
    private String correo;
    private String contrasena;
    private int estado;
    private RolVo rol = new RolVo();
    private EmpleadoVO empleado = new EmpleadoVO();

    /**
     * @return the idUsuario
     */
    public int getIdUsuario() {
        return idUsuario;
    }

    /**
     * @param idUsuario the idUsuario to set
     */
    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    /**
     * @return the correo
     */
    public String getCorreo() {
        return correo;
    }

    /**
     * @param correo the correo to set
     */
    public void setCorreo(String correo) {
        this.correo = correo;
    }

    /**
     * @return the contrasena
     */
    public String getContrasena() {
        return contrasena;
    }

    /**
     * @param contrasena the contrasena to set
     */
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    /**
     * @return the rol
     */
    public RolVo getRol() {
        return rol;
    }

    /**
     * @param rol the rol to set
     */
    public void setRol(RolVo rol) {
        this.rol = rol;
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
     * @return the empleado
     */
    public EmpleadoVO getEmpleado() {
        return empleado;
    }

    /**
     * @param empleado the empleado to set
     */
    public void setEmpleado(EmpleadoVO empleado) {
        this.empleado = empleado;
    }

}
