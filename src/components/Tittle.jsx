import React from 'react' //Importar siempre la librería react
import '../utils/css/Tittle.estilos.css'
import Sofia from '../utils/images/girl.PNG'

function Tittle ()  {
    return (
        <div className="Container_Tittle"> 
        <h1>
            ARTE ABSTRACTO
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur fugiat culpa sequi labore excepturi. Suscipit nulla exercitationem eligendi cupiditate modi. Aliquam magnam possimus ut perspiciatis alias nihil facere fugit?

        </p>
        <div className="ContainerImage">  
        <img id="image1" src={Sofia} alt="Hola esta es la img" />
        </div>
        
        </div>
    )
}

export default Tittle