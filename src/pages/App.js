import logo from '../assets/img/borjascript logo.jpg';
import '../assets/css/App.css';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import DropdownComponent from '../components/DropdownComponent';
import ButtonGroupComponent from '../components/ButtonGroupComponent';

function App() {

  const [estaAbiertoNavbar, setEstaAbiertoNavbar] = useState(false);

  const [currentComponent, setCurrentComponent] = useState('');


  return (
    <div className="App">
      <Navbar  expand='sm' className='custom-navbar'>

      <NavbarBrand href='https://www.youtube.com/@abj95100?sub_confirmation=1' target='blank'>
          <img src={logo} width={30} height={30} aria-label='Logo Borjascript'/>
          Borjascript

        </NavbarBrand>

        <NavbarToggler aria-label='Abrir Menú' aria-expanded={estaAbiertoNavbar} 
        onClick={()=>setEstaAbiertoNavbar(!estaAbiertoNavbar)} />
        <Collapse isOpen={estaAbiertoNavbar} navbar>
        <Nav className='me-auto' navbar>
          <NavItem role='button'  >
            <NavLink className='custom-nav-item' onClick={()=>setCurrentComponent('ButtonComponent')}>Button</NavLink>
          </NavItem>

          <NavItem role='button'  >
            <NavLink className='custom-nav-item' onClick={()=>setCurrentComponent('DropdownComponent')}>Dropdown</NavLink>
          </NavItem>


          <NavItem role='button'  >
            <NavLink className='custom-nav-item' onClick={()=>setCurrentComponent('ButtonGroupComponent')}>ButtonGroup</NavLink>
          </NavItem>

        </Nav>

        </Collapse>

        
        


      </Navbar>

      <div className='mt-3'>

        {
          (currentComponent == 'ButtonComponent')
          ?
          <ButtonComponent />
          :
          (currentComponent == 'DropdownComponent')
          ?
          <DropdownComponent />
          :
          (currentComponent == 'ButtonGroupComponent')
          ?
          <ButtonGroupComponent />
          :

          <div></div>
        }


      </div>



    </div>
  );
}

export default App;
