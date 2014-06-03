/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.com.mariobarbosa.baumate.controlador.servlet;

import co.com.mariobarbosa.baumate.modelo.VO.ActividadesVO;
import co.com.mariobarbosa.baumate.modelo.VO.CargoVO;
import co.com.mariobarbosa.baumate.modelo.VO.CiudadVO;
import co.com.mariobarbosa.baumate.modelo.VO.ClienteVO;
import co.com.mariobarbosa.baumate.modelo.VO.EmpleadoVO;
import co.com.mariobarbosa.baumate.modelo.VO.IdentificacionVentaVO;
import co.com.mariobarbosa.baumate.modelo.VO.MaterialOfrecidoVO;
import co.com.mariobarbosa.baumate.modelo.VO.ProveedoresVO;
import co.com.mariobarbosa.baumate.modelo.VO.ProyectoVO;
import co.com.mariobarbosa.baumate.modelo.VO.RolVo;
import co.com.mariobarbosa.baumate.modelo.VO.SolicitudAsignadaVO;
import co.com.mariobarbosa.baumate.modelo.VO.SolicitudVO;
import co.com.mariobarbosa.baumate.modelo.VO.TipoIdentificacionVO;
import co.com.mariobarbosa.baumate.modelo.VO.TiposPisosVO;
import co.com.mariobarbosa.baumate.modelo.VO.UsuarioVo;
import co.com.mariobarbosa.baumate.modelo.VO.VentaVO;
import co.com.mariobarbosa.baumate.modelo.VO.formulaVO;
import co.com.mariobarbosa.baumate.modelo.dao.ActividadesDAO;
import co.com.mariobarbosa.baumate.modelo.dao.CargoDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import co.com.mariobarbosa.baumate.modelo.dao.CiudadDAO;
import co.com.mariobarbosa.baumate.modelo.dao.ClienteDAO;
import co.com.mariobarbosa.baumate.modelo.dao.ProveedoresDAO;
import co.com.mariobarbosa.baumate.modelo.dao.ProyectoDAO;
import co.com.mariobarbosa.baumate.modelo.dao.RolDao;
import co.com.mariobarbosa.baumate.modelo.dao.TipoIdentificacionDAO;
import co.com.mariobarbosa.baumate.modelo.dao.TiposPisosDAO;
import co.com.mariobarbosa.baumate.modelo.dao.UnidadmedidaDAO;
import co.com.mariobarbosa.baumate.modelo.dao.UsuarioDao;
import co.com.mariobarbosa.baumate.modelo.dao.materialesDAO;
import co.com.mariobarbosa.baumate.modelo.dao.tipomaterialDAO;
import co.com.mariobarbosa.baumate.modelo.VO.materialesVO;
import co.com.mariobarbosa.baumate.modelo.VO.tipomaterialVO;
import co.com.mariobarbosa.baumate.modelo.VO.unidadmedidaVO;
import co.com.mariobarbosa.baumate.modelo.dao.EmpleadoDAO;
import co.com.mariobarbosa.baumate.modelo.dao.IdentificacionVentaDAO;
import co.com.mariobarbosa.baumate.modelo.dao.MaterialOfrecidoDAO;
import co.com.mariobarbosa.baumate.modelo.dao.SolicitudAsignadaDAO;
import co.com.mariobarbosa.baumate.modelo.dao.SolicitudDAO;
import co.com.mariobarbosa.baumate.modelo.dao.VentaDAO;
import co.com.mariobarbosa.baumate.modelo.dao.formulaDAO;
import com.google.gson.reflect.TypeToken;
import com.google.gson.Gson;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpSession;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperRunManager;

/**
 *
 * @author jose
 */
@WebServlet(name = "servlet", urlPatterns = {"/servlet","/listarproyectos","/consultarproyecto","/insertarproyecto",
                                            "/actualizarproyectos","/eliminarproyecto",
                                            "/listarciudades","/buscarproyecto",
                                            "/listartipopisos",
                                            "/buscaractividad","/consultaractividad","/insertaractividad",
                                            "/listaractividad","/actualizaractividad","/eliminaractividad",
                                            "/insertarproveedores",
                                            "/listarproveedores","/consultarproveedores","/modificarproveedores",
                                            "/eliminarproveedores","/buscarproveedores",
                                            "/insertarcargo","/listarcargo","/consultarcargo",
                                            "/modificarcargo","/buscarcargo","/eliminarcargo",
                                            "/listarunidadmedida","/guardarmaterial","/modificarmateriales","/listartipoMaterial",
                                            "/listarmaterial", "/buscarmaterial", "/consultarmaterial",
                                            "/eliminarmateriales","/guardartipomaterial","/listartipomaterial",
                                            "/consultartipomaterial", "/modificartipomateriales","/eliminartipomateriales",
                                            "/listarcliente","/consultarcliente","/insertarcliente",
                                            "/actualizarcliente","/eliminarcliente","/buscarcliente",
                                            "/listartipodocumento","/ingresartipodocumento",
                                            "/modificartipodocumento","/eliminartipodocumento","/consultartipodocumento",
                                            "/buscartipodocumento","/ingresartipopiso",
                                            "/modificartipopiso","/eliminartipopiso","/consultartipopiso",
                                            "/buscartipopiso",
                                            //----------
                                            //David Lun 26 de May de 2014
                                            "/iniciarsesion","/verificarseguridad","/cerrarsesion","/bloqueousuario",
                                            "/ingresousuario","/modificarusuario","/listarusuario","/buscarusuario",
                                            "/buscarestadousuario","/modificarestadousuario",
                                            "/ingresarrol","/insertarrol","/nuevorol","/listarrol","/buscarrol","/modificarrol",
                                            //----------
                                            "/ingresarempleado",
                                            "/buscarformulas","/consultarprecio","/consultarpreciproveedor",
                                            "/insertarempleado","/listarempleado","/consultarempleado","/modificarempleado",
                                            "/buscarempleado","/eliminarempleado","/insertarunidadmedida","/listarunidadmedida",
                                            "/consultarunidadmedida","/modificarunidadmedida",
                                            "/insertarventa","/modificarventa","/consultarventa","/listarventa","/eliminarventa","/listarclinetes",
                                            "/consultarclienteparaid","/buscarventa","/insertarmatofrecido","/modificarmatofrecido",
                                            "/consultarmatofrecido","/eliminarmatofrecido",
                                            "/insertarformula","/modificarformula","/consultarformula","/eliminarformula","/buscarformula",
                                            "/listarformula",
                                             "/listarmatofrecido","/buscarmatofrecido","/guardarsolicitud","/listarsolicitudes","/consultarsolicitudes",
                                            "/buscarsolicitud","/modificarsolicitud","/eliminarsolicitud","/consultarcolicitudasignada","/modificarsolicitudasignada",

                                            "/rep1" ,"/modificarSolicitudFechaRecibido","/consultarsolicasignadas","/modificarsolicasignadas",
                                            "/insertarciudad","/cargarcliente","/insertaridentiventa","/consultaridentiventa","/modificaridentiventa","/buscaridentiventas","/listaridentiventa",
                                            "/eliminaridentiventa","/insertarciudad"})
