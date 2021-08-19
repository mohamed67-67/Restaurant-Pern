import { myPool } from "../db.js"





export const AddingReview = async (req,res) =>{
    const {id} = req.params
    const {name,rating,review} = req.body

    const newReview = await myPool.query('INSERT INTO reviews(name,review,rating,restaurant_id) VALUES($1,$2,$3,$4) RETURNING *',[name,review,rating,id]);
    res.json(newReview.rows[0]);
}