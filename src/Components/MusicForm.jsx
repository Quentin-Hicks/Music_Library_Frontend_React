import React, { useState } from 'react';


const MusicForm = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        let newMusic = {
            title: title,
            artist: artist,
            album: album,
            releaseDate: releaseDate,
            genre: genre
        }
        console.log(newMusic)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div>
                <label>Artist</label>
                <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div>
                <label>Album</label>
                <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div>
                <label>Release Date</label>
                <input type='text' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>
            <div>
                <label>Genre</label>
                <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default MusicForm