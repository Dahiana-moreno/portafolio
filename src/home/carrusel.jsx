import Carousel from 'react-bootstrap/Carousel';

import "../css/home.css"

import cardLunch from "../img/cardValidation.jpeg"
import got from "../img/casajuegotronos.jpeg"
import events from "../img/events.jpeg"
import mdlink from "../img/mdLinks.jpeg"
const Carrusel = () => {

  return(
    <>
   <Carousel>
      <Carousel.Item>
        <div className="image-container">
          <img src={cardLunch} alt="Card Validation" className="imgProjects" />
          <div className="columns">
            <div className="column1">
            <a href="/card" className="links-Button">De que trata?</a>
            </div>
            <div className="column2">
            <a href="https://dahiana-moreno.github.io/cardvalidation.github.io/src/index.html" className="links-Button">Visitar Sitio</a>
            </div>
          </div>
        </div>
        <div className="text-below">
          <h4>Card validation</h4>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="image-container">
          <img src={got} alt="Card Validation" className="imgProjects" />
          <div className="columns">
            <div className="column1">
            <a href="/got" className="links-Button">De que trata?</a>
            </div>
            <div className="column2">
            <a href="https://dahiana-moreno.github.io/DEV007-data-lovers/src/index.html" className="links-Button">Visitar Sitio</a>
            </div>
          </div>         
        </div>
        <div className="text-below">
          <h4>Juego de Tronos</h4>
       
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="imgae-container">
          <img src={mdlink} alt="" className="imgProjects" />
          <div className="columns">
            <div className="column1">
              <a href="/mdlinks" className="links-Button">De que trata?</a>
            </div>
            <div className="column2">
              <a href="https://www.npmjs.com/package/md-linksjdb" className="links-Button">Visitar sitio</a>
            </div>
          </div>
        </div>
        <div className="text-below">
          <h4>Md_links</h4>

        </div>
      </Carousel.Item>


      <Carousel.Item>
        <div className="iamge-container">
          <img src={events} alt="" className="imgProjects" />
          <div className="columns">
            <div className="column1">
            <a href="/events" className="links-Button">De que trata?</a>
            </div>
            <div className="column2">
            <a href="https://capable-reprieve-production.up.railway.app/" className="links-Button">Visitar Sitio</a>
            </div>
          </div>
        </div>
        <div className="text-below">
          <h4>Eventos</h4>
        </div>
      </Carousel.Item>
      

    </Carousel>
    </>
  )
}
export default Carrusel