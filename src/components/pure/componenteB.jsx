import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

/** 
Componente B:
Por otro lado, tenemos el componente B que va a recibir por props un contacto y 
va a poder cambiar su estado de conectado a desconectado y viceversa.

Si el contacto está conectado, se debe mostrar: Contacto En Línea
Si el contacto no está conectado, se debe mostrar: Contacto No Disponible

*/

const ComponenteB = ({contacto}) => {
    return (
        <div>
            <h2>
                Nombre: {contacto.nombre} 
            </h2>
            <h3>
                Apellido: {contacto.apellido}
            </h3>
            <h4>
                Email: {contacto.email}
            </h4>
            <h5>
                ¿Conectado?: { contacto.conectado ? 'Contacto En Línea':'Contacto No Disponible'}
            </h5>
        </div>
    );
};

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ComponenteB;
