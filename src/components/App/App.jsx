import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import './App.css';
// Add components below:

function App() {

  //GET data from /gallery
  const [galleryItems, setGalleryItems] = useState([]);
    const getItems = () => {
        axios({
            method: 'GET',
            url: '/gallery'
        })
        .then( response => {
            console.log('GET items', response.data);
            setGalleryItems(response.data);
        })
        .catch( err => {
            console.log('Error during GET', err);
        });
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList list={galleryItems} />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
