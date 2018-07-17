import React from 'react';
import VideoList from './video_list';

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
    <li className="list-group-item">
        <div className="video-list media">
            <div className="media-left"> 
                <img className="media-object" src={imageUrl}/>
            </div>
            <div className="media-body"> 
                <div className="media-heading"> 
                    <a href="#">{video.snippet.title} </a>
                </div> 
            </div>
        </div>
    </li>
    );
};


export default VideoListItem;