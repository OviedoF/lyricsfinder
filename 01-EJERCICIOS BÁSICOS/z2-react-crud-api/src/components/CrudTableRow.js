import React from 'react';
import './CrudTable.scss';

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
let {name, constellation, id} = el;
/* Los datos que recibimos los sacamos de el */

    return ( 
        <>
            <tr>
                <td>{name}</td>
                <td>{constellation}</td>
                 <td>
                    <button onClick={() => setDataToEdit(el)}>Editar</button>
                    <button onClick={() => deleteData(id)}>Eliminar</button>
                </td> 
            </tr>
        </>
     ); /* creamos una table row con los valores que recibimos en las props */
}
 
export default CrudTableRow;