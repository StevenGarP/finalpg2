import React from 'react'
import {LogoutButton} from './logout';
import {Profile} from './profile';
import './contenidos/sesion.css';

const sesion = () => {
    
    return (
        <div>
            <div class = "profi">
            <Profile/>
            <LogoutButton/>
            </div>
            <div class="back-to-top"></div>

<div class="page-section">
  <div class="container">
  <div class="text-center wow fadeInUp">
      <div class="subhead">EL MUNDO CAMBIA CON CODIGO EL MUNDO CAMBIA CON</div>
      <h2 class="title-section">CODE- LEHRLING</h2>
      <div class="divider mx-auto"></div>
    </div>
    <div class="row">
        
      <div class="col-lg-4">
        <div class="card-service wow fadeInUp">
            
          <div class="header">
            <img src="../assets/img/services/service-1.svg" alt=""/>
          </div>
          <div class="body">
            <h5 class="text-secondary"></h5>
            <p></p>
            
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card-service wow fadeInUp">
          <div class="body">
            <h5 class="text-secondary">ESTAS POR SALIR DE ESTA APLICACION ¿SEGURO?</h5>
            <p>CODE LEHRLING te desea que hayas tenido un grato aprendizaje, recuerda pasar por 
                la seccion de PUBLICACIONES y dejar un comentario acerca de nuestra app, nuestros materiales
                o simplente si tienes una duda dejala aca para que alguien en algun momento pueda respondertela, o reponde la duda de alguien
                <br></br></p>
                <h5 class="text-secondary">CODE - LEHRLING TE LO AGRADECE</h5>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
    );
}

export default sesion;
