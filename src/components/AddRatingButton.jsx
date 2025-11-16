import {useState} from "react"
import RatingInput from "./RatingInput"

const AddRatingButton = () => {
  const [inputVisible, setInputVisible] = useState(false);

  const onClick = () => {
    setInputVisible(prev => !prev);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={onClick}>{inputVisible ? 'Close' : 'Add Rating'}</button>
      {inputVisible && <div style={{marginTop:12}}><RatingInput setInputVisible={setInputVisible}/></div>}
    </div>
  )
}

export default AddRatingButton