export default class SwapiService {
  _BASEURL = "https://swapi.dev/api";

  async getdata(url) {
    const res = await fetch(`${this._BASEURL}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetched ${url}, recieved ${res.status}`);
    }
    return res.json();
  }

  async getAllPeople(url) {
    const res = await this.getdata("/people/");
    return res.results;
  }
  async getPerson(id) {
    const person = await this.getdata(`/people/${id}/`);
    return this._transformPerson(person)
  }
  async getAllStarships(url) {
    const res = await this.getdata('/starships/');
    return res.results;
  }
  async getStarship(id) {
    const starShip = await this.getdata(`/starships/${id}/`);
    return this._transformSpaceShip(starShip);
  }

  async getAllPlanets(url) {
    const res = await this.getdata("/planets/");
    return res.results.map(this._transformPlanet);
  }
  async getPlanet(id) {
    const planet = await this.getdata(`/planets/${id}/`);
    return this._transformPlanet(planet)
  }
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1]
  }
  _transformPlanet (planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }  
  }
  
  _transformSpaceShip(starShip) {
    return {
      id: this._extractId(starShip),
      name: starShip.name,
      model: starShip.model,
      maxSpeed: starShip.max_atmosphering_speed,
      passengers: starShip.passengers
      
    }
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

}