public class servlet extends HttpServlet {

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
            throws ServletException, IOException, ClassNotFoundException, SQLException, JRException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            String url;
            url = request.getRequestURL().toString();
            if (url.contains("listarciudades")){
                listarCiudades(request, response, out);
            }else if(url.contains("listarproyectos")){
                listarProyectos(request, response, out);
            }else if(url.contains("consultarproyecto")){
                consultarProyecto(request, response, out);
            }else if(url.contains("insertarproyecto")){
                insertarProyecto(request, response, out);
            }else if(url.contains("actualizarproyectos")){
                actualizarProyectos(request, response, out);
            }else if(url.contains("eliminarproyecto")){
                eliminarProyecto(request, response, out);
            }else if(url.contains("buscarproyecto")){
                buscarProyecto(request, response, out);
            }else if(url.contains("listartipopisos")){
                listarTipoPisos(request, response, out);
            }else if(url.contains("buscaractividad")){
                buscarActividad(request, response, out);
            }else if(url.contains("consultaractividad")){
                consultarActividad(request, response, out);
            }else if(url.contains("insertaractividad")){
                insertarActividad(request, response, out);
            }else if(url.contains("listaractividad")){
                listarActividad(request, response, out);
            }else if(url.contains("actualizaractividad")){
                actualizarActividad(request, response, out);
            }else if(url.contains("eliminaractividad")){
                eliminarActividad(request, response, out);
            }else if(url.contains("insertarproveedores")){
                insertarProveedores(request, response, out);
            }else if(url.contains("listarproveedores")){
                listarproveedores(request, response, out);
            }else if(url.contains("consultarproveedores")){
                consultarproveedores(request, response, out);
            }else if(url.contains("buscarproveedores")){
                buscarProveedores(request, response, out);
            }else if(url.contains("modificarproveedores")){
                modificarproveedores(request, response, out);
            }else if(url.contains("eliminarproveedores")){
                eliminarProveedores(request, response, out);
            }else if(url.contains("insertarcargo")){
                insertarCargo(request, response, out);
            }else if(url.contains("listarcargo")){
                listarcargo(request, response, out);
            }else if(url.contains("consultarcargo")){
                consultarcargo(request, response, out);
            }else if(url.contains("modificarcargo")){
                modificarcargo(request, response, out);
            }else if(url.contains("buscarcargo")){
                buscarcargo(request, response, out);
            }else if(url.contains("eliminarcargo")){
                eliminarcargo(request, response, out);
            }else if (url.contains("guardarmaterial")) {
                insertarMaterial (request, response, out);                
            } else if(url.contains("consultarmaterial")){
                consultarMaterial (request,response, out);                
            }else if(url.contains("eliminarmateriales")){
                eliminarMaterial(request,response, out);                
            }else if(url.contains("modificarmateriales")){
                ModificarMaterial(request,response, out);                
            }else if (url.contains("listarunidadmedida")) {
                listarunidadmedida(request,response,  out);                
            }else if (url.contains("listartipoMaterial")){
                listartipoMaterial(request, response, out);                
            }else if (url.contains("listarmaterial")) {
                listarmaterial(request, response, out);                
            }else if (url.contains(("guardartipomaterial"))) {
                guardartipomaterial(request, response, out);                
            }else if (url.contains("listartipomaterial")) {
                listartipomateriales(request, response, out);                
            }else if (url.contains("consultartipomaterial")) {
                consultartipomaterial (request, response, out);            
            }else if (url.contains("modificartipomateriales")) {
                modificartipomateriales (request, response, out);                
            }else if (url.contains("eliminartipomateriales")) {
                eliminartipomateriales (request, response, out);                
            }else if (url.contains("listarcliente")){
                listarcliente(request, response, out);
            }else if(url.contains("consultarcliente")){
                consultarcliente(request, response, out);
            }else if(url.contains("insertarcliente")){
                insertarcliente(request, response, out);
            }else if(url.contains("actualizarcliente")){
                actualizarcliente(request, response, out);
            }else if(url.contains("buscarcliente")){
                buscarcliente(request, response, out);
            }else if(url.contains("eliminarcliente")){
                eliminarcliente(request, response, out);
            }else if (url.contains("listartipodocumento")) {
                listartipodocumento(request, response, out);
            } else if (url.contains("ingresartipodocumento")) {
                ingresartipodocumento(request, response, out);
            } else if (url.contains("modificartipodocumento")) {
                modificartipodocumento(request, response, out);
            } else if (url.contains("eliminartipodocumento")) {
                eliminartipodocumento(request, response, out);
            } else if (url.contains("consultartipodocumento")) {
                consultartipodocumento(request, response, out);
            } else if (url.contains("buscartipodocumento")) {
                buscartipodocumento(request, response, out);
            }else if(url.contains("ingresartipopiso")){
                ingresartipopiso(request, response, out);
            }else if(url.contains("modificartipopiso")){
                modificartipopiso(request, response, out);
            }else if(url.contains("eliminartipopiso")){
                eliminartipopiso(request, response, out);
            }else if(url.contains("consultartipopiso")){
                consultartipopiso(request, response, out);
            }else if(url.contains("buscartipopiso")){
                buscartipopiso(request, response, out);
                
            //----------------------------------
            //David Lun 26 de May 2014
            }else if (url.contains("iniciarsesion")){
                inicioSesion(request, response, out);
            }else if (url.contains("bloqueousuario")){
                bloqueoUsuario(request, response, out);
            }else if (url.contains("verificarseguridad")){
                verificarSeguridad(request, response, out);
            }else if (url.contains("cerrarsesion")){
                cerrarSesion(request, response, out);
            }else if(url.contains("ingresousuario")){
                ingresoUsuario(request,response,out);
            }else if(url.contains("modificarusuario")){
                modificoUsuario(request, response, out);
            }else if(url.contains("listarusuario")){
                listarUsuario(request, response, out);
            }else if(url.contains("buscarusuario")){
                buscarUsuario(request, response, out);
            }else if(url.contains("buscarestadousuario")){
                buscarEstadoUsuario(request, response, out);
            }else if(url.contains("modificarestadousuario")){
                modificoestadoUsuario(request, response, out);
            }else if(url.contains("ingresarrol")){
                ingresoRol(request,response,out);
            } else if (url.contains("insertarrol")) {
                insertarRol(request, response, out);
            } else if (url.contains("nuevorol")) {
                nuevoRol(request, response, out);
            } else if (url.contains("listarrol")) {
                listarRol(request, response, out);
            } else if (url.contains("buscarrol")) {
                buscarRol(request, response, out);
            } else if (url.contains("modificarrol")) {
                modificoRol(request, response, out);
            }
            //----------------------------------------
            
            else if (url.contains("buscarformulas")) {
                buscarFormulas(request, response, out);
            }else if (url.contains("consultarprecio")) {
                consultarPrecio(request, response, out);
            }else if (url.contains("consultarpreciproveedor")) {
                consultarPrecioPorProveedor(request, response, out);
            }else if (url.contains("guardarsolicitud")) {
                guardarSolicitud(request, response, out);
            }else if (url.contains("guardarsolicitudesasignadas")) {
                guardarSolicitudesAsignadas(request, response, out);
            }else if (url.contains("consultarultimasolicitud")) {
                consultarUltimaSolicitud(request, response, out);
            }else if (url.contains("consultarsolicasignadas")) {
                consultarSolicitudesAsignadas(request, response, out); 
            }else if(url.contains("consultarlassolicitudes")){
                consultarSolicitudes(request, response, out);
            }else if(url.contains("buscarsolicitud")){
                buscarSolicitud(request, response, out);
            }else if(url.contains("modificarsolicitud")){
                modificarSolicitud(request, response, out);
            }else if(url.contains("eliminarsolicitud")){
                eliminarSolicitud(request, response, out);
            }else if (url.contains("consultarcolicitudasignada")) {
                ConsultarSolicitudAsignada(request, response, out);
            }else if (url.contains("modificarsolicasignadas")) {
                modificarSolicitudAsignada(request, response, out);
            }else if(url.contains("listarsolicitudes")){
                listarSolicitudes(request, response, out);
            
            
            
            
            
            
            }else if(url.contains("insertarempleado")){
                insertarEmpleado(request, response, out);
            /*}else if(url.contains("listarempleado")){
                listarEmpleado(request, response, out);*/
            }else if(url.contains("consultarempleado")){
                consultarEmpleado(request, response, out);
            }else if(url.contains("modificarempleado")){
                modificarEmpleado(request, response, out);
            }else if(url.contains("buscarempleado")){
                buscarEmpleado(request, response, out);
            }else if(url.contains("eliminarempleado")){
                eliminarEmpleado(request, response, out);
            }else if(url.contains("insertarunidadmedida")){
                insertarUnidadmedida(request, response, out);
            }else if(url.contains("listarunidadmedida")){
                listarUnidadmedida(request, response, out);
            }else if(url.contains("consultarunidadmedida")){
                consultarunidadmedida(request, response, out);
            }else if(url.contains("modificarunidadmedida")){
                modificarunidadmedida(request, response, out);
            }else if(url.contains("buscarunidadmedida")){
                buscarunidadmedida(request, response, out);
            }else if(url.contains("eliminarunidadmedida")){
                eliminarunidadmedida(request, response, out);
            }else if (url.contains("ingresarempleado")){
                ingresoEmpleado(request, response, out);
            }else if (url.contains("insertarventa")) {
                insertarVenta(request, response, out);
            }else if (url.contains("modificarventa")) {
                modificarVenta(request,response,out);
            }else if (url.contains("consultarventa")) {
                consultarVenta(request,response,out);
            }else if (url.contains("eliminarventa")) {
                eliminarVenta(request, response, out);
            }else if (url.contains("listarclinetes")) {
                listarclientes(request, response, out);
            /*}else if (url.contains("consultarclienteparaid")) {
                consultarclienteparaid(request,response,out);*/
            }else if (url.contains("buscarventa")) {
                buscarventa(request, response, out);
            /*}else if (url.contains("listarventa")) {
                listarventa(request, response, out);*/
                
            }else if (url.contains("insertarmatofrecido")) {
                insertarmatofre(request, response, out);
            }else if (url.contains("modificarmatofrecido")) {
                modificarmatofre(request, response, out);
            }else if (url.contains("consultarmatofrecido")) {
                consultarmatofre(request, response, out);
            }else if (url.contains("eliminarmatofrecido")) {
                eliminarmatofre(request, response, out);
                
            }else if (url.contains("insertarformula")) {
                insertarformula(request, response, out);
            }else if (url.contains("modificarformula")) {
                modificarformula(request, response, out);
            }else if (url.contains("consultarformula")) {
                consultarformula(request, response, out);
            }else if (url.contains("eliminarformula")) {
                eliminarformula(request, response, out);
            }else if (url.contains("buscarformula")) {
                buscarformula(request, response, out);
            }else if (url.contains("listarformula")) {
                listarformula(request, response, out);
            }else if (url.contains("buscarmaterial")) {
                buscarmaterial (request, response, out);
            }else if (url.contains("listarmatofrecido")) {
                listarmaterialofrecido(request, response, out);
            }else if (url.contains("buscarmatofrecido")) {
                buscarmaterialofrecido(request, response, out);
            }else if (url.contains("consultarcolicitudasignada")) {
                ConsultarSolicitudAsignada(request, response, out);
            }else if (url.contains("modificarsolicitudasignada")) {
                modificarSolicitudAsignada(request, response, out);
                        
            }else if (url.contains("rep1")){
                reporteproveedores(request, response, out);
            }
            else if (url.contains("modificarSolicitudFechaRecibido")) {
                modificarSolicitudFechaRecibido(request, response, out);
            }
            
