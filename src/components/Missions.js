import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import mission from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {mission.map((missions) => (
          <MissionCard
            key={ missions.name }
            name={ missions.name }
            year={ missions.year }
            country={ missions.country }
            destination={ missions.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
