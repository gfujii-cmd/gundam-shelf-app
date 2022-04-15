import React from "react";
import './index.scss'

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="card__image">
                    <img src={props.imageUrl}></img>
                </div>
                <div className="card__description">
                    <h3 className="card__description__title">{props.title} - {props.year}</h3>
                    <p className="card__description__story">{props.story}</p>
                </div>
            </div>
        </>
    );
}

export default Card;