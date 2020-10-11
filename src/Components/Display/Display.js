import React, { Component } from 'react';
import StarWarsContext from '../../StarWarsContext';


export default class Display extends Component {
    static contextType = StarWarsContext;
    render() {
        const { characters, search, filter } = this.context;
        const characterList = characters.map(character => {
            if (character.name.includes(search)) {
                return (
                    <li className='list-item'>{character.name}</li>
                )
            }
        })

        const filmList = characters.map(film => {
            if(filter === 'films' && film.title.toLowerCase().includes(search.toLowerCase())) {
                return (
                    <li className='list-item'>{film.title}</li>
                )
            }
        })
        console.log(filter);
        return (
            <div className='display'>
                <ul>
                {characterList}
                {filmList}
                </ul>
             </div>
        )
    }
}