import React from 'react';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line"></span>
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={'felipesanderp'}
            name={'Felipe Sander'}
            avatarUrl={'https://avatars2.githubusercontent.com/u/46326536?s=460&u=f72b94042e77899f6c4df3c5f41c9984456cda87&v=4'}
            followers={887}
            following={7}
            company={'Nubank'}
            location={'Curitiba, Brazil'}
            email={'felipe.panisson@hotmail.com'}
            blog={undefined}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'felipesanderp'}
                  reponame={'ecoleta'}
                  description={'NextLevel Week #01 project'}
                  language={n % 3 === 0 ? 'JavaScript': 'TypeScript'}
                  stars={10}
                  forks={5}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual date)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
