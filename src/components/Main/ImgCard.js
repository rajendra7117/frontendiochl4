import React from 'react'
import './ImgCard.css'
const ImgCard = ({img, id, selected, selectImg}) => {

    const handleClick = e => {
        selectImg(id)
    }

  return (
    <div className={`img-card ${selected===id ? 'active' : ''}`}>
        <img src={img} onClick={handleClick}/>
        <div className='layer'></div>
    </div>
  )
}

export default ImgCard