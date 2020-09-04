import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons'
import { useField } from '@unform/core'

import {Container} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType <IconBaseProps>
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...res}) =>{
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(()=> {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, inputRef])


  return (
    <Container>
    {Icon && <Icon size={20}/>}
    <input defaultValue={defaultValue} ref={inputRef} {...res} />

  </Container>
  )
}

export default Input;
