import React from 'react'
import {useState, useEffect} from "react"
import RatingInput from "./RatingInput"

const AddRatingButton = () => {
  const [inputVisible, setInputVisible] = useState();

  const onClick = () => {
    setInputVisible(prev => !prev);
  }

  return (
    <div>
      <button onClick={onClick}>Add Rating</button>
      {inputVisible && <RatingInput/>}
    </div>
  )
}

export default AddRatingButton