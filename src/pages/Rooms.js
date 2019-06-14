import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
  return (
    <Fragment>
      <Hero hero="roomsHero">
        <Banner title="The Rooms">
          <Link to="/" className="btn-primary">
            Return to home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </Fragment>
  );
}

export default Rooms;
