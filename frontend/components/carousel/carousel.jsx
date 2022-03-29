import React, { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import * as RiIcons from 'react-icons/ri';



function Carousel(props) {
  const [currImg, setCurrImg] = useState(0);
  const photosArr = props.furniture.photoUrls.slice(0, -1)
  const lastPhotoIdx = photosArr.length - 1;

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
      <div className="picture-container">
        {photosArr.map((photoUrl, index) => {
          return (
            <div
              className={currImg === index ? "slide active-anim" : "slide"}
            >
              <img src={`${photosArr[currImg]}`} />
            </div>
          )
        })}
      </div>

      <div className="picture-nav-container">
        <RiIcons.RiArrowLeftSLine className='left-arrow' onClick={prevSlide} />
        <div className="container-dots">
          {photosArr.map((item, index) => (
            <div
              onClick={() => moveDot(index)}
              className={currImg === index ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
        <RiIcons.RiArrowRightSLine className='right-arrow' onClick={nextSlide} />
      </div>

      <div className="thumbnail-container">
        {photosArr.map((photoUrl, index) => {
          return (
            <div
              onClick={() => moveDot(index)}
              className={currImg === index ? "thumbnail active" : "thumbnail"}>
              <img src={photoUrl} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel;