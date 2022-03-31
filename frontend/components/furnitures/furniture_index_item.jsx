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
    <div className="item-container">
      <li className="furniture-info-container">
        <Link to={`/furnitures/${furniture.id}`} className="furniture-images" style={{ textDecoration: 'none', color: 'black' }}>
        <img src={ image } onMouseEnter={ handleOnMouseEnter } onMouseLeave={ handleOnMouseLeave }  alt="" className="furniture-picture" />
         <body className="furniture-information">
         <h1>
          {furniture.name} 
          </h1> 
          <h2>
          From $ {furniture.price}.00
          </h2>
          {/* {furniture.category} */}
          {/* {furniture.color} */}
         </body>
        </Link>
      </li>
    </div>
    
  )}



export default FurnitureIndexItem;