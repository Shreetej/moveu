import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
  return (
    <ReactPlayer crossOrigin="true" width={'100%'} playing={true} playbackRate={1.5} loop={true} url="https://youtu.be/pLGBCXah_iU" controls={false} style={{}}/>
  )
}

export default VideoPlayer