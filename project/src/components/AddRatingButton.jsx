import React from 'react'
import {useState} from "react"
import RatingInput from "./RatingInput"
import { supabase } from '../database/supabaseClient'

const AddRatingButton = () => {
  const [inputVisible, setInputVisible] = useState();

  const onClick = async () => {
    const {data, error} = await supabase
      .from("UserRatings")
      .select("user_key")
      .eq("user_key", process.env.DEV_USER_KEY)
      .env
    setInputVisible(prev => !prev);
  }

  return (
    <div>
      <button onClick={onClick}>Add Rating</button>
      {inputVisible && <RatingInput setInputVisible={setInputVisible}/>}
    </div>
  )
}

export default AddRatingButton