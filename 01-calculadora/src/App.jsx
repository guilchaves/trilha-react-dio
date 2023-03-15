import React from 'react';

import Input from './components/Input';
import Button from './components/Button';
import Calculator from './components/Calculator';

import { Container, Content, Row } from './styles';

const App = () => {
  return (
    <Container>
      <Calculator />
    </Container>
  );
};

export default App;
