import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Reviews from '../components/Reviews'
import AddReview from '../components/AddReviews'
import {useDispatch} from 'react-redux'
import { fetchOne } from '../redux/Actions'

const RestaurantDetailsPage = () => {

    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchOne(id))
    },[dispatch,id])
    

    const State = useSelector(state => state.RestaurantReducer)

    return (
        
        <div>
            <h1 className='text-center display-1 mb-5'> {State.name} </h1>
            <Reviews id={id}/>
            <AddReview id={id}/>
        </div>
    )
}

export default RestaurantDetailsPage
