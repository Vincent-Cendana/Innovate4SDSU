import {useState} from "react"
import RatingInput from "./RatingInput"
import { supabase } from "../data/supabase"

const AddRatingButton = () => {
  const [inputVisible, setInputVisible] = useState();

  const onClick = () => {
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