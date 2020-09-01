import styled from 'styled-components'
import { shade } from 'polished'

import SignIn from '../../assets/sign-in-background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  height: 100%;
  max-height: 700px;

  form{
    margin: 80px;
    width: 340px;
    text-align: center;

    h1{
      margin-bottom: 24px;
    }

    input{
      background: #232129;
      color: #f4ede8;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width:100%;

      &::placeholder{
        color: #f4ede8;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button{
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      color: #312e38;
      margin-top: 16px;
      font-weight: 600;
      transition: 0.2s;

      &:hover{
        background-color: ${shade(0.2, '#ff9000')};
      }


    }

    a {
      margin-top: 30px;
      color: #f4ede8;
      display: block;
      text-decoration: none;
      transition: 0.2s;

      &:hover{
        color: ${shade(0.2, '#f4ede8')}
      }
    }
  }
  > a {
    margin-top: 24px;
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: 0.2s;

    &:hover{
      color: ${shade(0.2, '#ff9000')}
    }

  }
    svg{
      margin-right: 8px;
    }

`

export const Background = styled.div`
  flex:1;
  background: url(${SignIn}) no-repeat, center;
  background-size: cover;
`
