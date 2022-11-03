import React from 'react';
import './CrudTable.scss';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEdit, deleteData}) =>{
    return ( 
        <div id='data-container'>
            <h3>Tabla de datos</h3>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {data.length > 0 
                    ? (data.map((el) => 
                        <CrudTableRow 
                        key={el.id} 
                        el={el} 
                        setDataToEdit={setDataToEdit} 
                        deleteData={deleteData}
                        />))
                    : (<tr>
                        <td colSpan='3'>Sin datos</td>
                      </tr>) }
                </tbody> 
            </table>
        </div>
     );
}

export default CrudTable;