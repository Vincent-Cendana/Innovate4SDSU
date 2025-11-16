import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import NavBar from '../components/NavBar'
import StarRating from '../components/StarRating'
import AddRatingButton from "../components/AddRatingButton"
import {supabase} from '../data/supabase'

const ExampleDetail = () => {
  const {spot_name} = useParams()
  const [spot, setSpot] = useState(null);
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    const fetchSpot = async () => {
      console.log('Fetching spot for', spot_name);
      const { data, error } = await supabase
        .from('spots')
        .select('*')
        .eq('name', spot_name)
        .maybeSingle();

      console.log('fetchSpot result', { data, error });
      if (error) {
        console.error('Error fetching spot:', error.message);
      } else if (!data) {
        console.warn('No spot found for', spot_name);
      } else {
        setSpot(data);
      }
    }

    fetchSpot();
  }, [spot_name]);

  useEffect(() => {
    if(!spot) return;

    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('user_ratings')
        .select('comment, created_at')
        .eq('spot_key', spot.spot_key);

      if (error) console.error('Error fetching comments:', error.message);
      else setComments(data);
    }

    fetchComments();
  }, [spot]);

  if (!spot) return (
    <div style={{padding:12}}>
      <NavBar />
      <div>Example not found.</div>
    </div>
  )

  const addComment = (e) => {
    /*e.preventDefault()
    if (!newComment.trim()) return
    const next = [{text:newComment.trim(), at: new Date().toISOString()}, ...comments]
    setComments(next)
    window.localStorage.setItem(`comments_${id}`, JSON.stringify(next))
    setNewComment('')*/
    e.preventDefault();
    alert("Adding comments not implemented yet.");
  }

  return (
    <div style={{maxWidth:800,margin:'0 auto',padding:12}}>
      <NavBar />
      <AddRatingButton/>
      <h2>{spot.name}</h2>
      <img src={spot.image} alt={spot.name} style={{width:'100%',height:300,objectFit:'cover',borderRadius:8}}/>
      <p style={{marginTop:12}}>{spot.description}</p>

      <div style={{display:'flex',gap:24,marginTop:8}}>
        <div>
          <div style={{fontSize:13,color:'#666'}}>Overall rating</div>
          <StarRating value={spot.overall_rating} />
        </div>
        <div>
          <div style={{fontSize:13,color:'#666'}}>Busy rating</div>
          <StarRating value={spot.busy_rating} />
        </div>
      </div>

      <section style={{marginTop:20}}>
        <h3>Comments</h3>
        <form onSubmit={addComment} style={{display:'flex',gap:8,marginBottom:12}}>
          <input value={newComment} onChange={e=>setNewComment(e.target.value)} placeholder="Add a comment" style={{flex:1,padding:8}} />
          <button type="submit" style={{padding:'8px 12px'}}>Post</button>
        </form>

        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {comments.length === 0 && <div style={{color:'#666'}}>No comments yet.</div>}
          {comments.map((c, idx)=> (
            <div key={idx} style={{padding:10,border:'1px solid #eee',borderRadius:6}}>
              <div style={{fontSize:12,color:'#999'}}>{c.created_at}</div>
              <div style={{marginTop:6}}>{c.comment}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ExampleDetail
