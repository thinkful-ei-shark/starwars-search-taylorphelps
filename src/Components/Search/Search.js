import React, { Component } from 'react';
import StarWarsContext from '../../StarWarsContext';

export default class Search extends Component {
    static contextType = StarWarsContext;
    render() {
        const { handleDataSubmit, filter } = this.context;
        return (
            <form className='search' onSubmit={handleDataSubmit}>
                <label htmlFor='search'> Search </label>
                <input type='text' placeholder={`Search by ${filter}`} name='search'/>
                <button type='submit'> Search </button>

                <div className='filter-list'> 
                <label htmlFor='filter'> Filter By:  </label>
                <select name='filter' className='filter-box'> 
                    <option value='people'> Characters </option>
                    <option value='starships'> StarShips </option>
                    <option value='vehicles'> Vehicles </option>
                    <option value='films'> Films </option>
                    <option value='species'> Species </option>
                    <option value='planets'> Planets </option>
                </select>
             </div>
             </form>
        )
    }
}