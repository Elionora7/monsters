import React from 'react';
import './search-box.styles.css';

//functional component vs class component like app.js have access to the state
//does not have access to life cycle method

//gets props and return html method

export const SearchBox =({ placeholder,handleChange }) =>(
<input type='search' className='search' placeholder= {placeholder}
       onChange={handleChange } />
)