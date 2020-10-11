import React, { Component } from 'react';
import Search from '../Search/Search';

export default class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
            <Search />
            </div>
        )
    }
}