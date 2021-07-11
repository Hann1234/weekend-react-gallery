import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
// Add components below:
import GalleryList from '../GalleryList/GalleryList.jsx'

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

    // PUT to increase likes when like button is clicked
    const likeClicked = (itemId) => {
        axios({
            method:'PUT',
            url:`/gallery/like/${itemId}`
        })
        .then( response => {
            getList();
        })
        .catch( err => {
            console.log('Error purchasing (put) item', err);
        });
    }

    useEffect( ()=>{
      getItems();
  }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
        list={galleryItems}
        likeClicked={likeClicked} />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
