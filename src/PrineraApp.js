import React from 'react';
import PropTypes from 'prop-types';
const PrimeraApp = ({saludo, subtitulo}) => {
    
    return(
         <>
        {/* <pre>{JSON.stringify( obj, null, 3)}</pre> */}
        <h1>{saludo}</h1>
        <p>{subtitulo}</p>
        </>
    ) 
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired

}
PrimeraApp.defaultProps= {
    subtitulo:"amigos"
}

export default PrimeraApp