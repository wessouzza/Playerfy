import React, { useState } from 'react';
import { ShufflePlayer } from './styles';
import {FiShuffle} from 'react-icons/fi';
import {BiSkipPreviousCircle} from 'react-icons/bi';
import {BsPlayCircle} from 'react-icons/bs';
import {BsPauseCircle} from 'react-icons/bs';
import {BiSkipNextCircle} from 'react-icons/bi';
import {BsArrowRepeat} from 'react-icons/bs'

const Player = () => {

  const [active, setActive] = useState(false)

  const playActive = () =>{
    setActive(true)
  }
  const pauseActive = () =>{
    setActive(false)
  }
  return (
      <ShufflePlayer active={active}>
          <div className='center-container'>
            <FiShuffle className='icons'/>
            <BiSkipPreviousCircle className='icons'/>
            <BsPlayCircle onClick={playActive} active={active} className='play-icon' />
            <BsPauseCircle onClick={pauseActive} active={active} className='pause-icon' />
            <BiSkipNextCircle className='icons' />
            <BsArrowRepeat className='icons' />
          </div>
      </ShufflePlayer>
  )
}

export default Player