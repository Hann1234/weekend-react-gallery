import react from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList(props){
    console.log(props);

    return (
        <>
            <div>
            {props.list.map(item => 
                <GalleryItem key={item.id} item={item} />
                )}
            </div>
        </>
    )
}

export default GalleryList;