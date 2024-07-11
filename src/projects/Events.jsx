import '../css/home.css'
import '../css/projects.css'
import eventPrin from "../img/events.jpeg"
const Projectevento = () => {

  return (
    <>
     <div className="columns">
        <div className="columnImg">
          <h2>Events</h2>
          <img src={eventPrin}alt="" className="contImgProject got" />
        </div>
        <div className="columnText">
          <h4 className="descripProject">Descripcion General:</h4>
          <p>
          Este proyecto es una página web diseñada para la creación y visualización de eventos. La plataforma permite a los usuarios ver todos los eventos disponibles sin necesidad de estar registrados. Sin embargo, para crear, editar o eliminar eventos, los usuarios deben iniciar sesión. </p>
          
          <div className="columns">
            <div className="column3">
            <h5>Caracteristicas Principales</h5>
          <ul className="listaProjects">
          <li>Visualización de Eventos: Cualquier usuario, registrado o no, puede ver los eventos creados en la plataforma. </li>
          <li>Registro e Inicio de Sesión: Los usuarios pueden registrarse y iniciar sesión para acceder a funcionalidades adicionales.</li>
          <li>Creación de Eventos: Los usuarios registrados pueden crear nuevos eventos, proporcionando detalles como título, descripción, fecha, y hora.</li>
          <li>Gestión de Eventos: Solo los usuarios que han creado un evento pueden editar o eliminar sus propios eventos.</li>
          <li>Sección (Mis Eventos): Los usuarios logueados tienen acceso a una sección personalizada donde pueden ver y gestionar los eventos que han creado.</li>
          <li>Diseño Responsivo: La interfaz está diseñada con Bootstrap, garantizando una experiencia de usuario óptima en dispositivos móviles y de escritorio.</li>
          </ul>
          </div>
          <div className="column3">
          <h5>Tecnologias Utilizadas</h5>
          <ul className="listaProjects">
            <li>Bootstrap</li>
            <li>PHP</li>
            <li>Mysql</li>
          </ul>
          </div>
         
          </div>
      
        </div>
        
      </div>
      
          <a href="https://eventosbuga-production.up.railway.app/seguridad/vista1.php" className="btn-link">Visita el sitio </a>
    </>
  )
}
export default Projectevento;

