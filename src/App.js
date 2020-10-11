import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import config from './config.js';
import StarWarsContext from './StarWarsContext';

export default class App extends Component {
  state = {
    search: '',
    filter: '',
    characters: [],
    films: [],
    error: null
  }

   getCharacters = (e) => {
     e.preventDefault();
     let search = e.target.search.value;
     let filter = e.target.filter.value;
     this.setState({
       search: search,
       filter: filter,
     }) 
    fetch(`${config.API_ENDPOINT}/${filter}/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log(result.results);
        this.setState({
          characters: result.results
        })
      })
  };

  render() {
    const starContext = {
      search: this.state.search,
      filter: this.state.filter,
      characters: this.state.characters,
      films: this.state.films,
      getCharacters: this.getCharacters
    }
    return (
      <StarWarsContext.Provider value={starContext}>
      <div className='App'>
        <h1> Star Wars Search </h1>
        <Main />
      </div>
      </StarWarsContext.Provider>
    );
  }
}
