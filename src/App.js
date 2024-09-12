import logo from './borjascript logo.jpg';
import './App.css';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';

function App() {

  const [estaAbiertoNavbar, setEstaAbiertoNavbar] = useState(false);


  return (
    <div className="App">
      <Navbar  fixed='top' expand='sm' className='custom-navbar'>

      <NavbarBrand href='https://www.youtube.com/@abj95100?sub_confirmation=1' target='blank'>
          <img src={logo} width={30} height={30} aria-label='Logo Borjascript'/>
          Borjascript

        </NavbarBrand>

        <NavbarToggler aria-label='Abrir Menú' aria-expanded={estaAbiertoNavbar} 
        onClick={()=>setEstaAbiertoNavbar(!estaAbiertoNavbar)} />
        <Collapse isOpen={estaAbiertoNavbar} navbar>
        <Nav className='me-auto' navbar>
          <NavItem>
            <NavLink href='/home' className='custom-nav-item'>Primer Elemento</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/about' className='custom-nav-item'>Segundo Elemento</NavLink>
          </NavItem>
        </Nav>

        </Collapse>

        
        


      </Navbar>
    </div>
  );
}

export default App;
