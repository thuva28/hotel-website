import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import defaultBcg from '../images//room-1.jpeg';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { RoomContext } from '../context';
import SytledHero from '../components/StytleHero';

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>NO SUCH ROOM COULD BE FOUND...</h3>
          <Link to="/rooms" className="btn-primary">back to rooms</Link>
        </div>
      );
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    //images
    const [mainImg, ...defaultImg] = images;
    return (
      <Fragment>
        <SytledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </SytledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>pirce: ￥{price}</h6>
              <h6>size: {size}</h6>
              <h6>max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} people`}</h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {
              extras.map((item, index) => {
                return <li key={index}>* {item}</li>
              })
            }
          </ul>
        </section>
      </Fragment>
    );
  }
}

export default SingleRoom;

