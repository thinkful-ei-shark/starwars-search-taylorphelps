import React, { Component } from 'react';


export default class Search extends Component {
    render() {
        return (
            <div className='search'>
                <label htmlFor='search'> Search </label>
                <input type='text' name='search' />
                <button type='submit'> Search </button>
             </div>
        )
    }
}