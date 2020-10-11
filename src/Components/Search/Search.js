import React, { Component } from 'react';
import StarWarsContext from '../../StarWarsContext';

export default class Search extends Component {
    static contextType = StarWarsContext;
    render() {
        const { getCharacters } = this.context;
        return (
            <form className='search' onSubmit={getCharacters}>
                <label htmlFor='search'> Search </label>
                <input type='text' name='search' />
                <button type='submit'> Search </button>

                <div className='filter-list'> 
                <label htmlFor='filter'> Filter By:  </label>
                <select name='filter'> 
                    <option> people </option>
                    <option> starships </option>
                    <option> vehicles </option>
                    <option> films </option>
                    <option> species </option>
                    <option> planets </option>
                </select>
             </div>
             </form>
        )
    }
}