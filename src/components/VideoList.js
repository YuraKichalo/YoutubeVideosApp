import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    // props.videos === array of videos
    const renderVideoList = props.videos.map((video) => {
        return (
            <VideoItem
                onVideoSelect={props.onVideoSelect}
                video={video}
                key={video.id.videoId}
            />
        );
    })

    return(
        <div className='ui relaxed divided list'>{renderVideoList}</div>
    );
};

export default VideoList;