import React, { useState } from "react";
import { Link } from "react-router-dom";

const FurnitureIndexItem = (props) => {
  const { furniture } = props;
  const mainPic = furniture.photoUrls[0];
  const [image, setImage] = useState(mainPic)

  const handleOnMouseEnter = () => {
      setImage(furniture.photoUrls[1])
  }

  const handleOnMouseLeave = () => {
    setImage(mainPic)
  }

  return (
    <div>
      <li className="furniture-info">
        <Link to={`/furnitures/${furniture.id}`} className="furniture-images">
        <img src={ image } onMouseEnter={ handleOnMouseEnter } onMouseLeave={ handleOnMouseLeave }  alt="" className="furniture-picture" />
          {furniture.name}
          {furniture.price}
          {/* {furniture.category} */}
          {/* {furniture.color} */}
        </Link>
      </li>
    </div>
    
  )}



export default FurnitureIndexItem;