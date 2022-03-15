import React, { useState } from 'react';

const DisplaySongs = (props) => {
    return (
        <div>
        {props.songs.map((song, index) => {
            return (
                <div>
                    <div>
                        <p>{song.title}</p>
                        <p>{song.artist}</p>
                        <p>{song.album}</p>
                        <p>{song.release_date}</p>
                        <p>{song.genre}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default DisplaySongs