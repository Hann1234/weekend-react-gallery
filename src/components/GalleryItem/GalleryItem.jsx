import react from 'react';
import '../GalleryItem/GalleryItem.css';

function GalleryItem(props){
    console.log(props);

    return (
        <div>
            <img src={props.item.path} height='auto' width='auto' />
            <button onClick={() => props.likeClicked(props.item.id)}>Like</button>
            <div>Likes: {props.item.likes}</div>
        </div>
    
    )
}

export default GalleryItem;