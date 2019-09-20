import './VideoItem.css';
import React from 'react';

const VideoItem = (props) => {
    // props = video one by one (maping)
    return(
        <div onClick={() => props.onVideoSelect(props.video)} className='item video-item'>
            <img
                className='ui image'
                src={props.video.snippet.thumbnails.medium.url}
                alt={props.video.snippet.title}
            />
            <div className='content'>
                <div className='header'>{props.video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;