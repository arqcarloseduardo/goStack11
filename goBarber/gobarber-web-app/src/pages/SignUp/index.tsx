import React from 'react'
import { FiLogIn, FiUser, FiMail, FiLock } from 'react-icons/fi'


import logo from '../../assets/LogOn.png'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} placeholder="Senha"/>
        <Button type="submit">Entrar</Button>
      </form>
      <a href="login">
        <FiLogIn />
        Voltar para logon
        </a>
    </Content>


  </Container>
)

export default SignUp
