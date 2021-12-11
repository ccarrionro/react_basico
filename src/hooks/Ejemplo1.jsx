/**
 * Ejemplo de uso del hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado privado a através de un hook
 * y además poder modificarlo.
 */

import React, { useState} from 'react';

const Ejemplo1 = () => {
    
    // valor inicial para un contador
    const valorInicial = 0;

    // valor inicial para una persona
    const personaInicial = {
        nombre:"Carlos",
        email:"ccarrionro@gmail.com"
    }

    // Queremos que el valor inicial y personainicial sean parte del estado del componente para así poder gestionar 
    // su cambio y que este se vea reflejado en la vista del componente.
    // const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */


    function incrementarContador(){
        // funciónparaCambiar(nuevoValor)
        setContador(contador+1);
    }

    /**
     * funcion para actualizar el estado de persona en el componente.
     */
    function actualizarPersona () {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@hotmail.com'
            }
        )
    }


    return (
        <div>
          <h1> ** Ejemplo de useState()</h1>
          <h2>Contador: {contador}</h2>
          <h3>Persona: {persona.nombre}</h3>
          <h3>email: {persona.email}</h3>
            {/* bloque de botones para actualizar el estado */}
          <button onClick={incrementarContador}>Incrementar Contador</button>  
          <button onClick={actualizarPersona}>Actualizar Persona</button>  
        </div>
      );
  
}

export default Ejemplo1;

