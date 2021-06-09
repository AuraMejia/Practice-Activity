import React from 'react' //Importar siempre la librería react
import '../utils/css/Cuerpo.estilos.css'
import Sofia from '../utils/images/girl.PNG'
const Cuerpo = () => {
    return ( //Lo que va a devolver a donde yo llamo cuerpo en app.js
    
        <div className="Container_Cuerpo"> 
        <h1>
           LA MUJER Y LA NATURALEZA
        </h1>
        <div className="Container_Text">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur fugiat culpa sequi labore excepturi. Suscipit nulla exercitationem eligendi cupiditate modi. Aliquam magnam possimus ut perspiciatis alias nihil facere fugit?

        </p>
        </div>
        
        <div className="ContainerImage">  
        <img id="image1" src={Sofia} alt="Hola esta es la img" />
        </div>
        
        </div>
    )
}
export default Cuerpo