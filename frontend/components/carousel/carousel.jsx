import React, { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function Carousel(props) {
  const [currImg, setCurrImg] = useState(0);
  const photosArr = props.furniture.photoUrls.slice(0, -1)
  const lastPhotoIdx = photosArr.length - 1;
  console.log("caro", props.furniture)

  const nextSlide = () => {
    if (currImg !== lastPhotoIdx) {
      setCurrImg(currImg + 1)
    }
    else if (currImg === lastPhotoIdx) {
      setCurrImg(0)
    }
  }

  const prevSlide = () => {
    if (currImg !== 0) {
      setCurrImg(currImg - 1)
    }
    else if (currImg === 0) {
      setCurrImg(lastPhotoIdx)
    }
  }

  const moveDot = index => {
    setCurrImg(index)
  }

  return (
    <div className="container-slider">
      {photosArr.map((photoUrl, index) => {
        console.log(photoUrl)
        return (
          <div
            className={currImg === index ? "slide active-anim" : "slide"}
          >
            <img src={`${photosArr[currImg]}`}/>
          </div>
        )
      })}

      <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
      <div className="container-dots">
        {photosArr.map((item, index) => (
          <div
          onClick={() => moveDot(index)}
          className={currImg === index? "dot active" : "dot"}
          ></div>
          ))}
      </div>
          <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
    </div>
  )
}

export default Carousel;