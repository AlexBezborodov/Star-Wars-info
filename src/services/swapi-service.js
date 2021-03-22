// export default class SwapiService {

//   _apiBase = 'https://swapi.co/api';

//   async getResource(url) {
//     const res = await fetch(`${this._apiBase}${url}`);

//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}` +
//         `, received ${res.status}`)
//     }
//     return await res.json();
//   }

//   async getAllPeople() {
//     const res = await this.getResource(`/people/`);
//     return res.results;
//   }

//   getPerson(id) {
//     return this.getResource(`/people/${id}/`);
//   }

//   async getAllPlanets() {
//     const res = await this.getResource(`/planets/`);
//     return res.results;
//   }

//   getPlanet(id) {
//     return this.getResource(`/planets/${id}/`);
//   }

//   async getAllStarships() {
//     const res = await this.getResource(`/starships/`);
//     return res.results;
//   }

//   getStarship(id) {
//     return this.getResource(`/starships/${id}/`);
//   }
// }

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
  getPerson(id) {
    return this.getdata(`/people/${id}/`);
  }
  async getAllStarships(url) {
    const res = await this.getdata("/starships/");
    return res.results;
  }
  getStarship(id) {
    return this.getdata(`/starships/${id}/`);
  }

  async getAllPlanets(url) {
    const res = await this.getdata("/planets/");
    return res.results;
  }
  getPlanet(id) {
    return this.getdata(`/planets/${id}/`);
  }
}
