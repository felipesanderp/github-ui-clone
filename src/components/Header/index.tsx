import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

import { ThemeName } from '../../styles/themes';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    navigate('/' + search.toLowerCase().trim());

    setSearch('');
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchForm>
    </Container>
  );
}

export default Header;
