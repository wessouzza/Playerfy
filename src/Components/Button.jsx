import React from 'react'
import { MainButton } from './styles'

const Button = (props) => {
  return (
    <MainButton
    onClick={props.onClick ? ()=> props.onClick() : null}>
        {props.children}
    </MainButton>
  )
}

export default Button