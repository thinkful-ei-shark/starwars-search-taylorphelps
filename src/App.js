import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import config from './config.js';
import StarWarsContext from './StarWarsContext';

export default class App extends Component {
  state = {
    search: '',
    filter: '',
    starWarsData: [],
    error: null
  }

   handleDataSubmit = (e) => {
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
        if(!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(result => {
        console.log(result.results);
        this.setState({
          starWarsData: result.results
        })
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const starContext = {
      search: this.state.search,
      filter: this.state.filter,
      starWarsData: this.state.starWarsData,
      handleDataSubmit: this.handleDataSubmit
    }
    return (
      <StarWarsContext.Provider value={starContext}>
      <div className='App'>
        <img src='https://fontmeme.com/temporary/b810444eac2b5eaef259d90e3bde356f.png' />
        <Main />
      </div>
      </StarWarsContext.Provider>
    );
  }
}
