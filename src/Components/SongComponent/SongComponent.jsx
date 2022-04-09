import React from 'react'
import { SongRow } from './styles'

const SongComponent = ({track}) => {
  return (
    <SongRow>
        <img className="artist-cover" src={track.album.images[0].url} alt="" />
        <div className='song-info'>
            <h1>{track.name}</h1>
            <p>
                {track.artists.map((artist)=> artist.name).join(", ")} -{" "}
                {track.album.name}
            </p>
        </div>
    </SongRow>
  )
}

export default SongComponent