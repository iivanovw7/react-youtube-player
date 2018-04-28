import React from 'react';
import VideoListItem from './video_list_item.js';


const VideoList = (props) => {
    let rendered = 0;

    function counter() {
        return rendered++;
    }
    const videoItems = props.videos.map((video) => {


        if (rendered <= 3) {
            return (
                <VideoListItem
                    onVideoSelect={props.onVideoSelect}
                    key={video.etag}
                    video={video}
                    onshow={counter()}/>
            );
        }



    });

    return (
            <ul className="list-group">
                <h4>More videos: </h4>
                { videoItems }
            </ul>



        );

};

export default VideoList;