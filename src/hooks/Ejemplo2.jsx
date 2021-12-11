/**
 * Ejemplo
 */

 import React, { useState, useRef, useEffect} from 'react';
    
const Ejemplo2 = () => {

    const[contador1,setContador1] = useState(0);
    const[contador2,setContador2] = useState(0);

    // vamos a crear una referecia con useRef para asociar una variable con un elemento del DOM del componente (vista html)
    const miRef = useRef();
    
    function incrementar1(){
        setContador1(contador1+1)
    }

    function incrementar2(){
        setContador2(contador2+1)
    }

/**
 * Trabajando con useEffect
 */

/**
 * ? caso 1 ejecutar siempre un snippet de código
 * cada vez que haya un cambio en el estado del componente se ejectua aquello que esté dentro del useEfectt()
 */

 //   useEffect(() => {
 //       console.log('cambio en el estado del componente');
 //       console.log('mostrando referencia al elemento dom');
 //       console.log(miRef);
 //   })

/**
 * ? caso 2 solo cuando haya cambio en contador 1
 * si cambia contador2 no pasa nada
 */
/*
    useEffect(() => {
        console.log("cmabio en el estado del componenrte");
        console.log(miRef);
      }, [contador1]);

      */
/**
 * ? caso 3 solo cuando haya cambio en contador 1
 * si cambia contador2 no pasa nada
 */

/**
 * ? caso 2 solo cuando haya cambio en contador 1
 * si cambia contador2 no pasa nada
 */

 useEffect(() => {
    console.log("cmabio en el estado del componente contador1 or contador2");
    console.log(miRef);
  }, [contador1, contador2]);

 /*
  useEffect(() => {
    console.log("cmabio en el estado del componenrte");
    console.log(miRef);
  }, [contador1]);
*/




    return (
        <div>
        <h1> ** Ejemplo de useState(), useRef y useEffect</h1>
        <h2>Contador1: {contador1}</h2>
        <h2>Contador2: {contador2}</h2>        
        <h4 ref={miRef}>
            ejemplo de elemento referenciado 
        </h4>
        
          {/* bloque de botones para actualizar el estado */}
        <button onClick={incrementar1}>Incrementar Contador 1</button>  
        <button onClick={incrementar2}>Incrementar Contador 2</button>  
        
      </div>
    );
}

export default Ejemplo2;
