import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <header className='header'>
        <div className='logo'>
            <h1>Pom-Player</h1>
        </div>
        <nav className='navigation'>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    
      <form className='search' onSubmit={onSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search...'
        />
        <button type='submit'>Search</button>
      </form>
      </header>
  );
};

export default SearchBar;