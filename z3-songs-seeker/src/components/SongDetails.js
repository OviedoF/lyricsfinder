import React from 'react';
import SongArtist from './SongArtist';
import SongLyrics from './SongLyrics';
import Message from './Message';

const SongDetails = ({search, lyrics, bio}) => {
    if (!lyrics || !bio) return null

    return (
        <div>
            
            {lyrics.err || lyrics.err || lyrics.name === 'AbortError'
            ? <Message 
            song={search.song}
            artist={search.artist}
            />

            : <SongLyrics 
            lyrics={lyrics}
            title={search.song}
            artist={search.artist}/>
            }

            {!bio.artists 
            ? <Message 
            artist={search.artist}
            song={null}/> 
            : <SongArtist 
            bio={bio.artists[0]}
            />}

        </div>
      );
}
 
export default SongDetails;
