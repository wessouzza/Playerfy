import React, { useEffect } from 'react';
import { getTokenFronUrl } from './authConfig';
import Login from './Pages/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import HomeComponent from './Components/HomeComponent/HomeComponent';

const playerfy = new SpotifyWebApi()

function App() {
 
  const [{token}, dispatch] = useDataLayerValue()
  
  useEffect(()=>{
    const hash = getTokenFronUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      playerfy.setAccessToken(_token)

      playerfy.getMe()
        .then((user) =>{
          dispatch({
            type: 'SET_USER',
            user: user,
          })
        })

      playerfy.getUserPlaylists()
        .then((playlists) =>{
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists,
          })
        })
      }

      playerfy.searchTracks()
        .then((res)=>{
          dispatch({
            type: 'SET_SEARCH',
            search_track: res
          })
          console.log(res)
        })

      playerfy.getMyRecentlyPlayedTracks()
        .then((response)=>{
          dispatch({
            type: 'SET_RECENTLY_PLAYED',
            recently_played: response
          })
        })
          

      playerfy.getPlaylist('6ehdSiG3d2TinBXr1r7ZK0')
        .then((response)=>{
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response,
          })
        })
    },[])

  return (
    <div className="App">
      {
        token ?(
          <HomeComponent playerfy={playerfy}/>
          ): (
            <Login />
            )
      }
    </div>
  )
}

export default App

    //  {token ? <HomeComponent playerfy={playerfy} /> : <Login />}