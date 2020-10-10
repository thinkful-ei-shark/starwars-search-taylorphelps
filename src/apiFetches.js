import config from './config.js';
import setCharacters from './App';

const getCharacters = () => {
  fetch(`${config.API_ENDPOINT}/people`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(setCharacters)
    .catch(error => this.setState({ error }));
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
