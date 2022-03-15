import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchSong, setSearchSong] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        props.filterSongs(searchSong)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchSong} onChange={(e) => setSearchSong(e.target.value)} type='text' placeholder='Search by name...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar