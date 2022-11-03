import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pelicula = () => {
    const [peli, setPeli] = useState({});
    const {idPelicula} = useParams();
    console.log(idPelicula);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => setPeli(res.data))
            .catch(err => console.log(err));
    }, [idPelicula]);

    return (
        <div>
            <h1>Peliculita</h1>

            <h2>{peli.original_title}</h2>
            <p>{peli.overview}</p>
        </div>
    );
}

export default Pelicula;
