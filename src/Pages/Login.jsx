import React from 'react'
import { loginUrl } from '../authConfig'
import { Container } from './styles'

const Login = () => {
  return (
    <Container>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </Container>
  )
}

export default Login