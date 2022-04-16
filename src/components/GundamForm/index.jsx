import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './index.scss';

const BASE_URL = 'http://localhost:3000/v1/gundams';

const GundamForm = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [story, setStory] = useState('');

    const sendData = (e) => {
        e.preventDefault();
        const newGundam = {
            name: name,
            year: parseInt(year, 10),
            story: story
        }
        axios.post(`${BASE_URL}`, newGundam).then(navigate("/list"))
    }

    return (
        <form onSubmit={e => sendData(e)} className="gundam_form">
            <div className="gundam_form__data">
                <label htmlFor="name">Name: </label>
                <input id="name" value={name} onChange={e => setName(e.target.value)} className="text_input"></input>
            </div>

            <div className="gundam_form__data">
                <label htmlFor="year">Year: </label>
                <input type="number" id="year" value={year} onChange={e => setYear(e.target.value)} className="text_input"></input>
            </div>

            <div className="gundam_form__data">
                <label htmlFor="story">Story: </label>
                <textarea maxLength="170" rows="5" cols="35" id="story" value={story} onChange={e => setStory(e.target.value)} className="text_area"></textarea>
            </div>
            <input type="submit" value="Add" className="submit_input"></input>
            <button onClick={navigate(-1)} className="primary-button">Go back</button>
        </form>
    )
}

export default GundamForm;