import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    //Segundo State
    const [error, actualizarError ] = useState(false)

    // Funcion que se ejecuta cada que el usuario escribe en el input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

     //Extraer valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario agrega una cita
    const submitCita = e => {
        e.preventDefault();

        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
            actualizarError(true);
            return;
        }

        //Eliminar mensaje de error
        actualizarError(false);

        //Asignar un ID
        cita.id = uuid();
    
        //Crear la cita
        crearCita(cita);
        //Reiniciar el form

        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }
    

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p>     : null }

            <form
                onSubmit={submitCita}
            >

            
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre del dueño de la Mascota'
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={actualizarState}
                    value={sintomas}
                />
                <button
                type='submit'
                className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario;
