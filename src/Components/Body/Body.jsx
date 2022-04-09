import React from 'react';
import Player from '../Player/Player';
import { MiddleContainer } from './styles';
import { useDataLayerValue } from '../../DataLayer';
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import SongComponent from '../SongComponent/SongComponent';
import Card from '../Card/Card';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const Body = () => {

 const [{discover_weekly, recently_played}, dispatch] = useDataLayerValue()

  return (
    
      <MiddleContainer>
        <h3>Recently played</h3>
        <div className='header'>
          <Swiper 
            grabCursor={true}
            slidesPerView={5}
            spaceBetween={190}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper">
              <div className='slider'>
                {recently_played?.items?.map((item)=>(
                  <SwiperSlide>
                    <Card track={item.track} />
                  </SwiperSlide>
                  ))}
              </div>
          </Swiper>
        </div>
          
        <h3>Discover</h3>
            {discover_weekly?.tracks.items.map((item)=>(
              <SongComponent track={item.track} />
            ))}
 
            <Player />
      </MiddleContainer>
    
  )
}

export default Body