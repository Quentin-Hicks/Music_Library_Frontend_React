import React, { useState, useEffect } from 'react';
import axios from 'axios'
import MusicForm from './Components/MusicForm/MusicForm';
import DisplaySongs from './Components/DislpaySongs/DisplaySongs';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([])

  // function sendSong(){
  //   let song = {
  //     "id": 4,
  //     "title": "Video",
  //     "artist": "Indie.Arie",
  //     "album": "Amazing",
  //     "release_date": "2000-06-15",
  //     "genre": "RNB"
  // }
    // createSong(song)
    // }

  useEffect(() => {
    getAllSongs()
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
    console.log(response.data)
  }

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong)
    console.log(response.data)
    await getAllSongs()
  }

  async function getSongById(){
    let response = await axios.get(`http://127.0.0.1:8000/api/music/`)
    console.log(response)
    await getAllSongs()
  }

  // example of how a post is different and how to call by ID
  async function updateSong(songData, songId){
    let response = await axios.put(`http://127.0.0.1:8000/api/music/${songId}`, songData)
    console.log(response.data)
    await getAllSongs()
  }

  // async function deleteSong(){
  //   let response = await axios.delete()
  //   console.log(response.data)
  //   await getAllSongs()
  // }

  const filterSongs = (searchSong) => {
    console.log(searchSong)
    let matchingSongs = getAllSongs().fiter((song) => {
      if(song.title.toLowerCase().includes(searchSong.title.toLowerCase())){
        return true
      }
      else return false
    })

    setSongs(matchingSongs)
  }

  // need to make a component DisplaySongs and set it up like the
  // display post will need songs pass in as props, should look 
  // similar to how we are passing in props into MusicFrom
  // <DisplaySongs songs={songs}/>
  return (
    <div>
      <h3>My Music</h3>
      <div className='App'>
        <SearchBar filterSongs={filterSongs}/>
        <MusicForm createSong={createSong} />
        <DisplaySongs songs={songs} />
      </div>
    </div>
  );
}

export default App;
