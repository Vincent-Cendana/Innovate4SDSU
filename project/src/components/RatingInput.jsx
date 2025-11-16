import {useRef} from "react"

const RatingInput = ({setInputVisible}) => {
    const overallRatingRef = useRef(null);
    const busyRatingRef = useRef(null);
    const commentRef = useRef(null);

    const onSubmitButtonClick = () => {
        setInputVisible(false);
    }

    return (
    <div>
        <input type="number" min="1" max="5" ref={overallRatingRef}></input>
        
        <input type="number" min="1" max="5" ref={busyRatingRef}></input>

        <input ref={commentRef}></input>
        
        <button onClick={onSubmitButtonClick}>Submit</button>
    </div>
    )
}

export default RatingInput