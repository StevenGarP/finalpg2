import React from 'react';
import {Profile} from './profile';
import progra from './progra.jpeg';
import ia from './ia.jpeg';
import ml from './ml.jpeg';
import hl from './hl.jpg';
import wml from './wml.jpg';
//import './contenidos/publicaciones.css';



const contenido = () => {
    
    return (
        <div className="flex">
            <div className="progra">
                <h1>Aprendamos Que es programacion</h1> 
                <a href={'https://view.genial.ly/61719c6d8fa7720d8d541afe/presentation-progra'} target = "_blank"><img src={progra} width="500" height="300" /></a> 
            </div>
            <div className="IA">
                <h1>Aprendamos que es inteligencia artifical</h1>
                <a href={'https://view.genial.ly/61719ce85d759f0d86adc630/presentation-ia'} target = "_blank"><img src={ia} width="600" height="300" /></a> 
            </div>          
        </div>
    );
    
}

export default contenido