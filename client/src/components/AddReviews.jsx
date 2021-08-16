import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { PostOneReview } from "../redux/Actions";

const AddReview = ({id}) => {
  
  const dispatch =useDispatch();

  const [review,setReview] = useState({
    name : '',
    rating : 1,
    review : ''
  })

  const handleAddingReview = (e) =>{
    e.preventDefault()
    setReview({ name: '',rating: 1,review: '' })
    dispatch(PostOneReview(id,review))
  }
  
  return (
    <div className="mb-2 mt-5">
      <form>
        <div style={{display:"grid", gridTemplateColumns:'70% 25%', gridGap: '5%'}} className="form-row">
          <div style={{width:'100%'}} className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={review.name}
              onChange={e => setReview({...review,name: e.target.value})}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div  className="form-group">
            <label htmlFor="rating">Rating</label>
            <select
                style={{width:'100%'}}
              id="rating"
              className="custom-select"
              value={review.rating}
              onChange={e => setReview({...review,rating: parseInt(e.target.value)})}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className='mt-5' htmlFor="Review">Review</label>
          <textarea
            value={review.message}
            onChange={e => setReview({...review,review: e.target.value})}
            id="Review"
            className="form-control"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-5 btn btn-primary"
          onClick={handleAddingReview}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;