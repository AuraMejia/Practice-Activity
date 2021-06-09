import React from 'react' //Importar siempre la librería react
import '../utils/css/Footer.estilos.css'
import Juan from '../utils/images/reel_slim_mujer.PNG'
const Footer = () => {
    return ( //Lo que va a devolver a donde yo llamo cuerpo en app.js
        <div className= "Container_Footer"> 
          <h1> Este es el contenido del footer</h1>
          <img src={Juan} alt="Hola esta es la img" />
        </div>
    )
}
export default Footer