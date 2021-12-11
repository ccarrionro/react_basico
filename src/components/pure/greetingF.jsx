import React, { useState} from 'react';
import PropTypes from 'prop-types';

const Greetingf = (props) => {

    // breve introduccion a useState. Crea un estado privado 

    // hook necesario en funciones más sencillo state. Hay muchos hooks

    // nombre de la variable y método para actualizarla = el valor inicial
    const [age, setage] = useState(20);
    
    const birthday = () => {
        // actualiza el state
        setage(age +1)
    }


    return (
        <div>
                <h1>
                    Hola -- desde componente funcional {props.name}
                </h1>
     
                <h2>
                    Edad: {age}
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string
};


export default Greetingf;
