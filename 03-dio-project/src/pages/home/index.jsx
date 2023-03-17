import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button>Teste 1</Button>
      <Button variant="secondary">Teste 2</Button>
      <Link to="/login">Fazer login</Link>
    </>
  );
};

export default Home;
