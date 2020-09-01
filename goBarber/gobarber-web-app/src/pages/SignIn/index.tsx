import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import logo from '../../assets/logo.svg'

import { Container, Content, Background } from './styles'

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber"/>
      <form>
        <h1>Faça seu logon</h1>

        <input type="password"placeholder="E-mail"/>
        <input placeholder="Senha"/>
        <button type="submit">Entrar</button>
        <a href="">
          <FiLogIn />
          Criar Conta
          </a>
      </form>

    </Content>
    <Background />

  </Container>
)

export default SignIn
