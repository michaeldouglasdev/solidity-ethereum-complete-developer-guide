import React from 'react';
import { Container } from 'semantic-ui-react';
import { Header } from './header';
import 'semantic-ui-css/semantic.min.css'

export const Layout = (props) => {

  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  )
}