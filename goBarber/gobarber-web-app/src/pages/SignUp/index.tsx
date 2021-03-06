import React, { useCallback, useRef } from 'react'
import { FiLogIn, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import getValidationErros from '../../utils/getValidationsErrors'

import logo from '../../assets/LogOn.png'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async(data: object) => {
    formRef.current?.setErrors({})
    try{
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Digite email válido').email(),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos')
      })

      await schema.validate(data, {
        abortEarly: false
      })

    }catch (err){
      const errors = getValidationErros(err)
      formRef.current?.setErrors(errors)
    }
  },[])

  return (
    <Container>
    <Background />

    <Content>

      <Form ref={formRef} onSubmit={handleSubmit}>
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
