import '../css/home.css'
import '../css/projects.css'
import gotImge from "../img/casajuegotronos.jpeg"
import gotCasa from "../img/gotCasa.png"
import gotPrincipal from "../img/gotPrincipal.png"
const ProjectGot = () => {

  return(
    <>
      <div className="columns">
        <div className="columnImg">
          <h2>GOT</h2>
          <img src={gotPrincipal} alt="" className="contImgProject got" />
        </div>
        <div className="columnText">
          <h4 className="descripProject">Descripcion General:</h4>
          <p>
          Este proyecto es una página web interactiva que permite a los usuarios visualizar datos de los personajes de la serie Game of Thrones (GOT). La página ofrece funcionalidades de filtrado y ordenamiento, proporcionando una experiencia de usuario rica y dinámica. </p>
          
          <div className="columns">
            <div className="column3">
            <h5>Caracteristicas Principales</h5>
          <ul className="listaProjects">
          <li>Filtrado por Casas: Los usuarios pueden filtrar personajes según su casa, incluyendo opciones como Casa Tyrell, Casa Lannister, Casa Stark, entre otras. </li>
          <li>Ordenamiento Alfabético: Los usuarios pueden ordenar la lista de personajes en orden ascendente o descendente según el nombre completo.</li>
          <li>Responsive Design: La interfaz se adapta a diferentes tamaños de pantalla, ofreciendo una experiencia óptima en dispositivos móviles y de escritorio.</li>
          </ul>
          </div>
          <div className="column3">
          <h5>Tecnologias Utilizadas</h5>
          <ul className="listaProjects">
            <li>Javascript</li>
            <li>Node.js</li>
            <li>HTML</li>
          </ul>
          </div>
         
          </div>
      
        </div>
        
      </div>
      <div className="columns">
            <div className="column3">
            <img src={gotImge} alt=""  className="contImgProject" />
            </div>
            <div className="column3">
            <img src={gotCasa} alt="" className="contImgProject" />
            </div>
          </div>
          <a href="https://dahiana-moreno.github.io/DEV007-data-lovers/src/index.html" className="btn-link">Visita el sitio </a>
    
    </>
  )
}
export default ProjectGot