import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'


import logo from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber"/>
      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" placeholder="E-mail" icon={FiMail}/>
        <Input name="password" icon={FiLock} placeholder="Senha"/>
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar Conta
        </a>
    </Content>
    <Background />

  </Container>
)

export default SignIn
