import React from 'react';


const StarWarsContext = React.createContext({
    search: '',
    filter: '',
    characters: [],
    films: [],
    getCharacters: () => {},
});

export default StarWarsContext;