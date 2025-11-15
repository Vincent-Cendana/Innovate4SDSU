import React from 'react'
import {useEffect, useState} from "react"

const RatingInput = () => {
    const [overallRating, setOverallRating] = useState(3);
    const [busyRating, setBusyRating] = useState(5);
    const [comment, setComment] = useState();

    return (
    <div>
        RatingInput: {overallRating}, {busyRating}
        <input type="number" min="1" max="5" value={overallRating} onChange={(e) => setOverallRating(Math.min(5, Math.max(1, parseInt(e.target.value) || 1)))}></input>
        <input onChange={(e) => setComment(e.target.value)}></input>
        <button>Submit</button>
    </div>
    )
}

export default RatingInput