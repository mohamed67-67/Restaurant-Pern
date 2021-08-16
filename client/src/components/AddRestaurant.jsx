import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { AddingRest } from '../redux/Actions'

const AddRestaurant = () => {

  const dispatch = useDispatch()

  const [newRestaurant, setRestaurant] = useState({
    name : '',
    location : '',
    price_range : 1
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddingRest(newRestaurant))
    setRestaurant({name: '', location: '', price_range: 1})
  }

  return (
    <div className="mb-4">
      <form>
        <div style={{display: 'flex', justifyContent:'space-evenly', textAlign: 'center'}} className="form-row">
          <div>
            <input
              required
              onChange={e => setRestaurant({...newRestaurant,name:e.target.value})}
              value={newRestaurant.name}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div>
            <input
              required
              onChange={e => setRestaurant({...newRestaurant,location:e.target.value})}
              value={newRestaurant.location}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div>
            <select
              required
              className="custom-select my-1 mr-sm-2"
              onChange={e => setRestaurant({...newRestaurant,price_range:parseInt(e.target.value)})}
              value={newRestaurant.price_range}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
    
}

export default AddRestaurant
