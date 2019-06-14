import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
  return (
    <Fragment>
      <Hero>
        <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting At $99">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </Fragment>
  );
}
