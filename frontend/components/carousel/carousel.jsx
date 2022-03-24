import React, { useState } from 'react'
import ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon  from '@material-ui/icons/ArrowForwardIos';

function Carousel(props) {
  console.log("caro", props)
  const  [currImg, setCurrImg] = useState(0);
  const lastPhotoIdx = props.furniture.photoUrls.length - 1;
  
  return <div className='carousel'> 
    <div 
      className="inner-carousel" 
      style={{backgroundImage: `url(${props.furniture.photoUrls[currImg]})`}}
    >
      <div className="left" onClick={() => { currImg === 0 ? 
        setCurrImg(lastPhotoIdx) :
        setCurrImg(currImg - 1) 
      }} 
      >
        < ArrowBackIosIcon sytle={{ fontsize: 30}} />
      </div>
      <div className="center"></div>
      <div className="right" onClick={() => { currImg === lastPhotoIdx ? 
        setCurrImg(0) :
        setCurrImg(currImg + 1)
      }}
      >
        < ArrowForwardIosIcon sytle={{ fontsize: 30 }} />
      </div>
    </div>

  </div>
}

export default Carousel;