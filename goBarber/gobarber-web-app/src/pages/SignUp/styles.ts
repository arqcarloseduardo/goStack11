import styled from 'styled-components'
import { shade } from 'polished'

import SignUp from '../../assets/LogOn.png'

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
    color: #f4ede8;
    display: block;
    text-decoration: none;
    transition: 0.2s;

    &:hover{
      color: ${shade(0.2, '#f4ede8')}
    }

    svg{
      margin-right: 8px;
    }
  }

`

export const Background = styled.div`
  flex:1;
  background: url(${SignUp}) no-repeat, center;
  background-size: cover;
`
