import React from 'react';
import SongComponent from '../../Components/SongComponent/SongComponent';
import { useDataLayerValue } from '../../DataLayer';
import { Container } from './styles';

const Libary = () => {


  const [{recently_played}, dispatch] = useDataLayerValue();

  return (
    
    <Container>
      <h3>Library</h3>
      <div className='recently-played'>
        <h4>Recently played</h4>
        {recently_played?.items?.map((item)=> (
          <SongComponent track={item.track}/>
        ))}
      </div>
    </Container>
  )
}

export default Libary