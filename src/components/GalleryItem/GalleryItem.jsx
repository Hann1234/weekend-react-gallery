import react from 'react';
import { useState } from 'react';
import '../GalleryItem/GalleryItem.css';

function GalleryItem(props){
    console.log(props);
    const [isClicked, setIsClicked] = useState(props.isClicked);

        return ( (!isClicked) ? (
            <div className="float-child">
                <img onClick={() => setIsClicked(true)} src={props.item.path} height='100' width='auto' />
                <br></br>
                <button onClick={() => props.likeClicked(props.item.id)}>Like</button>
                <div>Likes: {props.item.likes}</div>
            </div>
        ) : (
        <div className="float-child">
                <p onClick={() => setIsClicked(false)} height='100' width='auto'>{props.item.description}</p>
            <br></br>
            <button onClick={() => props.likeClicked(props.item.id)}>Like</button>
            <div>Likes: {props.item.likes}</div>
        </div>
        )
    )
}

export default GalleryItem;