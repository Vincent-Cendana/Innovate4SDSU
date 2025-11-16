import {useRef} from "react"
import { supabase } from "../data/supabase"

const RatingInput = ({setInputVisible}) => {
    const overallRatingRef = useRef(null);
    const busyRatingRef = useRef(null);
    const commentRef = useRef(null);

    const onSubmitButtonClick = async () => {
        const {data, error} = await supabase
            .from("UserRatings")
            .select("user_key")
            .eq("user_key", process.env.DEV_USER_KEY);
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