import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {Button} from 'react-bootstrap'
import { UpdatingRestaurant } from '../redux/Actions'

const Updating = ({chosenRestaurant}) => {

  const id = chosenRestaurant[0].id
  const dispatch = useDispatch()

  const [newRestaurant, setRestaurant] = useState({
    name : chosenRestaurant[0].name,
    location : chosenRestaurant[0].location,
    price_range : chosenRestaurant[0].price_range
  })

  const handleUpdate = (id,newRestaurant) =>{
    dispatch(UpdatingRestaurant(id,newRestaurant));
    window.location.reload()
  }
  

  return (
    <div className="mb-4">
      <form>
        <div style={{display: 'flex', justifyContent:'space-evenly', textAlign: 'center'}} className="form-row">
          <div >
            <input
              required
              onChange={e => setRestaurant({...newRestaurant,name:e.target.value})}
              value={newRestaurant.name}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div >
            <input
              required
              onChange={e => setRestaurant({...newRestaurant,location:e.target.value})}
              value={newRestaurant.location}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div >
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
          <Button onClick={(e) => handleUpdate(id,newRestaurant)} variant="primary">Update</Button>
        </div>
      </form>
    </div>
  );
    
}

export default Updating
