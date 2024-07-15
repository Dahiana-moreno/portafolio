import '../css/home.css'
import '../css/projects.css'
import cardPrin from "../img/cardValidation.jpeg"
import javascript from "../img/javaScript.png"
import node from "../img/node.png"
import  html5 from "../img/html-5.png"
import css from "../img/css-3.png"
import github from "../img/github.png"
const ProjectCard = () => {
  return(
   <>
    <div className="columns">
        <div className="columnImg">
          <h2>Card Validation </h2>
          <img src={cardPrin} alt="" className="contImgProject" />
        </div>
        <div className="columnDescripcion">
          <h4 className="descripProject">Descripcion General:</h4>
          <p>
          El proyecto Card Validation es una aplicación web diseñada para validar números de tarjetas de crédito utilizando el algoritmo de Luhn. Además de la validación, la aplicación oculta todos los dígitos de la tarjeta excepto los últimos cuatro para mayor seguridad.
           </p>
          </div>
          <div className="columns">
            <div className="column3">
            <h5 className='decorationText'>Caracteristicas Principales</h5>
          <ul className="listaProjects">
          <li>Validación de Tarjetas de Crédito: Utiliza el algoritmo de Luhn para verificar la validez de los números de tarjeta. </li>
          <li>Enmascaramiento de Dígitos: Oculta todos los dígitos de la tarjeta excepto los últimos cuatro</li>
          <li>Interfaz de Usuario Intuitiva: Permite a los usuarios ingresar números de tarjeta y recibir retroalimentación inmediata sobre la validez y enmascaramiento.</li>
          <li>Pruebas Unitarias: Cobertura con pruebas unitarias para los métodos de validación y enmascaramiento.</li>
          </ul>
          </div>
          <div className="column3">
          <h5 className='decorationText'>Tecnologias Utilizadas</h5>
         
          <div className="columns">
            <div className="circleTec">
              <img src={javascript} alt="" className='skillImg' />
            </div>
            <div className="circleTec">
              <img src={node} alt="" className='skillImg' />
            </div>
            <div className="circleTec">
              <img src={html5} alt="" className='skillImg' />
            </div>
            <div className="circleTec">
              <img src={css} alt="" className='skillImg' />
            </div>
            <div className="circleTec">
              <img src={github} alt="" className='skillImg' />
            </div>
            <a href="https://dahiana-moreno.github.io/cardvalidation.github.io/src/index.html" className="btn-link">Visita el sitio </a>

          </div>
          </div>
         
          </div>
        
        
      
      </div>
    
   </>
  )
}
export default ProjectCard