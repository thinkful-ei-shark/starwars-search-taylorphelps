import React from 'react';


const StarWarsContext = React.createContext({
    search: '',
    filter: '',
    characters: [],
    getCharacters: () => {},
});

export default StarWarsContext;