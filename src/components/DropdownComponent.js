import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button,
     UncontrolledDropdown} from 'reactstrap';

function DropdownComponent() {

    const [dropdownOpen, setDropdownOpen] = useState(false);


    return (
        <div className='d-flex justify-content-center' style={{marginTop: '300px'}}>
            
            {
                /*
            <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}
                
                >
                    
                <DropdownToggle color='dark' caret 
               >
                    Dropdown
                </DropdownToggle>

                <DropdownMenu dark >
                    <DropdownItem header>Encabezado</DropdownItem>
                    <DropdownItem className='text-danger' 
                    onClick={()=> window.open('https://www.youtube.com/@abj95100?sub_confirmation=1')}
                    >Suscribete al canal de BorjaScript</DropdownItem>
                    <DropdownItem text>Tipo Texto</DropdownItem>
                    <DropdownItem divider />

                    <DropdownItem disabled>Deshabilitada</DropdownItem>
                    <DropdownItem active>Active</DropdownItem>

                </DropdownMenu>
            </Dropdown>
*/
            }


<UncontrolledDropdown 
                group
                >

                    <Button color='success' onClick={()=>alert('Este es el botón separado')}>
                        Acción Separada
                    </Button>
                    <DropdownToggle caret color='success' split />

                <DropdownMenu dark >
                    <DropdownItem header>Encabezado</DropdownItem>
                    <DropdownItem className='text-danger' 
                    onClick={()=> window.open('https://www.youtube.com/@abj95100?sub_confirmation=1')}
                    >Suscribete al canal de BorjaScript</DropdownItem>
                    <DropdownItem text>Tipo Texto</DropdownItem>
                    <DropdownItem divider />

                    <DropdownItem disabled>Deshabilitada</DropdownItem>
                    <DropdownItem active>Active</DropdownItem>

                </DropdownMenu>
            </UncontrolledDropdown>




        </div>
    );
}

export default DropdownComponent;