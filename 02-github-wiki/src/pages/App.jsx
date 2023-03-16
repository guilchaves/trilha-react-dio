import React, { useState } from 'react';
import gitLogo from '../assets/github.png';
import { Button, Input, ItemRepo } from '../components';

import { api } from '../services/api';

import { Container } from './styles';

const App = () => {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const alreadyFound = repos.find(repo => repos.id === data.id);

        if (!alreadyFound) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }
    } catch (err) {
      console.log(err);
    }

    alert('Repositório não encontrado');
  };

  const handleRemoveRepo = id => {
    const filteredId = repos.filter(repo => id !== repo.id);
    setRepos(filteredId);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} />
      <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => (
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
};

export default App;
