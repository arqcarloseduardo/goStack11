import React, { useCallback, useRef, useContext } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { AuthContext } from '../../context/AuthContext'

import getValidationErros from '../../utils/getValidationsErrors'


import logo from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'

interface SignInFormData {
  email: string,
  password: string
}


const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const {signIn} = useContext(AuthContext)

  const handleSubmit = useCallback(async(data: SignInFormData) => {
    formRef.current?.setErrors({})
    try{
      const schema = Yup.object().shape({
        email: Yup.string().required('Digite email válido').email(),
        password: Yup.string().required('Senha Obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      signIn({
        email: data.email,
        password: data.password
      })

    }catch (err){
      const errors = getValidationErros(err)
      formRef.current?.setErrors(errors)
    }
  },[signIn])

  return(
    <Container>
      <Content>
        <img src={logo} alt="GoBarber"/>
        <Form ref={formRef} onSubmit={handleSubmit} >
          <h1>Faça seu logon</h1>

          <Input name="email" placeholder="E-mail" icon={FiMail}/>
          <Input name="password" icon={FiLock} placeholder="Senha"/>
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form >
        <a href="login">
          <FiLogIn />
          Criar Conta
          </a>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn
