import React, { Component } from 'react';
import StarWarsContext from '../../StarWarsContext';


export default class Display extends Component {
    static contextType = StarWarsContext;
    render() {
        const { characters, films, search, filter } = this.context;
        const characterList = characters.map(character => {
            if (filter !== 'films' && character.name.includes(search)) {
                return (
                    <li className='list-item'>{character.name}</li>
                )
            }
        })

        const filmList = films.map(film => {
            if(filter === 'films' && films.title.includes(search)) {
                return (
                    <li className='list-item'>{film.title}</li>
                )
            }
        })
        console.log(films);
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