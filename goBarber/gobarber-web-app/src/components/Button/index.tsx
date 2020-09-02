import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles'


type ButtonProps =  InputHTMLAttributes<HTMLInputElement>

const Button: React.FC<ButtonProps> = ({ children, ...res }) =>(

    <Container type="button">
      {children}
    </Container>


)

export default Button;
