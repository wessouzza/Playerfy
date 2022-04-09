import React, { useState } from 'react';
import { NavItems } from './styles';

const SidebarItems = ({title, Icon, onClick}) => {

  const [active, setActive] = useState(false)
  const clickActive = () =>{
    setActive(true)
  }

  return (
    <NavItems>
       
         {Icon && <Icon className='icons' /> }
         {Icon ? <h4 onClick={onClick ? ()=> onClick() : null}>{title}</h4> : <p>{title}</p>}
       
    </NavItems>
  )
}


export default SidebarItems