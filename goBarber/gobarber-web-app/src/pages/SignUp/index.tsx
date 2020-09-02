import React from 'react'
import { FiLogIn, FiUser, FiMail } from 'react-icons/fi'


import logo from '../../assets/LogOn.png'

import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>

      <form>
        <h1>Faça seu cadastro</h1>

        <input name="name" icon={FiUser} placeholder="Nome" />
        <input name="email" icon={FiMail} placeholder="E-mail"/>
        <input type="password"placeholder="Senha"/>
        <button type="submit">Entrar</button>
      </form>
      <a href="login">
        <FiLogIn />
        Voltar para logon
        </a>
    </Content>


  </Container>
)

export default SignUp
