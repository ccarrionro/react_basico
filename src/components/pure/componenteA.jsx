import React from 'react';
import {Contacto} from '../../models/contacto.class';
import ComponenteB from './componenteB';

const ComponenteA = () => {

    const defaultContacto = new Contacto('Carlos','Carrión','ccarrionro@gmail.com', true);

    /*
    const changeState = (id => {
        console.log('TODO: Cambiar estado de una tarea');
    })
    */

    return (
        <div>
            <div>
                Estado de contacto: 
            </div>
            
            <ComponenteB contacto={defaultContacto}></ComponenteB>

        </div>
    );
};


export default ComponenteA;
