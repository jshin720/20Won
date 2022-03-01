import React from "react";
import { Link } from "react-router-dom";

const FurnitureIndexItem = (props) => {
  const { furniture } = props;

  return (
    <div>
      <li className="furniture-info">
        <Link to={`/furnitures/${furniture.id}`} className="furniture-images">
          {furniture.name}
          {furniture.price}
          {furniture.category}
          {furniture.color}
        </Link>
      </li>
    </div>
    
  )}



export default FurnitureIndexItem;