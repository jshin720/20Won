import React from "react";
import { Link } from "react-router-dom";



const PopularItem = props => {
  const { furniture } = props;

  return (
    <li className={`best-selling-item`}>
      <Link to={`/furnitures/${furniture.id}`} className="best-furniture-image">
        <img
          src={furniture.photoUrls[1]}
        />
      </Link>
    </li>
  )
}


export default PopularItem;