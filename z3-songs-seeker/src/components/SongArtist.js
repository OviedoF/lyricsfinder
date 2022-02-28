import React from 'react';
import './SongArtist.scss';

const SongArtist = ({bio}) => {

    return ( 
        <div className='artistInfo'>
            <img src={bio.strArtistFanart} alt='artist img'></img>
            <h2>{bio.strArtist}<em>from: {bio.strCountry}</em></h2>
            <p>{bio.strBiographyES}</p>
        </div>
     );
}
 
export default SongArtist;