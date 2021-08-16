import axios from 'axios'

const URL = 'http://localhost:5000/reviews'


export const postingReview = (id,newReview) => axios.post(`${URL}/${id}`,newReview);