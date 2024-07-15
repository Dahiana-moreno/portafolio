import "../css/navbar.css"
import "../css/home.css"
import Contact from "./contact.jsx"
import Carrusel from "./carrusel.jsx"
import github from "../img/github.png"
import instagram from "../img/instagram.png"
import linkelind from "../img/linkedin.png"
import react from "../img/react.png"
import node from "../img/node.png"
import mysql from "../img/mysql.png"
import git from "../img/git.png"
import rayo from "../img/destello.png"
import telefono from "../img/llamar.png"
import email from "../img/correo.png"
import whasapp from "../img/whatsapp.png"

const Home = () => {


  return(
    <>
   <section id="about" className="fondo" >
  <div className="container home">
    <h5 className="contenido">FRONT-END & BACK-END </h5>
    <h1 className="contenido">DESARROLADORA WEB</h1>
    <div className="contenido cont">
      <p className="contenido">Transformando ideas en soluciones ditales eficientes y elegantes</p>
    </div>
    <div className="contenido">        <a href="https://www.instagram.com/daycode78?utm_source=qr&igsh=MXRpbjhpcWYzeWN2Yg==" target="_blank"><img src={instagram} alt="Twitter" className="social" /></a>
        <a href="https://www.linkedin.com/in/july-dayana-becerra-moreno/"><img src={linkelind} alt="Linkelind" className="social"/></a>
        <a href="https://github.com/Dahiana-moreno"><img src={github} alt="Github" className="social"/></a>
    
    </div>
  </div>
 
   </section>
   <section id="skills">
   <div className="titulos">
   <span><h2 className="title">HABILIDADES</h2><h2 className="titlePrin">TECNOLOGICAS</h2></span>

   </div>
        <div className="container">
          <div className="columns">
            <div className="skils">
              <div className="skilsPrinc">
              <img src={react} alt="reatc" className="skillImg" />
              <h4 className="title2">Front-end</h4>
              </div>
              <ul>
                <li className="lista">Html.</li>
                <li className="lista">Css.</li>
                <li className="lista">JavaScript.</li>
                <li className="lista">React.</li>
              </ul>
              
            </div>

            <div className="skils">
            <div className="skilsPrinc">
              <img src={node} alt="node" className="skillImg" />
              <h4 className="title2">Back-end</h4>
              </div>
              <ul>
                <li className="lista">Node Js.</li>
                <li className="lista">Express.</li>
                <li className="lista">Php.</li>
              </ul>
            </div>

            <div className="skils">
            <div className="skilsPrinc">
              <img src={mysql} alt="mysql" className="skillImg" />
              <h4 className="title2">Databases</h4>
              </div>
              <ul>
                <li className="lista">Mysql.</li>
                <li className="lista">Mongo Db.</li>
                <li className="lista">Firebase.</li>
              </ul>
            </div>

            <div className="skils">
            <div className="skilsPrinc">
              <img src={git} alt="git" className="skillImg" />
              <h4 className="title2">Tools</h4>
              </div>
              <ul>
                <li className="lista">Git.</li>
                <li className="lista">Github.</li>
                <li className="lista">Figma</li>
              </ul>
            </div>
          </div>
        </div>
  
   </section>

   <section id="projects" className="espacio">
    <div className="container">
      <div className="columns">
        <div className="column1 fondo2">
        <span><h4 className="contenido title">MIS</h4><h4 className="contenido titlePrin">PROYECTOS</h4></span>
        <div className="infoProjectsuu">
          <p>Visita los enlaces y conoce más sobre cada proyectos</p>
        </div>
        </div>
      
        <div className="contenedorProjects">
           
         
            <Carrusel />
            
            
          
        </div>
      </div>
    </div>
   </section>

   <section className="espacio" id="contact">
   <h2 className="contEmail">Contacto<img src={rayo} className="social"/></h2>

    <div className="container">
      
      <div className="columns">
      <div className="column2">
        <h2>Trabajemos juntos en proyecos solo enviame un correo electronico aqui</h2>
        <div className="contact">
          <Contact></Contact>
        </div>
      </div>
      <div className="columnContact">
       <div className="contactColumn">
        <div className="contact1">
          <div className="imgContac">
            <img src={telefono} alt="" className="social" />
          </div>
          <p className="pContac">Telefono Celular</p>
          <a href="" className="enlace">323 7086492</a>
        </div>
        <div className="contEmail">
          <div className="imgContac">
            <img src={email} alt="" className="social"/>
          </div>
            <p className="pContac">Correos Electronicos</p>
            <p><a href="mailto:dbecerradev@gmail.com" className="enlace">dbecerradev@gmail.com</a></p>
            <p><a href="mailto:dahian1507becerra@gmail.com" className="enlace">dahian1507becerra@gmail.com</a></p>
          <br />   
        </div>
        
        </div>
        <div className="contact1">
          <div className="imgContac">
            <img src={whasapp} alt="Whatsapp" className="social" />
          </div>
        <p className="pContac">Whatsapp</p>
        <a href="" className="enlace">323 7086492</a>
        </div>
      </div> 
    </div>
    </div>
   </section>

  
   </>
  )
}
export default Home