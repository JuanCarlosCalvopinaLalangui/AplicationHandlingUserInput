import React from "react";

const ImageList = props => {
    // const images = props.images.map((image) => {
    //     return <img src={image.urls.regular}/>
    // });
    const images = props.images.map(({description, id, urls}) => <img key={id} src={urls.regular} alt={description}/>);
    console.log(props.images);
    return (
        <div className="ui list">
                {images}
        </div>
    );
}

export default ImageList;
