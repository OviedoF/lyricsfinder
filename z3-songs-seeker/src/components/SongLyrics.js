import React from 'react';
import './SongLyrics.scss';


const SongLyrics = ({lyrics, title, artist}) => {

    return ( 
    <div id='lyrics-container'>
        <h3>{title}, por {artist}</h3>
        <blockquote>{lyrics.lyrics.replace
        (`Paroles de la chanson ${title} par ${artist}`, '')}</blockquote>
    </div> );
}
 
export default SongLyrics;