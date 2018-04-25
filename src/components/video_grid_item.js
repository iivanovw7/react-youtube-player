import React from 'react';

const VideoGridItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;



    return (
        <div
            onClick={() => onVideoSelect(video)}
            className="row-element">
                    <img className={"gridElement"} src={imageUrl}/>
                    <div className={"gridElement"}>{video.snippet.title}</div>
        </div>
    );
};

export default VideoGridItem;