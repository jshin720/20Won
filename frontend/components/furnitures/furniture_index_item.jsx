import React from "react";
import { Link } from "react-router-dom";

const FurnitureIndexItem = (props) => {
  const { furniture } = props;
  const mainPic = furniture.photoUrls[0];
  return (
    <div>
        <img src={ mainPic } alt="" className="furniture-picture" />
      <li className="furniture-info">
        <Link to={`/furnitures/${furniture.id}`} className="furniture-images">
          {furniture.name}
          {furniture.price}
          {/* {furniture.category} */}
          {/* {furniture.color} */}
        </Link>
      </li>
    </div>
    
  )}



export default FurnitureIndexItem;