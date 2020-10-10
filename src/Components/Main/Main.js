import { render } from '@testing-library/react';
import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Display from '../Display/Display';


export default class Main extends Component {
    render() {
        return (
            <div className='main'>
            <SearchBar />
            <Display />
            </div>
        )
    }
}