            else if (url.contains("insertarciudad")){
                insertarCiudad(request, response, out);
            
             }else if (url.contains("cargarcliente")) {
                cargarcliente(request, response, out);
            
             }else if (url.contains("insertaridentiventa")) {
                insertaridentiventa(request, response, out);
            }else if (url.contains("consultaridentiventa")) {
                consultaridentiventa(request, response, out);
            }else if (url.contains("buscaridentiventas")) {
                buscaridentiventas(request, response, out);
            }else if (url.contains("modificaridentiventa")) {
                modificaridentiventa(request, response, out);
            }else if(url.contains("listaridentiventa")){
                listaridentiventa(request, response, out);
            }else if (url.contains("eliminaridentiventa")) {
                eliminaridentiventa(request, response, out);
            }else if (url.contains("buscarclie")) {
                buscarclie(request, response, out);
            }
        } finally {
            out.close();
        }
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
        try {
            processRequest(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(servlet.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(servlet.class.getName()).log(Level.SEVERE, null, ex);
        } catch (JRException ex) {
            Logger.getLogger(servlet.class.getName()).log(Level.SEVERE, null, ex);
        }
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
        try {
            processRequest(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(servlet.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(servlet.class.getName()).log(Level.SEVERE, null, ex);
        } catch (JRException ex) {
            Logger.getLogger(servlet.class.getName()).log(Level.SEVERE, null, ex);
        }
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
    
    public int inicio = 0;
    public int permiso = 0;
    public int aprovacion = 0;
    public int estado = 0;
    public String contrasenia = "";
    public String correos = "";
    //Metodo inicioSesion: inica la sesion de cada usuario
    private void inicioSesion(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        try {
            HttpSession sesion = request.getSession();
            String correo = request.getParameter("correo");
            String contrasena = request.getParameter("contrasena");

            UsuarioVo user = new UsuarioDao().inicioSesion(correo, contrasena);

            if (user != null) {
                sesion.setAttribute("usuario", user);
                inicio = user.getRol().getIdrol();
                estado = user.getEstado();
                correos = user.getCorreo();
                contrasenia = user.getContrasena();
                if (estado == 0) {
                    permiso = 3;
                } else if (inicio == 1 && estado != 0) {
                    permiso = 1;
                } else if (inicio == 2 && estado != 0) {
                    permiso = 2;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(permiso);
        }
    }
    
    public void bloqueoUsuario (HttpServletRequest request, HttpServletResponse response, PrintWriter out){
        int bloqueo=0;
        try {
            UsuarioVo users = new UsuarioVo();
            users.setContrasena(contrasenia);
            HttpSession sesion = request.getSession();
        String contrasena = request.getParameter("contrasena");
            if(contrasenia.equals(contrasena)){
                bloqueo=1;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(bloqueo);
        }
    }
    
    private void cerrarSesion(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        try {
            HttpSession sesion = request.getSession();
            if (sesion != null) {
                sesion = null;
                permiso = 0;
                inicio = 0;
                estado = 0;
                aprovacion = 0;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(permiso);
        }
    }
    
   // Metodo ingresoUsuario: crea un nuevo usuario
    private void ingresoUsuario(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        int ingreso = 0;
        try {
            HttpSession sesion = request.getSession();
            String correo = request.getParameter("correo");
            String contrasena = request.getParameter("contrasena");
            int idrol = Integer.parseInt(request.getParameter("idrol"));
            int estado = Integer.parseInt(request.getParameter("estado"));
            int idempleado = Integer.parseInt(request.getParameter("idempleado"));

            UsuarioVo user = new UsuarioVo();
            user.setCorreo(correo);
            user.setContrasena(contrasena);
            user.setEstado(estado);

            RolVo rol = new RolVo();
            rol.setIdrol(idrol);

            EmpleadoVO empleado = new EmpleadoVO();
            empleado.setIdempleado(idempleado);

            user.setRol(rol);
            user.setEmpleado(empleado);
            ingreso = new UsuarioDao().ingresoUsuario(user);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(ingreso);
        }
    }
    
    // Metodo ingresoRol: crea un nuevo rol para un rol
    private void ingresoRol(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<RolVo> lista = new ArrayList<RolVo>();
        try {
            lista = new RolDao().listaRol();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(new Gson().toJson(lista));
        }
    }
    
        public void insertarRol(HttpServletRequest request, HttpServletResponse response, PrintWriter out){
            UsuarioVo users = new UsuarioVo();
            users.setCorreo(correos);
            HttpSession sesion = request.getSession();
        UsuarioVo busqueda = new UsuarioVo();
        try {
            busqueda = new UsuarioDao().BuscarUsuario(correos);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(busqueda));
        }
    }
        
                // Metodo ingresoUsuario: crea un nuevo usuario
private void nuevoRol (HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String nombrerol = request.getParameter("nombrerol");

        int resp = -1;

        try {
            RolVo rol = new RolVo();
            rol.setNombrerol(nombrerol);

            resp = new RolDao().ingresoRol(rol);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(resp);
        }
}

//Lista todos los roles
    private void listarRol(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<RolVo> listar = new ArrayList<RolVo>();
        try {
            listar = new RolDao().listaRol();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(new Gson().toJson(listar));
        }

    }
    
            // Metodo buscarUsuario: consulta un solo rol
    private void buscarRol(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String nombrerol = request.getParameter("nombrerol");
        RolVo busqueda = new RolVo();
        try {
            busqueda = new RolDao().buscarRol(nombrerol);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(new Gson().toJson(busqueda));
        }
    }
    
            // Metodo modificoUsuario: modifica un solo usuario
    private void modificoRol(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        int idrol = Integer.parseInt(request.getParameter("idrol"));  
        String nombrerol = request.getParameter("nombrerol");

        int modificacion = -1;

        try {
            RolVo users = new RolVo();
            users.setIdrol(idrol);
            users.setNombrerol(nombrerol);
            modificacion = new RolDao().modificoRol(users);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(modificacion);
        }
    }
    
    private void ingresoEmpleado (HttpServletRequest request, HttpServletResponse response,PrintWriter out){
            ArrayList<EmpleadoVO> lista = new ArrayList<EmpleadoVO>();
        try {
//            HttpSession sesion = request.getSession();
//            EmpleadoVO emple = new EmpleadoVO();
//            emple = (EmpleadoVO) sesion.getAttribute("emple");
            lista = new EmpleadoDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(lista));
        }
    }
    
    private void listarUsuario(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<UsuarioVo> listar = new ArrayList<UsuarioVo>();
        try {
            listar = new UsuarioDao().listaUsuario();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(new Gson().toJson(listar));
        }

    }
    
    // Metodo buscarUsuario: consulta un solo usuario
    private void buscarUsuario(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String correo = request.getParameter("correo");
        UsuarioVo busqueda = new UsuarioVo();
        int validar=0;
        try {
            busqueda = new UsuarioDao().BuscarUsuario(correo);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if(busqueda!=null){
            out.print(new Gson().toJson(busqueda));
            }else{
            out.print(validar);
            }
        }
    }
    
    // Metodo buscarEstadoUsuario: consulta el estado de un solo usraio
    private void buscarEstadoUsuario(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String correo = request.getParameter("correo");
        UsuarioVo busqueda = new UsuarioVo();
        try {
            busqueda = new UsuarioDao().BuscarEstadoUsuario(correo);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(new Gson().toJson(busqueda));
        }
    }
    
    // Metodo modificoUsuario: modifica un solo usuario
    private void modificoUsuario(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        int idUsuario = Integer.parseInt(request.getParameter("idUsuario"));
        String correo = request.getParameter("correo");
        String contrasena = request.getParameter("contrasena");
        int idrol = Integer.parseInt(request.getParameter("idrol"));

        int modificacion = -1;

        try {
            UsuarioVo users = new UsuarioVo();
            users.setIdUsuario(idUsuario);
            users.setCorreo(correo);
            users.setContrasena(contrasena);
            users.setRol(new RolDao().consultar(idrol));
            modificacion = new UsuarioDao().modificoUsuario(users);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(modificacion);
        }
    }
    
    // Metodo modificoestadoUsuario: modifica el estado de un solo usuario
    private void modificoestadoUsuario(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        int estado = Integer.parseInt(request.getParameter("estado"));
        int idUsuario = Integer.parseInt(request.getParameter("idUsuario"));
        int modificacion = -1;
        try {
            UsuarioVo users = new UsuarioVo();
            users.setIdUsuario(idUsuario);
            users.setEstado(estado);    
            modificacion = new UsuarioDao().modificoEstadoUsuario(users);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(modificacion);
        }
    }

    private void verificarSeguridad(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        try {
            UsuarioVo users = new UsuarioVo();
            users.setEstado(estado);
            HttpSession sesion = request.getSession();
            Object usuario = sesion.getAttribute("usuario");
            if (estado == 0 || usuario == null) {
                aprovacion = 0;
            } else if (usuario != null && inicio == 1) {
                aprovacion = 1;
            } else if (usuario != null && inicio == 2) {
                aprovacion = 2;
            } else {
                aprovacion = 0;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(aprovacion);
        }
    }
    
    private void eliminartipopiso(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        int estado=0;
        TiposPisosVO tip = new TiposPisosVO();
        try {
            
            int codigo = Integer.parseInt(request.getParameter("codigo"));
                       
            estado = new TiposPisosDAO().eliminar(codigo);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(estado);
        }
    }
        private void consultartipopiso(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String id = request.getParameter("idactividad");
        TiposPisosVO tip = new TiposPisosVO();
        try {
            tip = new TiposPisosDAO().consultar(Integer.parseInt(id));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(tip) );
        }
        }
         private void buscartipopiso(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String nombre = request.getParameter("nombre");
        ArrayList<TiposPisosVO> tip = new ArrayList<TiposPisosVO>();
        try {
            tip = new TiposPisosDAO().listar(nombre);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(tip) );
        }
    }
    
    private void modificartipopiso(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        
        String nombre = request.getParameter("nombre");
        int codigo = Integer.parseInt(request.getParameter("codigo"));
            
        int resp = -1;
        try {
            
            TiposPisosVO tipo = new TiposPisosVO();
            
            tipo.setNombre(nombre);
            tipo.setCodigo(codigo);
            
            resp = new TiposPisosDAO().modificarTipopiso(tipo);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }
    private void ingresartipopiso(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String nombre = request.getParameter("nombre");
        
        int resp = -1;
        
        try {
            TiposPisosVO tip = new TiposPisosVO();
            tip.setNombre(nombre);
           
            resp = new TiposPisosDAO().crearTipoPisos(tip);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }
    
    private void listartipodocumento(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<TipoIdentificacionVO> lista = new ArrayList<TipoIdentificacionVO>();
        try {
            lista = new TipoIdentificacionDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(new Gson().toJson(lista));
        }
    }

    private void ingresartipodocumento(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {

        String descripcion = request.getParameter("descripcion");


        int resp = -1;

        try {
            TipoIdentificacionVO tip = new TipoIdentificacionVO();
            tip.setDescripcion(descripcion);


            resp = new TipoIdentificacionDAO().crearTipoIdentificacion(tip);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(resp);
        }
    }

    private void modificartipodocumento(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {

        String descripcion = request.getParameter("descripcion");
        int idtipoIdentificacion = Integer.parseInt(request.getParameter("idtipoIdentificacion"));

        int resp = -1;
        try {

            TipoIdentificacionVO tipo = new TipoIdentificacionVO();

            tipo.setDescripcion(descripcion);
            tipo.setIdtipoIdentificacion(idtipoIdentificacion);

            resp = new TipoIdentificacionDAO().modificarTipoIdentificacion(tipo);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(resp);
        }
    }

    private void eliminartipodocumento(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        int estado = 0;
        TipoIdentificacionVO tip = new TipoIdentificacionVO();
        try {

            int idtipoIdentificacion = Integer.parseInt(request.getParameter("idtipoIdentificacion"));

            estado = new TipoIdentificacionDAO().eliminar(idtipoIdentificacion);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(estado);
        }
    }

    private void consultartipodocumento(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String id = request.getParameter("idtipoIdentificacion");
        TipoIdentificacionVO tip = new TipoIdentificacionVO();
        try {
            tip = new TipoIdentificacionDAO().consultar(Integer.parseInt(id));
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(new Gson().toJson(tip));
        }
    }

   private void buscartipodocumento(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        
        String descripcion = request.getParameter("descripcion");
        
        ArrayList<TipoIdentificacionVO> tip = new ArrayList<TipoIdentificacionVO>();
        try {
            tip = new TipoIdentificacionDAO().listar(descripcion);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(new Gson().toJson(tip));
        }
    }
    
    private void listarcliente(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<ClienteVO> clie = new ArrayList<ClienteVO>();
        try {
            clie = new ClienteDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(clie) );
        }
    }
    private void buscarclie(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String documento = request.getParameter("documento");
        String nombre = request.getParameter("nombre");
        ArrayList<ClienteVO> clie = new ArrayList<ClienteVO>();
          try {
              clie = new ClienteDAO().listarcliente(documento, nombre);
          } catch (Exception e) {
              e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(clie) );
        }
    }  


    private void consultarcliente(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String documento = request.getParameter("documento");
        ClienteVO clie = new ClienteVO();
        try {
            clie = new ClienteDAO().consultar(documento);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(clie) );
        }
    }
   private void insertarcliente(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        
        
       
        String documento = request.getParameter("documento");
        String tipodocumento = request.getParameter("tipodocumneto");
        String primernombre = request.getParameter("primernombre");
        String segundonombre = request.getParameter("segundonombre");
        String primerapellido = request.getParameter("primerapellido");
        String segundoapellido = request.getParameter("segundoapellido");
        String direccion = request.getParameter("direccion");
        String telefono = request.getParameter("telefono");
        String estado = request.getParameter("estado");
        int resp = -1;
        
        try {
            ClienteVO cliente = new ClienteVO();
           
            cliente.setDocumento(documento);
            cliente.setIdtipoIdentificacion(new TipoIdentificacionDAO().consultar(Integer.parseInt(tipodocumento)));
            cliente.setPrimerNombre(primernombre);
            cliente.setSegundoNombre(segundonombre);
            cliente.setPrimerApellido(primerapellido);
            cliente.setSegundoApellido(segundoapellido);
            cliente.setDireccion(direccion);
            cliente.setTelefono(telefono);
            cliente.setEstado(Integer.parseInt(estado));
            resp = new ClienteDAO().insertar(cliente);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

   private void cargarcliente(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
       ArrayList<ClienteVO> clien = new ArrayList<ClienteVO>();
        try {
            clien = new ClienteDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(clien) );
        }
    }

 private void actualizarcliente(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
//      String id = request.getParameter("idcliente");  
     String documento = request.getParameter("documento");
        String tipodocumento = request.getParameter("tipodocumneto");
        String primernombre = request.getParameter("primernombre");
        String segundonombre = request.getParameter("segundonombre");
        String primerapellido = request.getParameter("primerapellido");
        String segundoapellido = request.getParameter("segundoapellido");
        String direccion = request.getParameter("direccion");
        String telefono = request.getParameter("telefono");
        String estado = request.getParameter("estado");
        int resp = -1;
        
        try {
            ClienteVO cliente = new ClienteVO();
           
            cliente.setDocumento(documento);
            cliente.setIdtipoIdentificacion(new TipoIdentificacionDAO().consultar(Integer.parseInt(tipodocumento)));
            cliente.setPrimerNombre(primernombre);
            cliente.setSegundoNombre(segundonombre);
            cliente.setPrimerApellido(primerapellido);
            cliente.setSegundoApellido(segundoapellido);
            cliente.setDireccion(direccion);
            cliente.setTelefono(telefono);
            cliente.setEstado(Integer.parseInt(estado));
//            cliente.setIdCliente(Integer.parseInt(id));
                      
            resp = new ClienteDAO().modificar(cliente);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }
  private void buscarcliente(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        
        String documento = request.getParameter("documento");
        String nombre = request.getParameter("nombre");
       
        ArrayList<ClienteVO> cliente = new ArrayList<ClienteVO>();
        try {
            
          cliente= new ClienteDAO().listarcliente(documento, nombre);
       } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(cliente) );
        }
    }
  private void eliminarcliente(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String id = request.getParameter("documento");
        int resp = -1;
        try {
            resp = new ClienteDAO().eliminar(id);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }
    
    private void insertarMaterial(HttpServletRequest request, HttpServletResponse response, PrintWriter out) throws IOException{
       // PrintWriter out = response.getWriter();
        String nombreMat = request.getParameter("NombreMaterial");
        String idunidadmedidaa = request.getParameter("unidadmedida");
        String cantidadtotal = request.getParameter("canTotal");
        int CantidadTotal = Integer.parseInt(cantidadtotal);
        String tipomaterial = request.getParameter("tipomaterial");
        
        int resp = -1;
        
        try {
            materialesVO material = new materialesVO();
            material.setNombre(nombreMat);
            material.setIdunidadmedida(new UnidadmedidaDAO().consutar(Integer.parseInt(idunidadmedidaa)));
            material.setCantidadtotal(CantidadTotal);
            material.setIdtipomaterial(new tipomaterialDAO().consutar(Integer.parseInt(tipomaterial)));
            
            resp = new materialesDAO().insertarMaterial(material);
            
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
        
    }     

    private void consultarMaterial(HttpServletRequest request, HttpServletResponse response, PrintWriter out) throws IOException, ServletException{

        String id = request.getParameter("idmateriales");
        materialesVO mat = new materialesVO();
        try {
            mat = new materialesDAO().consultar(Integer.parseInt(id));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(mat) );
        }
   }

    private void eliminarMaterial(HttpServletRequest request, HttpServletResponse response, PrintWriter out) throws IOException{
        
        String id = request.getParameter("idmateriales");
        int resp = -1;
        try {
            resp = new materialesDAO().eliminarMaterial(Integer.parseInt(id));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
        
    }

    private void ModificarMaterial(HttpServletRequest request, HttpServletResponse response, PrintWriter out) throws IOException{

        String id = request.getParameter("idmateriales");
        String nombre = request.getParameter("nombremateriales");
        String idunidadmedida = request.getParameter("idunidadmedida");
        String cantidadtotal = request.getParameter("cantidadtotal");
        int cantidadTotal = Integer.parseInt(cantidadtotal);
        String tipo = request.getParameter("tipomaterial");
        
        int resp = -1;
        
        try {
            materialesVO material = new materialesVO();
            
            material.setIdmateriales(Integer.parseInt(id));
            material.setNombre(nombre);
            material.setIdunidadmedida(new UnidadmedidaDAO().consutar(Integer.parseInt(idunidadmedida)));
            material.setCantidadtotal(cantidadTotal);
            material.setIdtipomaterial(new tipomaterialDAO().consutar(Integer.parseInt(tipo)));
            
            resp = new materialesDAO().modificarMaterial(material);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
   }

    private void listarunidadmedida(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<unidadmedidaVO> listau = new ArrayList<unidadmedidaVO>();
        try {
            listau=new UnidadmedidaDAO().consultar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(listau));
        }
    }

    private void listartipoMaterial(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<tipomaterialVO> listatm = new ArrayList<tipomaterialVO>();
        try {
            listatm=new tipomaterialDAO().consultar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(listatm));
        }
    }

    private void listarmaterial(HttpServletRequest request, HttpServletResponse response, PrintWriter out) { 
        ArrayList<materialesVO> material = new ArrayList<materialesVO>();
        try {
            material = new materialesDAO().ListarMaterial();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(material));
        }
    }

    
    
    /*Metodos de Tipo Material*/
    
    private void guardartipomaterial(HttpServletRequest request, HttpServletResponse response, PrintWriter out) throws IOException{
        
      String nombreTipoMat = request.getParameter("NombreTipoMaterial");
        int resp = -1;
        try {
            tipomaterialVO tipomaterial = new tipomaterialVO();
            tipomaterial.setNombre(nombreTipoMat);
            
            resp = new tipomaterialDAO().insertarTipoMaterial(tipomaterial);
            
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
        
    }  

    //pertenece a la tabla de TIpo de Material
    private void listartipomateriales(HttpServletRequest request, HttpServletResponse response, PrintWriter out) throws IOException{
        
        ArrayList<tipomaterialVO> material = new ArrayList<tipomaterialVO>();
        try {
            material = new tipomaterialDAO().ListarTipoMaterial();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(material));
        }
    }

    private void consultartipomaterial(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        
        String id = request.getParameter("idtipomaterial");
        tipomaterialVO mat = new tipomaterialVO();
        try {
            mat = new tipomaterialDAO().consultartm(Integer.parseInt(id));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(mat) );
        }
    }

    private void modificartipomateriales(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        
        String idtm = request.getParameter("idtipomateriales");
        int tmid = Integer.parseInt(idtm);
        String nombre = request.getParameter("nombretipomateriales");

        int resp = -1;
        
        try {
            tipomaterialVO material = new tipomaterialVO();
            
            material.setIdtipomaterial(tmid);
            material.setNombre(nombre);
            
            resp = new tipomaterialDAO().modificarTipoMaterial(material);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void eliminartipomateriales(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {     
       
        String id = request.getParameter("idtipomateriales");
        int idtm = Integer.parseInt(id);
        int resp = -1;
        
        try {
            resp = new tipomaterialDAO().eliminarTipoMaterial(idtm);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void insertarCargo(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idCargo = request.getParameter("idCargo");
        String nombre = request.getParameter("nombre");



        int resp = -1;

        try {
            CargoVO pro = new CargoVO();

            pro.setNombre(nombre);


            resp = new CargoDAO().insertar(pro);

        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void listarcargo(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<CargoVO> lista = new ArrayList<CargoVO>();
        try {
            lista = new CargoDAO().consultar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(lista));
        }
    }

    private void consultarcargo(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idCargo = request.getParameter("idCargo");
        CargoVO tip = new CargoVO();
        try {
            tip = new CargoDAO().consultar(idCargo);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(tip) );
        }
    }

    private void modificarcargo(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {

        String idCargo = request.getParameter("idCargo");
        String nombre = request.getParameter("nombre");


        int resp = -1;

        try {
            CargoVO pro = new CargoVO();
            pro.setIdcargo(Integer.parseInt(idCargo));
            pro.setNombre(nombre);


            resp = new CargoDAO().modificar(pro);

        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void buscarcargo(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String nombre = request.getParameter("nombre");

        ArrayList<CargoVO> pro = new ArrayList<CargoVO>();
        try {
            pro = new CargoDAO().listar(nombre);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(pro) );
        }
    }

    private void eliminarcargo(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idCargo = request.getParameter("idCargo");
        int resp = -1;
        try {
            resp = new CargoDAO().eliminar(idCargo);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    

    private void listarSolicitudes(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idproyecto = request.getParameter("idproyecto");
        ArrayList<SolicitudVO> solicGen = null;
        try {
            
            solicGen = new SolicitudDAO().consultar(idproyecto);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(solicGen));
        }
    }

    private void consultarSolicitudes(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String arrsolic = request.getParameter("solicitudes");
        ArrayList<SolicitudVO> solicGen = null;
        try {
            ArrayList<String []> listasolic = new ArrayList<String []>();
            listasolic = new Gson().fromJson(arrsolic, (new TypeToken<ArrayList<String []>>(){}.getType() ));
            String indices = "";
            for (String[] solic : listasolic) {
                indices += solic[0] + ",";
            }
            indices = indices.substring(0, indices.length() -1);
            solicGen = new SolicitudDAO().listar(indices);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(solicGen));
        }
    }

    private void buscarSolicitud(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        SolicitudVO solicitud = null;
        String solic = request.getParameter("idsolicitud");
        try {
            solicitud = new SolicitudVO();
            solicitud = new SolicitudDAO().consultar(Integer.parseInt(solic));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(solicitud));
        }
    }

    private void modificarSolicitud(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idsolicitud = request.getParameter("idsolicitud");
        String fechapedido = request.getParameter("fechapedido");
        //String fecharecibido = request.getParameter("fecharecibido");
        String idproyecto = request.getParameter("idproyecto");
        String idproveedor = request.getParameter("idproveedor");
        int resp = 0;
        try {
            SolicitudVO solic = new SolicitudVO();
            solic.setIdsolicitud(Integer.parseInt(idsolicitud));
            solic.setFechapedido(fechapedido);
            solic.setIdproveedor(new ProveedoresDAO().consultar(idproveedor));
            solic.setIdproyecto(new ProyectoDAO().consultar(Integer.parseInt(idproyecto)));
            
            resp = new SolicitudDAO().modificar(solic);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
        
        
    }

    private void eliminarSolicitud(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idsolicitud = request.getParameter("idsolicitud");
        int resp = 0;
        try {
            resp = new SolicitudDAO().eliminar(Integer.parseInt(idsolicitud));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void insertarProveedores(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String idproveedores = request.getParameter("idproveedores");
        String nombreempresa = request.getParameter("nombreempresa");
        String idciudad = request.getParameter("idciudad");
        String tipomaterial = request.getParameter("tipomaterial");
        String foto = request.getParameter("foto");
        String telefono = request.getParameter("telefono");
        String direccion = request.getParameter("direccion");
        String estado = request.getParameter("estado");

        int resp = -1;

        try {
            ProveedoresVO pro = new ProveedoresVO();

            pro.setIdproveedores(idproveedores);
            pro.setDireccion(direccion);
            pro.setNombreempresa(nombreempresa);
            pro.setTipomaterial(tipomaterial);
            pro.setIdciudad(new CiudadDAO().consultar(Integer.parseInt(idciudad)));
            pro.setFoto(foto);
            pro.setTelefono(telefono);
            pro.setEstado(Integer.parseInt(estado));

            resp = new ProveedoresDAO().insertar(pro);

        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void listarproveedores(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<ProveedoresVO> lista = new ArrayList<ProveedoresVO>();
        try {
            lista = new ProveedoresDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(lista));
        }
    }

    private void consultarproveedores(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idproveedores = request.getParameter("idproveedores");
        ProveedoresVO tip = new ProveedoresVO();
        try {
            tip = new ProveedoresDAO().consultar(idproveedores);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(tip) );
        }
    }

    private void modificarproveedores(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
    //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    String idproveedores = request.getParameter("idproveedores");
    String nombreempresa = request.getParameter("nombreempresa");
    String idciudad = request.getParameter("idciudad");
    String tipomaterial = request.getParameter("tipomaterial");
    String foto = request.getParameter("foto");
    String telefono = request.getParameter("telefono");
    String direccion = request.getParameter("direccion");
    String estado = request.getParameter("estado");

    int resp = -1;

    try {
        ProveedoresVO pro = new ProveedoresVO();
        pro.setIdproveedores(idproveedores);
        pro.setNombreempresa(nombreempresa);
        pro.setIdciudad(new CiudadDAO().consultar(Integer.parseInt(idciudad)));
        pro.setTipomaterial(tipomaterial);
        pro.setFoto(foto);
        pro.setTelefono(telefono);
        pro.setDireccion(direccion);
        pro.setEstado(Integer.parseInt(estado));

        resp = new ProveedoresDAO().modificar(pro);

    } catch (Exception e) {
        e.printStackTrace();
    }finally{
        out.print(resp);
    }
}

    private void buscarProveedores(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
    //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    String idproveedores = request.getParameter("idproveedores");

    ArrayList<ProveedoresVO> pro = new ArrayList<ProveedoresVO>();
    try {
        pro = new ProveedoresDAO().listar(idproveedores);
    } catch (Exception e) {
        e.printStackTrace();
    }finally{
        out.print( new Gson().toJson(pro) );
    }
}

    private void eliminarProveedores(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
    //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    String idproveedores = request.getParameter("idproveedores");
    int resp = -1;
    try {
        resp = new ProveedoresDAO().eliminar(idproveedores);
    } catch (Exception e) {
        e.printStackTrace();
    }finally{
        out.print(resp);
    }
}
    
    private void buscarActividad(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idproyecto = request.getParameter("idproyecto");
        ArrayList<ActividadesVO> actividad = new ArrayList<ActividadesVO>();
        try {
            actividad = new ActividadesDAO().listar(Integer.parseInt(idproyecto)) ;
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(actividad) );
        }
    }
    
    private void consultarActividad(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String codigo = request.getParameter("codigo");
        ActividadesVO actividad = new ActividadesVO();
        try {
            actividad = new ActividadesDAO().consultar(Integer.parseInt(codigo)) ;
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(actividad) );
        }
    }
    
    private void insertarActividad(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        
        String descripcion = request.getParameter("descripcion");
        String area = request.getParameter("area");
        String idproyecto = request.getParameter("idproyecto");
        String idtipopiso = request.getParameter("idtipopiso");
        
        ActividadesVO actividad = new ActividadesVO();
        
        int resp = -1;
        try {
            
            actividad.setDescripcion(descripcion);
            actividad.setIdproyecto(new ProyectoDAO().consultar(Integer.parseInt(idproyecto)));
            actividad.setArea(Integer.parseInt(area));
            actividad.setIdtipopiso(new TiposPisosDAO().consultar(Integer.parseInt(idtipopiso)));
            
            resp = new ActividadesDAO().insertar(actividad);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void actualizarActividad(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        
        String descripcion = request.getParameter("descripcion");
        String area = request.getParameter("area");
        String idproyecto = request.getParameter("idproyecto");
        String idtipopiso = request.getParameter("idtipopiso");
        String codigo = request.getParameter("codigo");
        
        ActividadesVO actividad = new ActividadesVO();
        
        int resp = -1;
        try {
            
            actividad.setDescripcion(descripcion);
            actividad.setIdproyecto(new ProyectoDAO().consultar(Integer.parseInt(idproyecto)));
            actividad.setArea(Integer.parseInt(area));
            actividad.setIdtipopiso(new TiposPisosDAO().consultar(Integer.parseInt(idtipopiso)));
            actividad.setCodigo(Integer.parseInt(codigo));
            resp = new ActividadesDAO().modificar(actividad);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void eliminarActividad(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        
        String codigo = request.getParameter("codigo");
        
        int resp = -1;
        try {
            resp = new ActividadesDAO().eliminar(Integer.parseInt(codigo));
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void listarCiudades(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        ArrayList<CiudadVO> lista = new ArrayList<CiudadVO>();
        try {
            lista = new CiudadDAO().consultar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(lista) );
        }
    }
    
    private void listarTipoPisos(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        ArrayList<TiposPisosVO> lista = new ArrayList<TiposPisosVO>();
        try {
            lista = new TiposPisosDAO().consultarpisos();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(lista) );
        }
    }

    private void listarProyectos(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        ArrayList<ProyectoVO> proy = new ArrayList<ProyectoVO>();
        try {
            proy = new ProyectoDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(proy) );
        }
    }

   private void consultarProyecto(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        //String nombre = request.getParameter("nombre");
        String idproyecto = request.getParameter("idproyecto");
        ArrayList<ProyectoVO> tip = new ArrayList<ProyectoVO>();
        ProyectoVO tip2 = new ProyectoVO();
        
        try {
            tip2 = new ProyectoDAO().consultar(Integer.parseInt(idproyecto));
            //tip = new ProyectoDAO().listar(nombre);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(tip2) );
            //out.print( new Gson().toJson(tip) );
        }
    }
    
    private void buscarProyecto(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String nombre = request.getParameter("nombre");
        String ciudad = request.getParameter("ciudad");
        ArrayList<ProyectoVO> proy = new ArrayList<ProyectoVO>();
        try {
            proy = new ProyectoDAO().listar(nombre,Integer.parseInt(ciudad));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(proy) );
        }
    }

    private void actualizarProyectos(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String id = request.getParameter("idproyecto");
        String nombre = request.getParameter("nombre");
        String ciudad = request.getParameter("ciudad");
        String fechaini = request.getParameter("fechaini");
        String fechafin = request.getParameter("fechafin");
        String direccion = request.getParameter("direccion");
        String ganancia = request.getParameter("ganancia");
        String presupuesto = request.getParameter("presupuesto");
        String idventa = request.getParameter("idventa");
        
        String arract = request.getParameter("actividades");
        int resp = -1;
        
        try {
            ProyectoVO proyect = new ProyectoVO();
            proyect.setIdproyecto(Integer.parseInt(id));
            proyect.setDireccion(direccion);
            proyect.setEstado(1);
            proyect.setFechafinal(fechafin);
            proyect.setFechainicio(fechaini);
            proyect.setGanancias(Double.parseDouble(ganancia));
            proyect.setIdciudad(new CiudadDAO().consultar(Integer.parseInt(ciudad)));
            //proyect.setIdempleado(idempleado);
            proyect.setNombre(nombre);
            proyect.setTotalPresupuesto(Double.parseDouble(presupuesto));
            proyect.setIdventa(new VentaDAO().consultar(Integer.parseInt(idventa)));
            
            resp = new ProyectoDAO().modificar(proyect);
            
            if (! (arract.equals("") && resp > 0)) {
                //ProyectoVO pryult = new ProyectoDAO().consultarUltimo();
                ArrayList<String []> listAct = new ArrayList<String []>();
                listAct = new Gson().fromJson(arract, (new TypeToken<ArrayList<String []>>(){}.getType() ));
                for (String[] itemStr : listAct) {
                    if (resp > 0) {
                        ActividadesVO act = new ActividadesVO();
                        act.setArea(Integer.parseInt(itemStr[1]));
                        act.setDescripcion(itemStr[0]);
                        act.setIdtipopiso(new TiposPisosDAO().consultar(Integer.parseInt(itemStr[2])));
                        act.setIdproyecto(proyect);
                        if (!(itemStr[3].equals(""))) {// id
                            act.setCodigo(Integer.parseInt(itemStr[3]));
                            resp = new ActividadesDAO().modificar(act);
                        }else{
                            resp= new ActividadesDAO().insertar(act);                        
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void eliminarProyecto(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String id = request.getParameter("idproyecto");
        int resp = -1;
        try {
            resp = new ProyectoDAO().eliminar(Integer.parseInt(id));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void insertarProyecto(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String nombre = request.getParameter("nombre");
        String ciudad = request.getParameter("ciudad");
        String fechaini = request.getParameter("fechaini");
        String fechafin = request.getParameter("fechafin");
        String direccion = request.getParameter("direccion");
        String ganancia = request.getParameter("ganancia");
        String presupuesto = request.getParameter("presupuesto");
        String idventa = request.getParameter("idventa");
        String arract = request.getParameter("actividades");
        int resp = -1;
        
        try {
            ProyectoVO proyect = new ProyectoVO();
            proyect.setDireccion(direccion);
            proyect.setEstado(1);
            proyect.setFechafinal(fechafin);
            proyect.setFechainicio(fechaini);
            proyect.setGanancias(Double.parseDouble(ganancia));
            proyect.setIdciudad(new CiudadDAO().consultar(Integer.parseInt(ciudad)));
            //proyect.setIdempleado(idempleado);
            proyect.setNombre(nombre);
            proyect.setTotalPresupuesto(Double.parseDouble(presupuesto));
            proyect.setIdventa(new VentaDAO().consultar(Integer.parseInt(idventa)));
            
            resp = new ProyectoDAO().insertar(proyect);
            if (! (arract.equals("") && resp > 0)) {
                ProyectoVO pryult = new ProyectoDAO().consultarUltimo();
                ArrayList<String []> listAct = new ArrayList<String []>();
                listAct = new Gson().fromJson(arract, (new TypeToken<ArrayList<String []>>(){}.getType() ));
                for (String[] itemStr : listAct) {
                    if (resp > 0) {
                        ActividadesVO act = new ActividadesVO();
                        act.setArea(Integer.parseInt(itemStr[1]));
                        act.setDescripcion(itemStr[0]);
                        act.setIdtipopiso(new TiposPisosDAO().consultar(Integer.parseInt(itemStr[2])));
                        act.setIdproyecto(pryult);
                        resp= new ActividadesDAO().insertar(act);                        
                    }
                }
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void listarActividad(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        ArrayList<ActividadesVO> actividad = new ArrayList<ActividadesVO>();
        try {
            actividad = new ActividadesDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(actividad) );
        }
    }

     private void buscarFormulas(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        ArrayList<formulaVO> formulas = new ArrayList<formulaVO>();
        try {
            String idtipopiso = request.getParameter("idtipopiso");
            formulas = new formulaDAO().buscarformula(Integer.parseInt(idtipopiso));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(formulas) );
        }        
    }

     private void consultarPrecio(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        ArrayList<MaterialOfrecidoVO> precios = new ArrayList<MaterialOfrecidoVO>();
        try {
            String idmaterial = request.getParameter("idmaterial");
            precios = new MaterialOfrecidoDAO().buscar(Integer.parseInt(idmaterial));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(precios) );
        }   
    }
     
     private void consultarPrecioPorProveedor(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        MaterialOfrecidoVO precios = new MaterialOfrecidoVO();
        try {
            String idmaterial = request.getParameter("idmaterial");
            String idproveedor = request.getParameter("idproveedor");
            precios = new MaterialOfrecidoDAO().buscar(Integer.parseInt(idmaterial),idproveedor);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(precios) );
        }   
    }
     private void guardarSolicitud(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
//        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
////        String fechapedido = request.getParameter("fechapedido");
////        String fecharecibido = request.getParameter("fecharecibido");
//        String idproyecto = request.getParameter("idproyecto");
//        String idproveedores = request.getParameter("idproveedores");
        String arraySolicitudesAsignadas = request.getParameter("arrsolicasig");
        String arraySolicitudes = request.getParameter("arrsolic");
        
        String listsolicgen = "";
        
        int resp=0;
        int res2 = -1; 
        
        try {
            ArrayList<String []> listasolic = new ArrayList<String []>();
            ArrayList<String []> listasolicasig = new ArrayList<String []>();
            listasolic = new Gson().fromJson(arraySolicitudes, (new TypeToken<ArrayList<String []>>(){}.getType() ));
            listasolicasig = new Gson().fromJson(arraySolicitudesAsignadas, (new TypeToken<ArrayList<String []>>(){}.getType() ));
        
            SolicitudVO solicitud = new SolicitudVO();
            for (String [] obj : listasolic) {
                if (resp != -1) {
                    solicitud.setIdproveedor(new ProveedoresDAO().consultar(obj[1]));
                    solicitud.setIdproyecto(new ProyectoDAO().consultar(Integer.parseInt(obj[0])));
                    resp = new SolicitudDAO().insertar(solicitud);
                    if (resp == 1) {
                        solicitud = new SolicitudDAO().consultarUltimo();
                        listsolicgen += " " + solicitud.getIdsolicitud();
                    }
                    for (String [] objasi : listasolicasig) {
                        SolicitudAsignadaVO solasig = new SolicitudAsignadaVO();
                        //((indactact), idmat, 0, $('#txtCantidadT' + idmat + 'a' + idact).val(), $('#txtpreciou' + idmat + 'a' + idact).val(),'')
                        solasig.setCantidadrecibida(0);
                        solasig.setCantidadsolicitada(Integer.parseInt(objasi[3]));
                        solasig.setIdmaterial(new materialesDAO().consultar(Integer.parseInt(objasi[1])));
                        solasig.setIdsolicitud(solicitud);
                        solasig.setObservacion(objasi[5]);
                        solasig.setPrecio(Double.parseDouble(objasi[4]));
                        res2 = new SolicitudAsignadaDAO().insertar(solasig);
                        if (res2==1) {
                            resp=1;
                        }else{
                            resp=-1;
                        }
                    }
                }
                
            }
            if (resp != 1) {
                listsolicgen = "";
            }
            listsolicgen = listsolicgen.substring(1,listsolicgen.length());
            listsolicgen = listsolicgen.trim();
//            SolicitudVO solicitud = new SolicitudVO();
////            solicitud.setFechapedido(fechapedido);
////            solicitud.setFecharecibido(fecharecibido);
//            solicitud.setIdproveedor(new ProveedoresDAO().consultar(idproveedores));
//            solicitud.setIdproyecto(new ProyectoDAO().consultar(Integer.parseInt(idproyecto)));
//            resp = new SolicitudDAO().insertar(solicitud);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(listsolicgen);
        }
    }

   private void guardarSolicitudesAsignadas(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        
        String idsolicitud = request.getParameter("idsolicitud");
        String idmaterial = request.getParameter("idmaterial");
        String cantidadrecibida = request.getParameter("cantidadrecibida");
        String cantidadsolicitada = request.getParameter("cantidadsolicitada");
        String precio = request.getParameter("precio");
        String observacion = request.getParameter("observacion");
        
        int resp=0; 
        try {
            SolicitudAsignadaVO solicitud = new SolicitudAsignadaVO();
            solicitud.setCantidadrecibida(Integer.parseInt(cantidadrecibida));
            solicitud.setCantidadsolicitada(Integer.parseInt(cantidadsolicitada));
            solicitud.setIdmaterial(new materialesDAO().consultar(Integer.parseInt(idmaterial)));
            solicitud.setIdsolicitud(new SolicitudDAO().consultar(Integer.parseInt(idsolicitud)));
            solicitud.setObservacion(observacion);
            solicitud.setPrecio(Double.parseDouble(precio));
            
            resp = new SolicitudAsignadaDAO().insertar(solicitud);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
        
    }

   private void consultarUltimaSolicitud(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        SolicitudVO solicitud = new SolicitudVO();
        try {
            solicitud = new SolicitudDAO().consultarUltimo();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(solicitud));
        }
    }
    
    private void insertarEmpleado(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idempleado = request.getParameter("idempleado");
        String primernombre = request.getParameter("primernombre");
        String segundonombre = request.getParameter("segundonombre");
        String primerapellido = request.getParameter("primerapellido");
        String segundoapellido = request.getParameter("segundoapellido");
        String direccion = request.getParameter("direccion");
        String telefono = request.getParameter("telefono");
        String salario = request.getParameter("salario");
        String fechanacimiento = request.getParameter("fechanacimiento");
        String idcargo = request.getParameter("idcargo");
        String tipodocumento = request.getParameter("tipodocumento");
        String documento = request.getParameter("documento");
        String estado = request.getParameter("estado");
        

        int resp = -1;

        try {
            EmpleadoVO pro = new EmpleadoVO();

//            pro.setIdempleado(Integer.parseInt(idempleado));
            pro.setPrimernombre(primernombre);
            pro.setSegundonombre(segundonombre);
            pro.setPrimerapellido(primerapellido);
            pro.setSegundoapellido(segundoapellido);
            pro.setDireccion(direccion);
            pro.setTelefono(telefono);
            pro.setSalario(Double.parseDouble(salario));
            pro.setFechanacimiento(fechanacimiento);
            pro.setIdcargo(new CargoDAO().consultar(idcargo));
            pro.setTipodocumento(new TipoIdentificacionDAO().consultar(Integer.parseInt(tipodocumento)));
            pro.setDocumento(documento);
            pro.setEstado(Integer.parseInt(estado));

            resp = new EmpleadoDAO().insertar(pro);

        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void listarEmpleado(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<EmpleadoVO> lista = new ArrayList<EmpleadoVO>();
        try {
            lista = new EmpleadoDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(lista));
        }
    }
    
     private void consultarEmpleado(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String documento = request.getParameter("documento");
        EmpleadoVO tip = new EmpleadoVO();
        try {
            tip = new EmpleadoDAO().consultar(Integer.parseInt(documento));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(tip) );
        }
    }
    
      private void modificarEmpleado(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
    //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
      //  String idempleado = request.getParameter("idempleado");
        String primernombre = request.getParameter("primernombre");
        String segundonombre = request.getParameter("segundonombre");
        String primerapellido = request.getParameter("primerapellido");
        String segundoapellido = request.getParameter("segundoapellido");
        String direccion = request.getParameter("direccion");
        String telefono = request.getParameter("telefono");
        String salario = request.getParameter("salario");
        String fechanacimiento = request.getParameter("fechanacimiento");
        String idcargo = request.getParameter("idcargo");
        String tipodocumento = request.getParameter("tipodocumento");
        String documento = request.getParameter("documento");
        String estado = request.getParameter("estado");

    int resp = -1;

    try {
        EmpleadoVO pro = new EmpleadoVO();
          //  pro.setIdempleado(Integer.parseInt(idempleado));
            pro.setPrimernombre(primernombre);
            pro.setSegundonombre(segundonombre);
            pro.setPrimerapellido(primerapellido);
            pro.setSegundoapellido(segundoapellido);
            pro.setDireccion(direccion);
            pro.setTelefono(telefono);
            pro.setSalario(Double.parseDouble(salario));
            pro.setFechanacimiento(fechanacimiento);
            pro.setIdcargo(new CargoDAO().consultar(idcargo));
         
            pro.setTipodocumento(new TipoIdentificacionDAO().consultar(Integer.parseInt(tipodocumento)));
            pro.setDocumento(documento);
            pro.setEstado(Integer.parseInt(estado));

        resp = new EmpleadoDAO().modificar(pro);

    } catch (Exception e) {
        e.printStackTrace();
    }finally{
        out.print(resp);
    }
}
     
      private void buscarEmpleado(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
    //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    String documento = request.getParameter("documento");
    String nombre = request.getParameter("nombre");

    ArrayList<EmpleadoVO> pro = new ArrayList<EmpleadoVO>();
    try {
        pro = new EmpleadoDAO().listar(documento, nombre);
    } catch (Exception e) {
        e.printStackTrace();
    }finally{
        out.print( new Gson().toJson(pro) );
    }
}
     
      private void eliminarEmpleado(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
    //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    String documento = request.getParameter("documento");
    int resp = -1;
    try {
        resp = new EmpleadoDAO().eliminar(Integer.parseInt(documento));
    } catch (Exception e) {
        e.printStackTrace();
    }finally{
        out.print(resp);
    }
}
      
      
   private void insertarUnidadmedida(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idunidadmedida = request.getParameter("idunidadmedida");
        String unidadmedida = request.getParameter("unidadmedida");
        

        int resp = -1;

        try {
            unidadmedidaVO pro = new unidadmedidaVO();


            pro.setUnidadmedida(unidadmedida);

            resp = new UnidadmedidaDAO().insertar(pro);

        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }
 private void listarUnidadmedida(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<unidadmedidaVO> lista = new ArrayList<unidadmedidaVO>();
        try {
            lista = new UnidadmedidaDAO().consultar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(lista));
        }
    }
 private void consultarunidadmedida(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idunidadmedida = request.getParameter("idunidadmedida");
        unidadmedidaVO tip = new unidadmedidaVO();
        try {
            tip = new UnidadmedidaDAO().consutar(Integer.parseInt(idunidadmedida));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(tip) );
        }
    }
 private void modificarunidadmedida(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
    //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idunidadmedida = request.getParameter("idunidadmedida");
        String unidadmedida = request.getParameter("unidadmedida");
        
    int resp = -1;

    try {
        unidadmedidaVO pro = new unidadmedidaVO();
            pro.setIdunidadmedida(Integer.parseInt(idunidadmedida));
            pro.setUnidadmedida(unidadmedida);
          

        resp = new UnidadmedidaDAO().modificar(pro);

    } catch (Exception e) {
        e.printStackTrace();
    }finally{
        out.print(resp);
    }
}
private void buscarunidadmedida(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
    //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    String idunidadmedida = request.getParameter("idunidadmedida");

    ArrayList<unidadmedidaVO> pro = new ArrayList<unidadmedidaVO>();
    try {
        pro = new UnidadmedidaDAO().listar(idunidadmedida);
    } catch (Exception e) {
        e.printStackTrace();
    }finally{
        out.print( new Gson().toJson(pro) );
    }
}
 
 

    
    

 private void eliminarunidadmedida(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
    //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    String idunidadmdedida = request.getParameter("idunidadmedida");
    int resp = -1;
    try {
        resp = new UnidadmedidaDAO().eliminar(idunidadmdedida);
    } catch (Exception e) {
        e.printStackTrace();
    }finally{
        out.print(resp);
    }
}
 
    private void insertarVenta(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String nombrevent = request.getParameter("nombreventa");
        String fecha = request.getParameter("fecha");
        String identificacion = request.getParameter("identificacion");
        String valor = request.getParameter("valor");
        String cboclientico = request.getParameter("cliente");
        String cboestado = request.getParameter("estado");
        String cbotipoventa = request.getParameter("tipoventa");
        int resp = -1;
        try {
            VentaVO venta = new VentaVO();
            venta.setNombreventa(nombrevent);
            venta.setFecha(fecha);
            venta.setIdentificacion(Integer.parseInt(identificacion));
            venta.setValor(valor);
            venta.setIdcliente(new ClienteDAO().consultar(Integer.parseInt(cboclientico)));
            venta.setEstado(Integer.parseInt(cboestado));
            venta.setTipoventa(new IdentificacionVentaDAO().consultarIdentificacionVenta(Integer.parseInt(cbotipoventa)));
            resp = new VentaDAO().insertar(venta);
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
        
    }

    private void listarclientes(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<ClienteVO> listacli = new ArrayList<ClienteVO>();
        try {
            listacli = new ClienteDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(listacli) );
        }
    }
    
    private void modificarVenta(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String idvent = request.getParameter("idventa");
        String nombreventa = request.getParameter("nombreventa");
        String fecha = request.getParameter("fecha");
        String identificacion = request.getParameter("identificacion");
        String valor = request.getParameter("valor");
        String cboclientico = request.getParameter("cliente");
        String cboestado = request.getParameter("estado");
        
        int resp = -1;
        
        try {
            VentaVO venta = new VentaVO();
            venta.setIdventa(Integer.parseInt(idvent));
            venta.setNombreventa(nombreventa);
            venta.setFecha(fecha);
            venta.setIdentificacion(Integer.parseInt(identificacion));
            venta.setValor(valor);
            venta.setIdcliente(new ClienteDAO().consultar(Integer.parseInt(cboclientico)));
            venta.setEstado(Integer.parseInt(cboestado));
            
            resp = new VentaDAO().modificar(venta);
            
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void consultarVenta(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String identificacion = request.getParameter("identiventa");
        VentaVO venta = new VentaVO();
        try {
            venta = new VentaDAO().consultar(Integer.parseInt(identificacion));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(venta) );
        }
    }

    private void eliminarVenta(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String id = request.getParameter("idventa");
        int resp = -1;
        try {
            resp = new VentaDAO().eliminar(Integer.parseInt(id));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }
    
//    private void consultarclienteparaid(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
//        String documento = request.getParameter("documento");
//       
//        ClienteVO cliente = new ClienteVO();
//        try {
//          cliente= new ClienteDAO().consultar(documento);
//       } catch (Exception e) {
//            e.printStackTrace();
//        }finally{
//            out.print( new Gson().toJson(cliente) );
//        }
//    }
    
    private void buscarventa(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String tipoventa = request.getParameter("tipoventa");
        String identificacion = request.getParameter("identificacion");
        
        ArrayList<VentaVO> venta = new ArrayList<VentaVO>();
        try {
            venta = new VentaDAO().listar(Integer.parseInt(tipoventa),identificacion);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(venta) );
        }
        
    }

    // Metodos CRUD Material Ofrecido

    private void insertarmatofre(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String cboidmaterial = request.getParameter("cboidmaterial");
        String txtcosto = request.getParameter("txtcosto");
        String cboidproveedor = request.getParameter("cboidproveedor");
        int resp = -1;
        try {
            MaterialOfrecidoVO matofre = new MaterialOfrecidoVO();
            matofre.setIdmaterial(new  materialesDAO().consultar(Integer.parseInt(cboidmaterial)));
            matofre.setCosto(Integer.parseInt(txtcosto));
            matofre.setIdproveedor(new ProveedoresDAO().consultar(cboidproveedor));
            resp = new MaterialOfrecidoDAO().insertar(matofre);
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            out.print(resp);
        } 
    }

    private void modificarmatofre(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
       String idmaterialofrecido = request.getParameter("idmaterialofrecido");
        String txtcosto = request.getParameter("costo");
        
        int resp = -1;
        
        try {
            MaterialOfrecidoVO matofre = new MaterialOfrecidoVO();
            
            matofre.setIdmaterialofrecido(Integer.parseInt(idmaterialofrecido));
            matofre.setCosto(Double.parseDouble(txtcosto));
            
            resp = new MaterialOfrecidoDAO().modificar(matofre);
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void consultarmatofre(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String idmaterial = request.getParameter("idmaterial");
        String idproveedor = request.getParameter("idproveedor");
        MaterialOfrecidoVO matofre = new MaterialOfrecidoVO();
        try {
            matofre = new MaterialOfrecidoDAO().buscar(Integer.parseInt(idmaterial),idproveedor);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(matofre) );
        }
    }

    private void eliminarmatofre(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String id = request.getParameter("idmaterialofrecido");
        int resp = -1;
        try {
            resp = new MaterialOfrecidoDAO().eliminar(Integer.parseInt(id));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    // metodos CRUD formula
    
    private void insertarformula(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String idmaterial = request.getParameter("idmaterial");
        String idtipopiso = request.getParameter("idtipopiso");
        String cantidad = request.getParameter("cantidad");
        int resp = -1;
        try {
            formulaVO formula = new formulaVO();
            formula.setIdmaterial(new materialesDAO().consultar(Integer.parseInt(idmaterial)));
            formula.setIdtipopiso(new TiposPisosDAO().consultar(Integer.parseInt(idtipopiso)));
            formula.setCantidad(Integer.parseInt(cantidad));
            
            resp = new formulaDAO().insertarformula(formula);
            
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void modificarformula(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String idformula = request.getParameter("idformula");
////        String idmaterial = request.getParameter("idmateriales");
////        String idtipopiso = request.getParameter("idtipopiso");
        String cantidad = request.getParameter("cantidad");
        int resp = -1;
        try {
            formulaVO formula = new formulaVO();
            formula.setIdformula(Integer.parseInt(idformula));
//            formula.setIdmaterial(new materialesDAO().consultar(Integer.parseInt(idmaterial)));
//            formula.setIdtipopiso(new TiposPisosDAO().consultar(Integer.parseInt(idtipopiso)));
            formula.setCantidad(Integer.parseInt(cantidad));
            
            resp = new formulaDAO().modificarFormula(formula);
            
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void consultarformula(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
                    String idmaterial = request.getParameter("idmaterial");
        String idtipopiso = request.getParameter("idtipopiso");
        formulaVO form = new formulaVO();
        try {
            form = new formulaDAO().consultar1(Integer.parseInt(idmaterial),Integer.parseInt(idtipopiso));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(form) );
        }
    }

    private void eliminarformula(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String id = request.getParameter("idformula");
        int resp = -1;
        try {
            resp = new formulaDAO().eliminarformula(Integer.parseInt(id));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

   private void buscarformula(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String idmaterial = request.getParameter("idmaterial");
        String idtipopiso = request.getParameter("idtipopiso");
        ArrayList<formulaVO> form = new ArrayList<formulaVO>();
        try {
            form = new formulaDAO().buscarformula(Integer.parseInt(idtipopiso));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(form) );
        }
    }

    private void listarformula(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<formulaVO> formula = new ArrayList<formulaVO>();
        try {
            formula = new formulaDAO().Consultarformula();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(formula));
        }
        
    }
    
    private void listarmaterialofrecido(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<MaterialOfrecidoVO> mateofre = new ArrayList<MaterialOfrecidoVO>();
        try {
            mateofre = new MaterialOfrecidoDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(mateofre));
        }
    }
    private void buscarmaterialofrecido(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String idmaterial = request.getParameter("idmaterial");
        String idproveedor = request.getParameter("idproveedor");
        ArrayList<MaterialOfrecidoVO> mateofre = new ArrayList<MaterialOfrecidoVO>();
        try {
            mateofre = new MaterialOfrecidoDAO().listar(Integer.parseInt(idmaterial),idproveedor);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(mateofre) );
        }
    }
    
     private void buscarmaterial(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String id = request.getParameter("nombres");
        ArrayList<materialesVO> form = new ArrayList<materialesVO>();
        try {
            form = (new materialesDAO().buscarmaterial(id));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(form) );
        }
    }
     
     private void ConsultarSolicitudAsignada(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
    //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
   String idsolicitud = request.getParameter("idsolicitud");

    ArrayList<SolicitudAsignadaVO> pro = new ArrayList<SolicitudAsignadaVO>();
    try {
        pro = new SolicitudAsignadaDAO().listar(Integer.parseInt(idsolicitud));
    } catch (Exception e) {
        e.printStackTrace();
    }finally{
        out.print( new Gson().toJson(pro) );
    }
     }
    private void modificarSolicitudAsignada(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {

        String idsolicitud = request.getParameter("idsolicitud");
        String idmaterial = request.getParameter("idmaterial");
        String cantidadsolicitada = request.getParameter("cantidadsolicitada");
        String observaciones = request.getParameter("observaciones");

        int resp = -1;

        try {
            SolicitudAsignadaVO pro = new SolicitudAsignadaVO();
            pro.setIdsolicitud(new SolicitudDAO().consultar(Integer.parseInt(idsolicitud)));
            pro.setIdmaterial(new materialesDAO().consultar(Integer.parseInt(idmaterial)));
            pro.setCantidadsolicitada(Integer.parseInt(cantidadsolicitada));
            pro.setObservacion(observaciones);
            resp = new SolicitudAsignadaDAO().modificar(pro);

        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void consultarSolicitudesAsignadas(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String idSolicitud = request.getParameter("idsolicitud");
        ArrayList<SolicitudAsignadaVO> solicitudes = null;
        try {
            solicitudes = new SolicitudAsignadaDAO().listar(Integer.parseInt(idSolicitud));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(new Gson().toJson(solicitudes) );
        }
    }

    
    
    private void reporteproveedores(HttpServletRequest request, HttpServletResponse response, PrintWriter out) throws ClassNotFoundException, SQLException, JRException, IOException {
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

  private void modificarSolicitudFechaRecibido(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
   
        String idsolicitud = request.getParameter("idsolicitud");
        String fecharecibido = request.getParameter("fecharecibido");
    
        int resp = 0;
        try {
            SolicitudVO solic = new SolicitudVO();
            solic = new SolicitudDAO().consultar(Integer.parseInt(idsolicitud));
            solic.setFecharecibido(fecharecibido);
            resp = new SolicitudDAO().modificar(solic);
            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
       
    }
      }

    private void insertarCiudad(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        int resp = 0;
        try {
            String nombre = request.getParameter("ciudad");
            CiudadVO ciudad = new CiudadVO();
            ciudad.setNombreciudad(nombre);
            resp = new CiudadDAO().insertar(ciudad);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }
    
     private void insertaridentiventa(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String ventipo = request.getParameter("descripcionven");
        int respuesta = -1;
        try {
            IdentificacionVentaVO tipoventa = new IdentificacionVentaVO();
            tipoventa.setTipoidentificacionventa(ventipo);
            respuesta = new IdentificacionVentaDAO().insertarIdentificacionVenta(tipoventa);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(respuesta);
        }
    }

    private void consultaridentiventa(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String identificacion = request.getParameter("desctipoventa");
        IdentificacionVentaVO venta = new IdentificacionVentaVO();
        try {
            venta = new IdentificacionVentaDAO().consultarIdentificacionVenta(Integer.parseInt(identificacion));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(venta) );
        }
    }

    private void buscaridentiventas(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String desctipovent = request.getParameter("desctipoventa");
        ArrayList<IdentificacionVentaVO> tipovent = new ArrayList<IdentificacionVentaVO>();
        try {
            tipovent = (new IdentificacionVentaDAO().listar(desctipovent));
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print( new Gson().toJson(tipovent) );
        }
    }

    private void modificaridentiventa(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String idtipoventa = request.getParameter("idtipoventa");
        String detalle = request.getParameter("detalle");
        int resp = -1;
        try {
            IdentificacionVentaVO identiventa = new IdentificacionVentaVO();
            identiventa.setIdidentificacionventa(Integer.parseInt(idtipoventa));
            identiventa.setTipoidentificacionventa(detalle);
            resp = new IdentificacionVentaDAO().modificarIdentificacionVenta(identiventa);
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            out.print(resp);
        }
    }

    private void listaridentiventa(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        ArrayList<IdentificacionVentaVO> listatip = new ArrayList<IdentificacionVentaVO>();
        try {
            listatip = new IdentificacionVentaDAO().listar();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(new Gson().toJson(listatip));
        }
    }

    private void eliminaridentiventa(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        String ididentivent = request.getParameter("ididentiventa");
        int resp = -1;
        try {
            resp = new IdentificacionVentaDAO().eliminarIdentificacionVenta(Integer.parseInt(ididentivent));
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.print(resp);
        }
    }
}
