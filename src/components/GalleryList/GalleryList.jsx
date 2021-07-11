import react from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import '../GalleryList/GalleryList.css';

function GalleryList(props){
    console.log(props);

    return (
        <>
            <div>
            {props.list.map(item => 
                <GalleryItem key={item.id} item={item} likeClicked={props.likeClicked} />
                )}
            </div>
        </>
    )
}

export default GalleryList;