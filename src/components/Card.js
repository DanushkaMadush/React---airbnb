import React from "react";

export default function Card (props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.country === "Online") {
        badgeText = "ONLINE"
    }

    return (
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={props.image} className="card--image"/>
                <div className="card--stats">
                    <img src="Star.png" className="card-rating-icon"/>
                    <span className="card-rating">{props.rating}</span>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.country}</span>
                </div>
                <p className="card--title">{props.title}</p>
                <p><span className="bold">From ${props.price} </span>/ person</p>
            </div>
    )
}