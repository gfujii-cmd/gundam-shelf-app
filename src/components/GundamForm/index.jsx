import React, { useState } from "react";

const GundamForm = () => {

    const [name, setName] = useState('');
    const [year, setYear] = useState(0);
    const [story, setStory] = useState('');

    return (
        <form>
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