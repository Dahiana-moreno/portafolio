
import '../css/home.css'
import '../css/projects.css'
import mdlinkPrincipal from "../img/mdLinks.jpeg"
import validateImg from "../img/validate.png"
import statsImg from "../img/validateStats.png"
import javascript from "../img/javaScript.png"
import node from "../img/node.png"
const ProjectMdLinks = () => {

  return (
    <>
      <div className="columns">
        <div className="columnImg">
          <img src={mdlinkPrincipal} alt="" className="contImgProject" />
        </div>
        <div className="columnDescripcion">
          <h4 className="descripProject">Descripcion General:</h4>
          <p>
          Md-links es una herramienta de línea de comando (CLI) desarrollada en JavaScript con Node.js. Esta herramienta permite analizar archivos Markdown para encontrar y validar enlaces, proporcionando información detallada como la URL, el texto anclado y el estado de los enlaces (activo o roto).          </p>
          </div>
          <div className="columns">
            <div className="column3">
            <h5>Caracteristicas Principales</h5>
          <ul className="listaProjects">
          <li>Análisis de archivos Markdown para extraer y validar enlaces. </li>
          <li>Gestión de argumentos de línea de comandos para personalizar la ejecución de la herramienta.</li>
          <li>Informes detallados sobre el estado de cada enlace encontrado.</li>
          </ul>
          </div>
          <div className="column3">
          <h5 className='decorationText'>Tecnologias Utilizadas</h5>
          <ul className="listaProjects">
          
            <li>process.env, process.argv</li>
          </ul>
          <div className="columns">
            <div className="circleTec"><img src={javascript}alt="" className="skillImg" /></div>
            <div className="circleTec"><img src={node} alt="" className="skillImg" /></div>
            
          </div>
          <a href="https://www.npmjs.com/package/md-linksjdb" className="btn-link">Visita el sitio </a>

          </div>
         
          </div>
          <div className="columns">
            <div className="column3">
            <img src={validateImg} alt=""  className="contImgProject" />
            </div>
            <div className="column3">
            <img src={statsImg} alt="" className="" />
            </div>
          </div>
         
          <br />
        </div>
    
    </>

  )
}
export default ProjectMdLinks