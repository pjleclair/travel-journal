import React from "react"
import "./Card.css"

function Card(props) {
  return (
    <div className="card">
        <img className="card--img" src={props.item.imageUrl} alt="travel"/>
        <hr />
    </div>
  );
}

export default Card;
