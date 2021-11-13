import { NavLink } from 'react-router-dom';
import {Profile} from './profile'
import './style.css';
import { Button } from 'reactstrap';
import * as FaIcons from 'react-icons/ai'

export const Navbar = () => {
    return (
        <div class="sidebar close bg-light"> 
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
        <ul class="nav-links">
          <Profile/>
                    <li>
            <NavLink to = "/"> 
            <Button className="btn-primary" activeclassName = "active"><FaIcons.AiTwotoneHome/> HOME </Button>
             </NavLink>
          </li>
          <li>
            <NavLink to = "/sesion">
            <Button className="btn-primary" activeclassName = "active"><FaIcons.AiOutlineUsergroupDelete/> PERFIL </Button>
            </NavLink>
          </li>
          <li>
            <NavLink to = "/contenido"> 
            <Button className="btn-primary" activeclassName = "active" ><FaIcons.AiFillCode/> CONTENIDO </Button>
             </NavLink>
          </li>
          <li>
            <NavLink to = "/publicaciones"> 
            <Button className="btn-primary" activeclassName = "active" ><FaIcons.AiOutlineComment/> PUBLICACIONES </Button></NavLink>
          </li>
    </ul>  
  </div>
    );
}