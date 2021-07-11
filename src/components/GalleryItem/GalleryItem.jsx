import react from 'react';
import { useState } from 'react';
import '../GalleryItem/GalleryItem.css';

function GalleryItem(props){
    console.log(props);
    const [clicker, setClicker] = useState(true);

    // changes state when pic has been clicked
    const toggleClick = () => {
        setClicker(!clicker);
    }

    return (
        <div className="float-child">
            <section onClick={() => toggleClick(props.item.id)}>
                { clicker &&
                <img src={props.item.path} height='250' width='auto' />}
                { !clicker &&
                <p>{props.item.description}</p>}
            </section>
            <br></br>
            <button onClick={() => props.likeClicked(props.item.id)}>Like</button>
            <div>Likes: {props.item.likes}</div>
        </div>
    )



// Ternary solution, however it was reloading the button and like counter as well when toggling between pic and description, there is a better way...

    //     const [isClicked, setIsClicked] = useState(false);

    //     return ( (!isClicked) ? (
    //         <div className="float-child">
    //             <img onClick={() => setIsClicked(true)} src={props.item.path} height='250' width='auto' />
    //             <br></br>
    //             <button onClick={() => props.likeClicked(props.item.id)}>Like</button>
    //             <div>Likes: {props.item.likes}</div>
    //         </div>
    //     ) : (
    //     <div className="float-child">
    //             <p onClick={() => setIsClicked(false)} >{props.item.description}</p>
    //         <br></br>
    //         <button onClick={() => props.likeClicked(props.item.id)}>Like</button>
    //         <div>Likes: {props.item.likes}</div>
    //     </div>
    //     )
    // )
}

export default GalleryItem;