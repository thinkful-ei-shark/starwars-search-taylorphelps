import React, { Component } from 'react';


export default class Filter extends Component {
    render() {
        return (
            <div className='filter'> 
                <label htmlFor='filter'> Filter By:  </label>
                <select> 
                    <option> Character </option>
                    <option> StarShips </option>
                    <option> Vehicles </option>
                    <option> Films </option>
                    <option> Species </option>
                    <option> Planets </option>
                </select>
             </div>
        )
    }
}