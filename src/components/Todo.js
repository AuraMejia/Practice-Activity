import React from 'react'
import '../utils/css/Todo.estilos.css'
import Sofia from '../utils/images/reel_oversize_mujer.PNG'


function Todo ()  {
    return (
        <div className="Container_Cabecera"> 
        <h1>
            Hola, este es el componente de la cabecera
        </h1>
        <p>

        </p>
        <div className="ContainerImage">  
        <img id="image1" src={Sofia} alt="Hola esta es la img" />
        </div>
        
        </div>
    )
}

export default Todo