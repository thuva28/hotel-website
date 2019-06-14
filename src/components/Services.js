import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails/Limits Varies",
        info: "Free Cocktails/Limits Varies"
      },
      {
        icon: <FaHiking />,
        title: "Hiking Locations To See The Scenery",
        info: "Hiking Locations To See The Scenery"
      },
      {
        icon: <FaShuttleVan />,
        title: "Take A Shuttle Anywhere You Want To",
        info: "Take A Shuttle Anywhere You Want To"
      },
      {
        icon: <FaBeer />,
        title: "If You Are Not A Fan Of Cocktail,Try Our Beer",
        info: "Take A Shuttle Anywhere You Want To"
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    );
  }
}

export default Services;

