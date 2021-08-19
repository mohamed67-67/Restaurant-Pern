import express from 'express'
import { addnewOne, deleteRestaurant, getAllController, getOneController, updateRestaurant } from '../controllers/Restaurants.js';


export const restaurantRouter = express.Router();

//getting all restaurants
restaurantRouter.get('/restaurants',getAllController);

//getting one restaurant
restaurantRouter.get('/restaurants/:id',getOneController)

//posting new restaurant

restaurantRouter.post('/restaurants',addnewOne)

//updating restaurant

restaurantRouter.put('/restaurants/:id',updateRestaurant)

//Deleting restaurant

restaurantRouter.delete('/restaurants/:id',deleteRestaurant)