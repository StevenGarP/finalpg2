import {Profile} from './profile';
import './contenidos/home.css';
import pga from './prograa.jpg';
import mcL from './machine.jpg';
import cnc from './conoce.jpg';

const home = () => {
    return (    
        <div>
              <div class="back-to-top"></div>

<div class="page-section">
  <div class="container">
  <div class="text-center wow fadeInUp">
      <div class="subhead">EL FUTURO SE CREA APRENDIENDO</div>
      <h2 class="title-section">CODE-LEHRLING</h2>
      <div class="divider mx-auto"></div>
    </div>
    <div class="row">
        
      <div class="col-lg-4">
        <div class="card-service wow fadeInUp">
            
          <div class="header">
            <img src={pga} alt="" width = "250px" height = "220px"/>
          </div>
          <div class="body">
            <h5 class="text-secondary">TECNOLOGIA</h5>
            <p>Claramente estamos frente a la nueva revolucion indutrial y tanto para nosotros 
                como para nuestros pequeños el migrar a las profesiones tecnologicas es parte del futuro
                por lo que CODE-LERNING aporta al aprendizaje directo sobre tecnologia para que de manera 
                autodidacta los niños con hambre y pasion por este mundo puedan adentrarse y tambien para 
                aquellos que no lo conocen, puedan hecharle un ojo.

            </p>
            
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card-service wow fadeInUp">
          <div class="header">
            <img src={mcL}alt=""width = "250px" height = "220px"/>
          </div>
          <div class="body">
            <h5 class="text-secondary">PROGRAMACION</h5>
            <p>La programacion es un tipo de contenido de mucho aporte en el aprendizaje debido a su estructura
                y su abundate uso de logica denota un gran entrenamiento mental para todas las personas, ademas de 
                ser seguramente uno de los rubros laborales mas demandados en el futuro, por lo que se ve la clara ventaja 
                academica en las personas la cuales construyan su base en la programacion, por eso esta plataforma busca 
                mostrarte las bases de lo que es la programacion.
            </p>
            
          </div>
        </div>
      </div>
      <div class="col-lg-4">
          
        <div class="card-service wow fadeInUp">
          <div class="header">
            <img  src={cnc} alt="" width = "250px" height = "220px"/>
          </div>
          <div class="body">
            <h5 class="text-secondary">MACHINE LERNING</h5>
            <p>El auto aprendizaje (Machine Lerning) es una tecnologia que a base de algoritmos matematicos
                busca que los propios programas aprendan de los usuarios y asi mejorar tanto su experiencia en el uso
                como aportar mayor entendimiento a los dueños de estas aplicaciones, el aprender estas tecnologias 
                puede ser de beneficio para la mejora en el rendimiento academico a grandes rasgos debido a la implementacion 
                de los algoritmos, por lo que entender esto ayudaria a los jovenes a tener una perspectiva diferente de ver las cosas 
                y asi crear y tener su propio criterio de accion ante un problema, tal cual  lo haria un algoritmo
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
 
    );
}

export default home