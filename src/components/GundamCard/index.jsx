import axios from "axios";
import React from "react";
import './index.scss'

const BASE_URL = 'http://localhost:3000/v1/gundams'

const Card = (props) => {

    const deleteGundam = () => {
        axios.delete(`${BASE_URL}/${props.gundamId}`, {method: 'DELETE'}).then(() => {
            props.deleteGundam(props.gundamId);
        })
    }


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
                <button className="primary-button card__delete_button" onClick={() => deleteGundam()}>Delete</button>
            </div>
        </>
    );
}

export default Card;