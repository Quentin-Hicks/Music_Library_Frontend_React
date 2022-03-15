import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [songs, setSongs] = useState([])

  function sendSong(){
    let song = {
      "id": 4,
      "title": "Video",
      "artist": "Indie.Arie",
      "album": "",
      "release_date": "2000-06-15",
      "genre": "RNB"
  }
  createSong(song)
  }

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong)
    console.log(response.data)
    setSongs(response.data)
  }

  return (
    <div>
      <h3>My Music</h3>
      <div className='App'>
        <button onClick={() => sendSong()}>Submit</button>
      </div>
    </div>
  );
}

export default App;
