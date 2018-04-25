import React from 'react';
import VideoGridItem from './video_grid_item.js';


const VideoGrid = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoGridItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );

    });

    return (
        <div className="container__row">{ videoItems }</div>
    );

};

export default VideoGrid;

