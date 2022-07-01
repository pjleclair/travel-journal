import React from "react"
import "./Card.css"

function Card(props) {
  return (
    <div className="container">
        <div className="card">
            <img className="card--img" src={props.item.imageUrl} alt="travel"/>
            <div>
                <div className="card--line-1">
                    <img className="card--pin" src={require("../Images/pin_icon.png")}/>
                    <h3>{props.item.location}</h3>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 id="card">{props.item.title}</h1>
                <h2>{props.item.Date}</h2>
                <p>{props.item.description}</p>
            </div>
        </div>
    {!props.item.lastItem && <hr />}
    </div>
  );
}

export default Card;
