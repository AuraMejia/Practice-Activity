import React from 'react'
import '../utils/css/Todo.estilos.css'
import Sofia from '../utils/images/reel_oversize_mujer.PNG'


function Todo ()  {
    return (
        <div className="Container_Cabecera"> 
        <h1>
           La mujer y la naturaleza
        </h1>
        <div className="Container_Text">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur fugiat culpa sequi labore excepturi. Suscipit nulla exercitationem eligendi cupiditate modi. Aliquam magnam possimus ut perspiciatis alias nihil facere fugit?

        </p>
        </div>
        <div className="Container_Image">  
        <img id="image1" src={Sofia} alt="Hola esta es la img" />
        </div>
        
        </div>
    )
}

export default Todo