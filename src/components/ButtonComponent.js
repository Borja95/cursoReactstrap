import React, { useState } from 'react';
import { Button } from 'reactstrap';

function ButtonComponent() {

    const [habilitado, setHabilitado] = useState(true)
    const [estiloMaterial, setEstiloMaterial] = useState(true)

    const saludar=()=>{
        alert('Hola soy un botón de reactstrap');
    }

    return (
        <>
            <h5 className='mb-5'>Bot&oacute;n de Reactstrap</h5>

            <Button color='primary' outline={estiloMaterial} size='lg' 
            disabled={!habilitado}
            onClick={() => saludar()}
            className='custom-button'
            >Curso de Reactstrap</Button>
            
        </>
    );
}

export default ButtonComponent;