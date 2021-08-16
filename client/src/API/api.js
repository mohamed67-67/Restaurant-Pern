import axios from 'axios'

const URL = 'http://localhost:5000/api/v1/restaurants'


// api for fetching all restaurants
export const FetchingRest = () => axios.get(URL)

//api for adding a restaurant
export const AddingRestraunt = (newRest) => axios.post(URL,newRest);

//api for deleting a restaurant
export const DeletingRest = (id) => axios.delete(`${URL}/${id}`);

//api for updating 
export const UpdtingRest = (id,updated) => axios.put(`${URL}/${id}`,updated)

//api for fetching one restaurant
export const fetchingOneRest = (id) => axios.get(`${URL}/${id}`)