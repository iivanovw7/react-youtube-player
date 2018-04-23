import React from 'react';
import VideoGridItem from './video_grid_item.js';


const VideoGrid = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoGridItem
                className="row-element"
                key={video.etag}
                video={video} />
        );

    });

    return (
        <div className="container__row">{ videoItems }</div>
    );

};

export default VideoGrid;

/*

<div className={"container"}>
                    <div className="container__row">
                        <div className="row-element">Row Element</div>
                        <div className="row-element">Row Element</div>
                        <div className="row-element">Row Element</div>
                        <div className="row-element">Row Element</div>
                        <div className="row-element">Row Element</div>
                        <div className="row-element">Row Element</div>
                        <div className="row-element">Row Element</div>
                    </div>
                </div>

 */