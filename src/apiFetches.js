import config from './config.js';

const getCharacters = () => {
  fetch(`${config.API_ENDPOINT}/people/`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => {
      return res.json();
    })
    .then(result => {
      this.setState({
        characters: result,
      });
    });
};

const getStarShips = () => {
  fetch(`${config.API_ENDPOINT}/starships`)
    .then(response => response.json())
    .then(data => console.log(data));
};

const getVehicles = () => {
  fetch(`${config.API_ENDPOINT}/vehicles`)
    .then(response => response.json())
    .then(data => console.log(data));
};

const getFilms = () => {
  fetch(`${config.API_ENDPOINT}/films`)
    .then(response => response.json())
    .then(data => console.log(data));
};

const getSpecies = () => {
  fetch(`${config.API_ENDPOINT}/species`)
    .then(response => response.json())
    .then(data => console.log(data));
};

const getPlanets = () => {
  fetch(`${config.API_ENDPOINT}/planets`)
    .then(response => response.json())
    .then(data => console.log(data));
};

export default {
  getCharacters,
  getStarShips,
  getVehicles,
  getFilms,
  getSpecies,
  getPlanets,
};
