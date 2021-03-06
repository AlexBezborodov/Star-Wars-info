import React, { Component, Fragment } from "react";
import Loader from "../loader";
import SwapiService from "../../services/swapi-service";
import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    isLoading: true,
  };
  constructor() {
    super();
    this.updatePlanet();
  }
  onPlanetLoaded = (planet) => {
    this.setState({ planet });
    this.setState({ isLoading: false });
  };
  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const { planet, isLoading } = this.state;

    const spinner = isLoading ? (
      <div className="mx-auto">
        <Loader />
      </div>
    ) : null;
    const content = !isLoading ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}   
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
