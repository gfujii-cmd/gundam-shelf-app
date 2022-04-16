import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={e => sendData(e)}>
            <div>
                <label htmlFor="name">Name: </label>
                <input id="name" value={name} onChange={e => setName(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="year">Year: </label>
                <input type="number" id="year" value={year} onChange={e => setYear(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="story">Story: </label>
                <textarea maxLength="170" rows="5" cols="35" id="story" value={story} onChange={e => setStory(e.target.value)}></textarea>
            </div>
            <input type="submit" value="Add"></input>
        </form>
    )
}

export default GundamForm;