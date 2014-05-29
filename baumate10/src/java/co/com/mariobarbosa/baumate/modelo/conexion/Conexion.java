package co.com.mariobarbosa.baumate.modelo.conexion;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
/**
 *
 * @author DavidAndres
 */
public class Conexion {
protected Connection conectar;
protected void conectar (){
    try {
      Class.forName("com.mysql.jdbc.Driver");
      conectar=DriverManager.getConnection("jdbc:mysql://localhost:3306/baumate","root","");
    } catch (Exception e) {
        e.printStackTrace();
    }
}
protected void desconectar (){
    try {
        conectar.close();
    } catch (SQLException ex) {
        ex.printStackTrace();
    }
}
}
