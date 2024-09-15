import React, { useState } from 'react';
import { ButtonGroup, Button, ButtonToolbar 
,Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
UncontrolledDropdown

} from 'reactstrap';


function ButtonGroupComponent() {

    const [radioSeleccionado, setRadioSeleccionado] = useState('rojo');

    const [checkSeleccionado, setCheckSeleccionado] = useState([]);

    const [paginaSeleccionada, setPaginaSeleccionada] = useState(1);


    const seleccionarCheck = (seleccionado) => {
        const index = checkSeleccionado.indexOf(seleccionado);

        if (index < 0) {
            checkSeleccionado.push(seleccionado);
        } else {
            checkSeleccionado.splice(index, 1);
        }
        setCheckSeleccionado([...checkSeleccionado]);
    }

    return (
        <div className='text-center'>

            <h5> Button Group Reactstrap</h5>

            <br />
            <h5>Radio Buttons</h5>

            <ButtonGroup size='lg' vertical>
                <Button color='danger'
                    outline
                    onClick={() => setRadioSeleccionado('rojo')}
                    active={radioSeleccionado === 'rojo'}
                >Rojo</Button>

                <Button color='warning'
                    outline
                    onClick={() => setRadioSeleccionado('amarillo')}
                    active={radioSeleccionado === 'amarillo'}
                >Amarillo</Button>

                <Button color='success'
                    outline
                    onClick={() => setRadioSeleccionado('verde')}
                    active={radioSeleccionado === 'verde'}
                >Verde</Button>
            </ButtonGroup>


            <h5 className='mt-5'>Checkbox Buttons</h5>

            <ButtonGroup>
                <Button color='dark'
                    outline
                    onClick={() => seleccionarCheck(1)}
                    active={checkSeleccionado.includes(1)}
                >CheckBox 1</Button>

                <Button color='dark'
                    outline
                    onClick={() => seleccionarCheck(2)}
                    active={checkSeleccionado.includes(2)}
                >CheckBox 2</Button>

                <Button color='dark'
                    outline
                    onClick={() => seleccionarCheck(3)}
                    active={checkSeleccionado.includes(3)}
                >CheckBox 3</Button>
            </ButtonGroup>

            <p>Seleccionado(s): {checkSeleccionado.length > 0 ? JSON.stringify(checkSeleccionado) : 'Ninguno'}</p>


            <h5>Agrupación y Paginación</h5>


            <ButtonToolbar className='d-flex justify-content-center'>


                <ButtonGroup className='me-2'>
                    <Button color='primary'
                        outline
                        onClick={() => setPaginaSeleccionada(1)}
                        active={paginaSeleccionada === 1}
                    >1</Button>

                    <Button color='primary'
                        outline
                        onClick={() => setPaginaSeleccionada(2)}
                        active={paginaSeleccionada === 2}
                    >2</Button>

                    <Button color='primary'
                        outline
                        onClick={() => setPaginaSeleccionada(3)}
                        active={paginaSeleccionada === 3}
                    >3</Button>

                    <Button color='primary'
                        outline
                        onClick={() => setPaginaSeleccionada(4)}
                        active={paginaSeleccionada === 4}
                    >4</Button>
                </ButtonGroup>


                <ButtonGroup>
                    <Button
                        outline
                    >1</Button>

                    <Button
                        outline
                    >2</Button>

                    <Button
                        outline
                    >3</Button>


                </ButtonGroup>

                <ButtonGroup>


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

                </ButtonGroup>


            </ButtonToolbar>


            <p>Página Seleccionada: {paginaSeleccionada}</p>




        </div>
    );
}

export default ButtonGroupComponent;