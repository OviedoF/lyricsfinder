import React, { useState, useEffect } from 'react';
import './CrudForm.scss';

const initialForm = {
    name: '',
    constellation: '',
    id: null,
} 

function CrudForm({createData, setDataToEdit, updateData, dataToEdit}) {
    const [form, setForm] = useState(initialForm); /* declaramos los valores iniciales del formulario */

    useEffect(() => {

        if(dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }

    }, [dataToEdit]); /* cada vez que dataToEdit cambie, nos fijamos si está vacía o no, si está vacía volvemos al formulario inicial
    sino, pasamos esa data al formulario. */


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }; /* cada vez que se cambia un input, se actualiza el form con lo que tenía y se cambia "name" o "constellation" respectivamente
    gracias al e.target.name y se le asigna el valor que tienen */

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.constellation) {
            alert('Datos incompletos!');
            return
        }

        if(form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
    }; /* manejamos el envío, si alguno de los dos input no tiene valor, mandamos una alerta, sino
    si el id del formulario es nulo, sabemos que se está creando un elemento, sino se está actualizando. 
    Simplemente ejecutamos el create o update data con el formulario como parámetro*/

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }; /* Manejamos el reset, volvemos el formulario al valor inicial y dataToEdit a null */

    return ( 
        <div className='form-container'>
            <h3>{dataToEdit ?  'Editar' : 'Agregar'}</h3>

            <form onSubmit={handleSubmit}>
                
                <div id='inputs-div'>

                    <div className='name-input'>
                        <label htmlFor='name'>Nombre: </label>
                        <input 
                        type='text' 
                        name='name'
                        autoComplete='off' 
                        onChange={handleChange} 
                        value={form.name}
                        />
                    </div>

                    <div className='const-input'>
                        <label htmlFor='constellation'>Constelación: </label>
                        <input 
                        type='text' 
                        name='constellation' 
                        autoComplete='off'
                        onChange={handleChange} 
                        value={form.constellation}
                        />
                    </div>

                </div>

                <input 
                type='submit' 
                value='Enviar'
                />

                <input 
                type='reset' 
                value='Limpiar' 
                onClick={handleReset}
                />
            </form>

        </div>
     );
}

export default CrudForm;