import React from 'react';

const VideoGridItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;


    /*
    ES5:
    const VideoListItem = (props) => {
        const video = props.video;
        const onVideoSelect = props.onVideoSelect;
     */


    return (
        <div onClick={() => onVideoSelect(video)}>
            <div>
                <div>
                    <img src={imageUrl}/>
                </div>
                <div>
                    <div>{video.snippet.title}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoGridItem;