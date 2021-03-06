import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    return (
        <li className="list-group-item video-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img src={video.snippet.thumbnails.default.url} className="media-object" />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;
