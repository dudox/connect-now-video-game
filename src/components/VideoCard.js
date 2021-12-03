import React from 'react'
import Moment from 'react-moment'

export const VideoCard = ({ info, index }) => {
    return (
        <div className="video-item w-100">
            <div className="thumbnail" />
            <div className="info pt-2 pb-2">
                <div className="row video-title">{info.name}</div>
                <div className="row date"><span>Release Date: </span><Moment unix format="DD/MM/YYYY">{info.first_release_date}</Moment></div>
                <div className="row summary line-clamp">[Summary] {info.summary}</div>
            </div>
            <div className="number center">
                <span className="center">{index + 1}</span>
            </div>
        </div>
    )
}

