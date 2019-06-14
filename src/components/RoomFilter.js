import React, { useContext } from 'react';

import { RoomContext } from '../context';
import Title from '../components/Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context
  // get types
  let types = getUnique(rooms, "type");
  // add "all"
  types = ["all", ...types];
  // map
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>;
  })

  // get people
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* slect type */}
        <div className="form-group">
          <label htmlFor="type">Search Rooms</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >{types}</select>
        </div>
        {/* guests type */}
        <div className="form-group">
          <label htmlFor="capacity">Number Of Guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >{people}</select>
        </div>
        {/* price */}
        <div className="form-group">
          <label htmlFor="price">Room Price $ {price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
