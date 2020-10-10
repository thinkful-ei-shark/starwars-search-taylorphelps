import React, { Component } from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';

export default class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
            <Search />
            <Filter />
            </div>
        )
    }
}