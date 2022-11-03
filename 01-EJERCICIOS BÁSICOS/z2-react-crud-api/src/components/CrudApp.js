import React, { useState, useEffect } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import './CrudApp.scss';
import Loader  from './Loader';
import Message from './Message';

const CrudApp = () => {
    const [db, setDb] = useState([]); /* Iniciamos el state db con la db que creamos */
    const [dataToEdit, setDataToEdit] = useState(null); /* creamos la variable que nos indica si estamos editando o creando */
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    let url = 'http://localhost:5000/santos';
    
    useEffect(() => {
        setLoading(true)
        console.log('Asegurese de que json-server esté inicializado');
        console.log('npm run fake-api');

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setDb(res);
            setError(null);
            setLoading(null);
        })
        .catch((err) => {
            setLoading(null);
            setError(err);
        });
        // helpHttp().get(url, {})
        // .then((res) => {
        //     console.log(res);
        //     if(!res.err) {
        //         setDb(res);
        //         setError(null);
        //         setLoading(null);
        //     } else {
        //         setDb(null);
        //         setLoading(null);
        //         setError(res);
        //     }
        // })
        // .catch((err) => {
        //     console.log(err);
        // }); 
        /* Si no hay error, mandamos la respuesta a db 
        si hay error, actualizamos el state error con el resultado*/

    }, [url]);
    
    const createData = (data) => {
        data.id = Date.now();

        let options = {
            method: "POST",
            body: JSON.stringify(data), 
            headers:{"content-type": "application/json"}
         };

        fetch(url, options)
        .then(res => res.json())
        .then((res) => {
            setDb([...db, res])
        })
        .catch((err) => {
            console.log(err)
            alert('No se pudo hacer la petición al servidor, intente más tarde.')
        });

        // helpHttp().post(url, options)
        // .then((res) => {
        //     console.log(res);

        //     if(!res.err) {
        //         setDb([...db, res])
        //     } else {
        //         setError(res);
        //     }
        // })
        // .catch((err) => console.log(err));

        // axios.post(url, {data})
        // .then((res) => {
        //     setDb([...db, res.data.data]);
        // })
        // .catch((err) => {
        //     console.log(err);
        //     setError(err);
        // });
    } /* recibimos la data, le ponemos un id aleatorio y actualizamos db con lo que era, más la data */

    const updateData = (data) => {
        let endPoint = `${url}/${data.id}`;
        console.log(endPoint);

        let options = {
            method: "PUT",
            body: JSON.stringify(data), 
            headers:{"content-type": "application/json"}
        };

        fetch(endPoint, options)
        .then(res => res.json())
        .then(() => {
            let newData = db.map((el) => el.id === data.id ? data : el);
            setDb(newData);
        })
        .catch((err) => {
            console.log(err)
            alert('No se pudo hacer la petición al servidor, intente más tarde.')
        });

        // helpHttp().put(endPoint, {
        //     body: data, 
        //     headers:{"content-type": "application/json"}
        // }) 
        // .then((res) => {
        //     console.log(res);

        //     if(!res.err) {
        //         let newData = db.map((el) => el.id === data.id ? data : el);
        //         setDb(newData);
        //     } else {
        //         setError(res);
        //     }
        // })
        // .catch((err) => console.log(err));
    } /* recorremos map, y el elemento que coincida con el id de la data del parámetro, lo cambiamos por data, 
    y sino, devolvemos el elemento sin cambiar. Por último actualizamos la db */

    const deleteData = (id) => {
        let isDelete = window.confirm('¿Está seguro de eliminarlo? id= ' + id);

        if (isDelete){
            let endPoint = `${url}/${id}`

            let options = {
                method: "DELETE",
                headers: {"content-type": "application/json"}
            }

            fetch(endPoint, options)
            .then((res) => {
            if(!res.err) {
                let newData = db.filter(el => el.id !== id);
                setDb(newData);
            } else {
                setError(res);
            }
            })
            .catch(() => {
                alert('No se pudo eliminar el documento.')
            });

            // let options = {
            //     headers:{"content-type": "application/json"}
            // };

            // helpHttp().del(endPoint, options)
            // .then(res => {
            //     if(!res.err) {
            //         let newData = db.filter(el => el.id !== id);
            //         setDb(newData);
            //     } else {
            //         setError(res);
            //     }
            // });
        } else return /* newData recupera todos los elementos menos el que tenga el id del parámetro. */
    }

    return (

        <div>
            <h2>Crud APP</h2>
            <div className='crud-container'>
                
                <CrudForm 
                createData={createData} 
                updateData={updateData} 
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
                /> {/* Pasamos las funciones y el state dataToEdit hacia el CrudForm como propiedad */}

                {loading && <Loader />}
                {error && <Message codigo={error.status}/>}

                {/* cuando loading esté en true, cargamos su componente. Si pasa un error, pasamos el componente de message, 
                y recién cuando haya datos en db, renderizamos la CrudTable. */}

                {db.length > 0 && (
                <CrudTable 
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                /> ) }

                {/* Si hay algo en db, creamos la CrudTable
                Pasamos la db, setDataToEdit y la función deleteData */}

            </div>            

        </div>

    );
}

export default CrudApp;