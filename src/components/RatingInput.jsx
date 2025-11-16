import {useRef} from "react"
import { getSupabase } from "../data/supabase"

const RatingInput = ({setInputVisible}) => {
    const overallRatingRef = useRef(null);
    const busyRatingRef = useRef(null);
    const commentRef = useRef(null);

    const onSubmitButtonClick = async () => {
        const supabase = getSupabase();
        const {data, error} = await supabase
            .from("user_ratings")
            .select("*")
            .limit(1);
        /*if(!data) {
            const {data, error} = await supabase
                .from("user_ratings")
                .insert([{
                    overall_rating: parseInt(overallRatingRef.current.value),
                    busy_rating: parseInt(busyRatingRef.current.value),
                    comment: commentRef.current.value
                }]);
            alert(error.message);
        }*/
        if(data) alert(JSON.stringify(data));
        else alert(error.message);
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