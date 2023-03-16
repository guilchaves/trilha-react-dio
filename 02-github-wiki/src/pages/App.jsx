import React, { useState } from 'react';
import gitLogo from '../assets/github.png';
import { Button, Input, ItemRepo } from '../components';

import { api } from '../services/api';

import { Container } from './styles';

const App = () => {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const alreadyFound = repos.find(repo => repos.id === data.id);

      if (!alreadyFound) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }
    }

    alert('Repositório não encontrado');
  };

  //todo
  const handleRemoveRepo = id => {
    console.log('Removendo registo', id);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} />
      <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => (
        <ItemRepo repo={repo} />
      ))}
    </Container>
  );
};

export default App;
