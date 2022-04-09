import React, { useState } from 'react';
import { SideNav, SearchBox } from './styles';
import SidebarItems from '../Sidebar-Items/SidebarItems';
import {FaHome} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {MdLibraryMusic} from 'react-icons/md';
import {BsMusicNoteList} from 'react-icons/bs';
import { useDataLayerValue } from '../../DataLayer';
import Logo from '../../Assets/logo.png';
import {Link} from 'react-router-dom'
 
const Sidebar = () => {
  
  const [{user, playlists, search_track}, dispatch] = useDataLayerValue()
  
  const [active, setActive] = useState(false)
  const showSearch = () =>{
    setActive(true)
  }
  const hideSearch = () =>{
    setActive(false)
  }
  
 const showResults = (e) =>{
   if(e.key === 'Enter'){
     <Link to='/results' />
     console.log('Funciona, em partes....')
   }
 }

  return (
    <SideNav>
      <img className='logo' src={Logo} />
      
      <Link to='/'>
        <SidebarItems Icon={FaHome} title='Home' />
      </Link>
      <Link to='/library'>
        <SidebarItems Icon={MdLibraryMusic} title='Library' />
      </Link>
      <SidebarItems onClick={showSearch} Icon={FaSearch} title='Search' />
      <SearchBox 
        active={active} 
        onBlur={hideSearch}
        placeholder="Search" 
        type="text"
        onKeyDown={showResults}
        />
    
      <div className='playlists'>
        <span>Playlists</span>

       
        
        {playlists?.items?.map((playlist)=>(
          <SidebarItems title={playlist.name} />
        ))}
      <SidebarItems Icon={BsMusicNoteList} title='Rockx' />
      <SidebarItems Icon={BsMusicNoteList} title='Delta Blues' />
      <SidebarItems Icon={BsMusicNoteList} title='Minha Playlist n02' />
      </div>
      
    </SideNav>
  )
}

export default Sidebar