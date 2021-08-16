import React, { useEffect } from 'react'
import StarRating from './StarRating'
import {useSelector,useDispatch} from 'react-redux'
import {fetchOneReview} from '../redux/Actions'

const Reviews = ({id}) => {

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchOneReview(id))
    },[dispatch,id])

    const Reviews = useSelector(state => state.ReviewsReducer)
    // console.log(State,'from our comp');

    return (
        <div style={{display: 'flex',flexWrap: 'wrap' , justifyContent: 'space-evenly'}}>
        {        Reviews.map(one => (

                        <div  key={one.id} className="mb-2 mr-3" style={{minWidth: '30%'}}>
                            <div className="card text-white bg-primary mb-3 mr-4" >
                                <div className="card-header d-flex justify-content-between">
                                    <span>{one.name}</span>
                                    <span>
                                        <StarRating rating={one.rating}/>
                                    </span>
                                </div>
                                    <div className="card-body">
                                    <p className="card-text">{one.review}</p>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
    )
}

export default Reviews
