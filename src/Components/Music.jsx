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
        <form>
            <div>
                <label></label>
                <input />
            </div>
            <div>
                <label></label>
                <input />
            </div>
            <div>
                <label></label>
                <input />
            </div>
            <div>
                <label></label>
                <input />
            </div>
            <div>
                <label></label>
                <input />
            </div>
            <button></button>
        </form>
    )
}

export default MusicLibraryForm