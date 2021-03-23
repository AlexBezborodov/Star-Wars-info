import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
// import SwapiService from '../../services/swapi-service';

const App = () => {
// const swapi = new SwapiService();
// swapi.getStarship(11)
//   .then((body) => {
//     console.log('starship',body);
//   })
//   swapi.getPerson(10)
//   .then((body1) => {
//     console.log('person',body1);
//   }) 
//   swapi.getPlanet(10)
//   .then((body2) => {
//     console.log('planet',body2);
//   }) 
  
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;