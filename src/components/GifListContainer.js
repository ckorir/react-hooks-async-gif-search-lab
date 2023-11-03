import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default function GifListContainer() {

  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('meme');

  useEffect(() => {
    // calls the fetchGifs function with the updated query value
    fetchGifs(query);
  }, [query]);

  function fetchGifs(searchQuery) {

    const apiKey = 'sLlDXEMfy5IQPhO5kgi57sK3VqmXBS5O';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data.slice(0, 3)); // Store the first 3 gifs in the state
      })
      .catch((error) => console.error(error));

  }

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  }

  return (
    <div className='container-md row' >
        <div className='col-md-6'>
            <GifList gifs={gifs} />
        </div>
        <div className='col-md-6'>
             <GifSearch onSearch={handleSearch} />
        </div>
    </div>
  )
}