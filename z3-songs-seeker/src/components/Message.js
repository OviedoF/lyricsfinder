import React from 'react';
import './Message.scss';

const Message = ({song,artist}) => {
    return (
        <div className="audun_warn" id={!song ? 'msgError_artist' : 'msgError_lyrics'}>
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <p>Ha ocurrido un error!</p>
            {song 
            ? <p>No se ha encontrado información de la canción "<em>{song}</em>" del artista "<em>{artist}</em>"</p> 
            : <p>No se ha encontrado información del artista "<em>{artist}</em>"</p>}
        </div>
    )
};

export default Message;