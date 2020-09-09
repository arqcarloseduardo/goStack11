import React, { useCallback } from 'react'
import { FiLogIn, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import logo from '../../assets/LogOn.png'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => {

  const handleSubmit = useCallback(async(data: object) => {
    try{
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Digite email valido').email(),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos')
      })

      await schema.validate(data, {
        abortEarly: false
      })

    }catch (err){
      console.log(err)
    }
  },[])

  return (
    <Container>
    <Background />

    <Content>

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} placeholder="Senha"/>
        <Button type="submit">Entrar</Button>
      </Form>

      <a href="login">
        <FiLogIn />
        Voltar para logon
        </a>
    </Content>


  </Container>
  )
}

export default SignUp
