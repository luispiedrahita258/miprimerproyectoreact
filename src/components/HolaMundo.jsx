import React from 'react';

const HolaMundo = () =>{
    const Hello = '¡Hola Mundo!';
    const isTrue = true;
    return(
        <div className='HolaMundo'>
            <h1>{Hello}</h1>
            <h2>Curso Esencial React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React" />
            {isTrue ? <h4>Esto es Verdadero</h4> : <h5>Soy falso</h5>}
            {isTrue && <h5>Soy Verdadero</h5>}
        </div>
    );
};

export default HolaMundo;
