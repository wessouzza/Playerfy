import React from 'react'
import { CardArtist } from './styles'
import {BsPlayCircle} from 'react-icons/bs';

const Card = ({track}) => {
  return (
    <CardArtist>
      <BsPlayCircle className='play-icon' />
      <img className="card-image" src={track.album.images[0].url} alt="" />
      <h1>{track.name}</h1>
      <p>{track.album.name}</p>
    </CardArtist>
  )
}

export default Card