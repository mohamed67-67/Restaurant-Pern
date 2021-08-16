import {myPool} from '../db.js'


//get all restaurants
export const getAllController = async (req,res) =>{
    const RESTAURANTS = await myPool.query('SELECT restaurants.id,restaurants.name,restaurants.location,restaurants.price_range, TRUNC(AVG(reviews.rating),2) AS avg_rating, COUNT(reviews.rating) AS count_rating FROM restaurants LEFT JOIN reviews ON (restaurants.id = reviews.restaurant_id) GROUP BY(restaurants.id,restaurants.name,restaurants.location,restaurants.price_range);')
    res.json(RESTAURANTS.rows)
}


//getting one restaurant
export const getOneController = async (req,res) => {
    const {id} = req.params;
    const selectedRestaurant = await myPool.query('SELECT * FROM restaurants WHERE id =($1)',[id]);
    const reviews = await myPool.query('SELECT * FROM reviews WHERE restaurant_id = $1',[id]);
    const data = {selectedRestaurant : selectedRestaurant.rows[0],reviews : reviews.rows}

    res.json(data)
}

//posting new restaurant
export const addnewOne = async (req,res) =>{
    const location = req.body.location
    const name = req.body.name
    const price_range = req.body.price_range
    const newRst = await myPool.query('INSERT INTO restaurants(name,location,price_range) VALUES ($1,$2,$3) RETURNING *',[name,location,price_range])
    res.json(newRst.rows[0]);
}


//updating restaurant
export const updateRestaurant = async (req,res) =>{
    const {id} = req.params
    const location = req.body.location
    const name = req.body.name
    const price_range = req.body.price_range
    const updatedRes = await myPool.query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *',[name,location,price_range,id])
    res.json(updatedRes.rows[0]);
}

export const deleteRestaurant = async (req,res) =>{
    const {id} = req.params;
    await myPool.query('DELETE FROM restaurants WHERE id = $1',[id]);
    res.json({"deleted" : true})
}
