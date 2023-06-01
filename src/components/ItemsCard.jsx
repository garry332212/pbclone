import React from "react";

const ItemsCard = (props) => {
  return (
    <div className="containerItem">
      <div className="cardBody">
        <div className="image">
          <img src={props.imgLink} alt="" />
        </div>
        <h3>{props.title}</h3>
        <ul>
          {props.lists.map((list, id) => (
            <li key={id}>
              <a className="list" href={props.urlLinks}>
                {list}
              </a>
            </li>
          ))}

          <li className="allCat">
            <a
              href={props.allCatLink}
              target="blank"
            >
              All Categories ➡
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemsCard;
