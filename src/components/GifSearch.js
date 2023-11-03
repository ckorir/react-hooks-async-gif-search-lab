import React, { useState } from 'react';

export default function GifSearch({ onSearch }) {

    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
      setQuery(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(query);
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for GIFs"
      />
      <button type="submit" className='btn btn-primary'>Find Gifs</button>
    </form>
  )
}