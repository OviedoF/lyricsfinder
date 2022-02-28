import React, { useState, useEffect } from 'react';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import Loader from './Loader';
import {helpHttp} from '../helpers/helpHttp';

function SongSearch() {
    const [search, setSearch] = useState(null);
    const [lyrics, setLyrics] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(search === null) return;

        const fetchData = async () => {
            const {artist, song} = search;

            let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            console.log(artistUrl, songUrl);

            setLoading(true);

            const [artistRes, songRes] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl)
            ])

            console.log(artistRes);
            console.log(songRes);

            setBio(artistRes);
            setLyrics(songRes);
            setLoading(false);
        }

        fetchData();
    }, [search]);

    const handleSearch = (data) => {
        setSearch(data);
    }

    return ( 
        <div>

            {loading &&  <Loader />}
            <SongForm 
            handleSearch = {handleSearch}
            />

            {search && !loading &&
                <SongDetails
                    search = {search}
                    lyrics = {lyrics}
                    bio = {bio}
                />            
            }

        </div>
     );
}

export default SongSearch;