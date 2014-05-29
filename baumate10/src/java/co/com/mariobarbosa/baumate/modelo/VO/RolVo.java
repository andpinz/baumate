/**
 *
 * @author David Andres Gomez Zamora
 * 17-03-2014
 */

package co.com.mariobarbosa.baumate.modelo.VO;

/**
 *
 * @author David Andres Gomez Zamora
 * 17-03-2014
 */

// Calse RoVo: encapsula todos los datos de la Base de Datos rol
public class RolVo {
    private int idrol;
    private String nombrerol;

    /**
     * @return the idrol
     */
    public int getIdrol() {
        return idrol;
    }

    /**
     * @param idrol the idrol to set
     */
    public void setIdrol(int idrol) {
        this.idrol = idrol;
    }

    /**
     * @return the nombrerol
     */
    public String getNombrerol() {
        return nombrerol;
    }

    /**
     * @param nombrerol the nombrerol to set
     */
    public void setNombrerol(String nombrerol) {
        this.nombrerol = nombrerol;
    }
}
