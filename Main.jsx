import React from 'react'
import kyrgyz_video from './public/kyrgyz_video.mp4'

const Main = () => {
    return (
        <div className='main'>
            <video src={kyrgyz_video} autoPlay loop muted></video>
        </div>
    )
}

export default Main