import React from 'react' //Importar siempre la librería react
import '../utils/css/Footer.estilos.css'
import Juan from '../utils/images/jump.jpg'
const Footer = () => {
    return ( //Lo que va a devolver a donde yo llamo cuerpo en app.js
      <div className="Container_Fotter"> 
      <h1>
          Estilo OVERSIZE
      </h1>
      <div className="Container_Text">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur fugiat culpa sequi labore excepturi. Suscipit nulla exercitationem eligendi cupiditate modi. Aliquam magnam possimus ut perspiciatis alias nihil facere fugit?

        </p>
        </div>
      <div className="Container_Image">  
      <img id="image1" src={Juan} alt="Hola esta es la img" />
      </div>
      
      </div>
    )
}
export default Footer