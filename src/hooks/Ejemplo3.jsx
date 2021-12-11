/**
 * ejemplo useState y useContext
 */

import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null);

const Componente1 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h2> La sesion es: {state.sesion}</h2>
        </div>
    );
}


export default function MiComponenteConContexto(){
    const estadoInicial = {
        token: '1234556',
        sesion: 1
    }

    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData({
            token:'abcdefg',
            sesion: sesionData.sesion +1
        })
    }

    return (
        <miContexto.Provider value={sesionData}>
            {/* todo lo que esta aquí dentro puede leer sesionData además de actualizarse*/}
            <h1> ejemplo useState y useContext </h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar sesión</button>
        </miContexto.Provider>
    )




}



