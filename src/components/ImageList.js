import './ImageList.css'
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
    // const images = props.images.map((image) => {
    //     return <img src={image.urls.regular}/>
    // });
    const images = props.images.map((image) => <ImageCard key={image.id} image={image}/>);
    console.log(props.images);
    return (
        <div className="image-list">
                {images}
        </div>
    );
}

export default ImageList;
