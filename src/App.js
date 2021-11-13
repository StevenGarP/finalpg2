import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './componentes/page/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar }  from '../src/componentes/page/navbar';
import home from '../src/componentes/page/home';
import sesion from '../src/componentes/page/Iniciosesion';
import contenido from '../src/componentes/page/contenido';
import publicaciones from '../src/componentes/page/Publicaciones';
import logo from './logo.png';
import './App.css';


function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <Router>
        {isAuthenticated ? (
          <>
          <div className="flex">
          <Navbar/>
          <div className="content">
          <Route path="/" exact={true} component ={home}></Route>
          <Route path="/sesion" exact={true} component ={sesion}></Route>
          <Route path="/contenido" exact={true} component ={contenido}></Route>
          <Route path="/publicaciones" exact={true} component ={publicaciones}></Route>
        </div>
        </div>
          </>
                  ):(
                    
                    <div className = "fondo">
                      <img class = "logo" src={logo}/>
                      <p class = "parrafo"><strong>¡ESTAS LISTO PARA SER UN NIÑO SIN IGUAL!</strong> <br/> <br/>EL MUNDO CAMBIA CON CÓDIGO - EL MUNDO CAMBIA CON CODE - LEHRLING;</p>

                    <p>INGRESA CON TU CORREO Y AVENTURATE EN UN MUNDO LLENO DE TECNOLOGIA Y CODIGO </p>
                    <LoginButton/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                    </div>
                  )}
        
 </Router>
  );
}

export default App;
