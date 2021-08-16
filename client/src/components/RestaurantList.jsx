import React from 'react'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { DeleteRestaurant, FetchingPosts } from '../redux/Actions';
import ModalExpample from './ModalExpample';
import {useHistory} from 'react-router-dom'
import StarRating from './StarRating';

const RestaurantList = () => {

    const history = useHistory();

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(FetchingPosts)
    },[dispatch])
    
    const Restaurants = useSelector(state => state.RestaurantReducer);

    console.log(Restaurants);
    const handleDelete = (e,id) => {
        e.stopPropagation();
        dispatch(DeleteRestaurant(id))
    }

    const handleRouting = (id) => {
        history.push(`/restaurants/${id}`)
    }


    return (
        Restaurants.length ?
        <div style={{width: '98%', margin: '0 auto', borderRadius: '15px'}} className='list-group'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="table-info">
                        <th scope='col'>Restaurant</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Price-Range</th>
                        <th scope='col'>Ratings</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
        
                {Restaurants && Restaurants.map(rest => (
                    <tbody key={rest.id}>
                        <tr style={{cursor: 'pointer'}} onClick={()=> handleRouting(rest.id)}>
                            <td> {rest.name} </td>
                            <td>{rest.location}</td>
                            <td>{"$".repeat(rest.price_range)}</td>
                            <td> <StarRating rating={rest.avg_rating}/> ({rest.count_rating}) </td>
                            <td onClick ={(e) => e.stopPropagation()}> <ModalExpample id={rest.id} /> </td>
                            <td> <button onClick={(e) => handleDelete(e,rest.id)} className="btn btn-danger">Delete</button> </td>
                        </tr>
                        
                    </tbody>
                ))}
            </table>
        </div>
        : <h1>Loading</h1> 
    )
}

export default RestaurantList
