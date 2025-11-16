import {useRef} from "react"
import { supabase } from "../data/supabase"

const RatingInput = ({setInputVisible}) => {
    const overallRatingRef = useRef(null);
    const busyRatingRef = useRef(null);
    const commentRef = useRef(null);

    const onSubmitButtonClick = async () => {
        const {data, error} = await supabase
            .from("spots")
            .insert({
                overall_rating: parseInt(overallRatingRef.current.value, 10),
                busy_rating: parseInt(busyRatingRef.current.value, 10),
                comment: commentRef.current.value
            })
        setInputVisible(false);
    }

    return (
    <div className="card">
        <div style={{display:'flex',gap:8,marginBottom:8}}>
            <input className="input" type="number" min="1" max="5" ref={overallRatingRef} placeholder="Overall (1-5)" />
            <input className="input" type="number" min="1" max="5" ref={busyRatingRef} placeholder="Busy (1-5)" />
        </div>

        <input className="input" ref={commentRef} placeholder="Comment (optional)" />
        
        <div style={{marginTop:8,display:'flex',gap:8}}>
          <button className="btn btn-primary" onClick={onSubmitButtonClick}>Submit</button>
          <button className="btn btn-ghost" onClick={() => setInputVisible(false)}>Cancel</button>
        </div>
    </div>
    )
}

export default RatingInput