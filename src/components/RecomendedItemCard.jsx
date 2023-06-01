import React from "react";
import "./CSS/RecomendedItems.css"

const RecomendeItemCard = ({imgLink,title,lists,urlLinks}) => {
  return (
    <div className="containerItem2">
      <div className="cardBody2">
        <div className="image">
          <img src={imgLink} alt="" />
        </div>
        <h5>{title}</h5>
        <ul>
          {lists.map((list, id) => (
            <li key={id}>
              <a className="list" href={urlLinks}>
                {list}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecomendeItemCard;
