import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrump,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  Githubicon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrump>
        <RepoIcon />
        <Link className={'username'} to={'/felipesanderp'}>
          felipesanderp
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/felipesanderp/ecoleta'}>
          ecoleta
        </Link>
      </Breadcrump>

      <p>NextLevelWeek #01</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>4</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/felipesanderp/ecoleta'}>
        <Githubicon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;
