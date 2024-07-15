import '../css/home.css'
import '../css/projects.css'
import eventPrin from "../img/events.jpeg"
import botstrap from "../img/bootstrap.png"
import php from "../img/php.png"
import mysql from "../img/mysql.png"
import  html5 from "../img/html-5.png"
import css from "../img/css-3.png"
const Projectevento = () => {

  return (
    <>
     <div className="columns">
        <div className="columnImg">
          <h2>Events</h2>
          <img src={eventPrin}alt="" className="contImgProject got" />
        </div>
        <div className="columnDescripcion">
          <h4 className="descripProject">Descripcion General:</h4>
          <p>
          Este proyecto es una página web diseñada para la creación y visualización de eventos. La plataforma permite a los usuarios ver todos los eventos disponibles sin necesidad de estar registrados. Sin embargo, para crear, editar o eliminar eventos, los usuarios deben iniciar sesión. </p>
          </div>
          <div className="columns">
            <div className="column3">
            <h5 className='decorationText'>Caracteristicas Principales</h5>
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
          <h5 className='decorationText'>Tecnologias Utilizadas</h5>
          <ul className="listaProjects">
            <li>Bootstrap</li>
            <li>PHP</li>
            <li>Mysql</li>
          </ul>
          <div className="columns">
            <div className="circleTec">
              <img src={botstrap} alt="" className='skillImg' />
            </div>
            <div className="circleTec">
              <img src={php} alt="" className='skillImg' />
            </div>
            <div className="circleTec">
              <img src={mysql} alt="" className='skillImg' />
            </div>
            <div className="circleTec">
              <img src={html5} alt="" className='skillImg' />
            </div>
            <div className="circleTec">
              <img src={css} alt="" className='skillImg' />
            </div>
            <a href="https://capable-reprieve-production.up.railway.app/" className="btn-link">Visita el sitio </a>

          </div>
          </div>
         
          </div>
        
        
      
      </div>
        
    </>
  )
}
export default Projectevento;

