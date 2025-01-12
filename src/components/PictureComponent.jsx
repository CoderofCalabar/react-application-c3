import React from 'react'

const PictureComponent = ({ imageDetails }) => {
  return (
    <div style={{display: "flex", flexDirection: "column", backgroundColor: "#fff"}}>
        <img src={imageDetails.thumbnailUrl} alt={imageDetails.title} style={{width: "auto", height: 100}} />
        <div>
        <p>{imageDetails.title}</p>
        </div>
        
    </div>
  )
}

export default PictureComponent