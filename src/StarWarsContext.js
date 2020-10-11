import React from 'react';


const StarWarsContext = React.createContext({
    search: '',
    filter: '',
    starWarsData: [],
    getCharacters: () => {},
});

export default StarWarsContext;