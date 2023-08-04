import React from 'react'
import VideoCard from "./VideoCard.jsx"
import "../styles/Videos.css"

const Videos = ({videos}) => {
  return (
    <div className='videos'>
      {
        videos.map((item,index)=>(
            <VideoCard index={index} key={item.image} name={item.name} image={item.image}/>
        ))
      }
    </div>
  )
}

export default Videos
