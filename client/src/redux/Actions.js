import { AddingRestraunt, DeletingRest, fetchingOneRest, FetchingRest, UpdtingRest } from "../API/api"
import {postingReview} from '../API/ReviewAPI'


//action for fetching all of restaurants
export const FetchingPosts = async (dispatch) =>{

    const {data} = await FetchingRest();
    
    dispatch({
        type: 'GETTINGREST',
        payload : data
    })
}


//action for adding a restaurant
export const AddingRest = (newRes) => async (dispatch) =>{
    const {data} = await AddingRestraunt(newRes)

    dispatch({
        type : 'ADDING',
        payload : data
    })
}

//action for deleting a restaurant

export const DeleteRestaurant = (id) => async (dispatch) =>{
    await DeletingRest(id)
    dispatch({
        type: 'DELETE',
        payload: id
    })
}

//action for updating
export const UpdatingRestaurant = (id,updated) => async (dispatch) =>{
    const {data} = await UpdtingRest(id,updated)

    dispatch({
        type : 'UPDATING',
        payload : data
    })
}

//action for fetching one
export const fetchOne = (id) => async (dispatch) =>{
    const {data} = await fetchingOneRest(id);
    
    dispatch({
        type: 'FETCHONE',
        payload: data.selectedRestaurant
    })
}


/// Reviews Actions

//fetch one
export const fetchOneReview = (id) => async (dispatch) =>{
    const {data} = await fetchingOneRest(id);
    
    dispatch({
        type: 'FETCHONEREVIEW',
        payload: data.reviews
    })
}

//post one
export const PostOneReview = (id,newReview) => async (dispatch) => {
    const {data} = await postingReview(id,newReview);

    dispatch({
        type: 'ADDINGrEVIEW',
        payload : data
    })
}