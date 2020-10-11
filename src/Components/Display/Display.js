import React, { Component } from 'react';
import StarWarsContext from '../../StarWarsContext';


export default class Display extends Component {
    static contextType = StarWarsContext;
    render() {
        const { starWarsData, search, filter } = this.context;
        const displayList = starWarsData.map(data => {
            if(data.name && filter !== 'films' && data.name.toLowerCase().includes(search.toLowerCase())) {
                return <li className='list-name'><h4>{data.name}</h4></li>
            } else if (data.title && filter === 'films' && data.title.toLowerCase().includes(search.toLowerCase())) {
                return <li className='list-item'><h4>{data.title}</h4></li>
            }
        })
        return (
            <div className='display'>
                <ul>
                {displayList}
                </ul>
             </div>
        )
    }
}