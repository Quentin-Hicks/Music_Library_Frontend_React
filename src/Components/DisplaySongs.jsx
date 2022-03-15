import React, { useState } from 'react';

const DisplaySongs = (props) => {
    return (
        <div>
        {props.songs.map((song, index) => {
            return (
                <div>
                    <div><p>{song.title}</p></div>
                </div>
            )
        })}
        </div>
    )
}

export default DisplaySongs