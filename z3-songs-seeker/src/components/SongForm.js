import React, {useState} from 'react';
import './SongForm.scss';
 
const initialForm = {
    artist: '',
    song: '',
}

const SongForm = ({handleSearch}) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.artist || !form.song){
            alert('Indica bien los valores')
            return;
        }

        handleSearch(form);
        setForm(initialForm);
    }

    return ( 
        <form className='form-container' onSubmit={handleSubmit}>
            <input type='text' 
            name='artist'
            placeholder='Nombre del intérprete'
            onChange={handleChange}
            value={form.artist}
            autoComplete='off' 
            />

            <input type='text' 
            name='song'
            placeholder='Nombre de la canción'
            onChange={handleChange}
            value={form.song}
            autoComplete='off' 
            />

            <input type='submit' value='Buscar canción'/>
        </form>
     );
}
 
export default SongForm;