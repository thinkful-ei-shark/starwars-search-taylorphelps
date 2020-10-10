import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main';
// import getCharacters from './apiFetches';
import config from './config.js';

export default class App extends Component {
  state = {
    spaceships: [],
    vehicles: [],
    characters: [],
    films: [],
    species: [],
    error: null
  }

   getCharacters = () => {
    fetch(`${config.API_ENDPOINT}/people/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        return res.json();
        console.log(res);
      })
      .then(result => {
        console.log(result);
        this.setState({
          characters: result
        })
      })
  };


  // setCharacters = characters => {
  //   this.setState({
  //     characters,
  //     error: null,
  //   })
  // }

  render() {
    console.log(this.state.characters);
    return (
      <div className='App'>
        <h1> Star Wars Search </h1>
        <Main />
      </div>
    );
  }
}
