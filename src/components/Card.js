import React from "react";

export default function Card (props) {
    return (
            <div className="card">
                <img src={props.image} className="card--image"/>
                <div className="card--stats">
                    <img src="Star.png" className=""/>
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price} </span>/ person</p>
            </div>
    )
}