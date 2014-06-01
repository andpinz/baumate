/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.controlador.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperRunManager;

/**
 *
 * @author hectorbohorquez
 */
@WebServlet(name = "ReporteServlet", urlPatterns = {"/reporte","/reportsolicitud"})
public class ReporteServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try {
            String url;
            url = request.getRequestURL().toString();
            if(url.contains("reporte")){
            reporteproveedores(request, response);
            }else if (url.contains("reportsolicitud")) {
                reporteSolicitud(request, response);
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ReporteServlet.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(ReporteServlet.class.getName()).log(Level.SEVERE, null, ex);
        } catch (JRException ex) {
            Logger.getLogger(ReporteServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
     private void reporteproveedores(HttpServletRequest request, HttpServletResponse response) throws ClassNotFoundException, SQLException, JRException, IOException {
       // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
            String rutaLogo = getServletContext().getRealPath("/imagenes") + "/logo.png";
            String rutaimgBD = getServletContext().getRealPath("/imagenesBD");
            String ruta = getServletContext().getRealPath("/Reportes")+"/Proveedores.jasper";
            Class.forName("com.mysql.jdbc.Driver");
            Connection cnn = DriverManager.getConnection("jdbc:mysql://localhost:3306/baumate", "root", "");
            Map<String, Object> parametro = new HashMap<>();
            parametro.put("logo", rutaLogo);
            parametro.put("logo", rutaimgBD);
            byte[] data = JasperRunManager.runReportToPdf(ruta, parametro, cnn);
            response.setContentType("application/pdf");
            response.setContentLength(data.length);
            ServletOutputStream salida = response.getOutputStream();
            salida.write(data);
            salida.flush();
            salida.close();
            cnn.close();
    
    }
     private void reporteSolicitud(HttpServletRequest request, HttpServletResponse response) throws ClassNotFoundException, SQLException, JRException, IOException {
       // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
            String rutaLogo = getServletContext().getRealPath("/imagenes") + "/logo.png";
            String ruta = getServletContext().getRealPath("/Reportes")+"/Ordendecompra.jasper";
            String idsolicitud = request.getParameter("idsolicitud");
            Class.forName("com.mysql.jdbc.Driver");
            Connection cnn = DriverManager.getConnection("jdbc:mysql://localhost:3306/baumate", "root", "");
            Map<String, Object> parametro = new HashMap<>();
            parametro.put("Logo", rutaLogo);
            parametro.put("idSolicitud", Integer.parseInt(idsolicitud));
            byte[] data = JasperRunManager.runReportToPdf(ruta, parametro, cnn);
            response.setContentType("application/pdf");
            response.setContentLength(data.length);
            ServletOutputStream salida = response.getOutputStream();
            salida.write(data);
            salida.flush();
            salida.close();
            cnn.close();
    
    }
    
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
