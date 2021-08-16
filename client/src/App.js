import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './routes/Home';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';
import UpdatePage from './routes/UpdatePage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <Switch>
          <Route path='/' exact > <Home/> </Route>
          <Route path='/restaurants/:id/update' exact > <UpdatePage/> </Route>
          <Route path='/restaurants/:id' exact > <RestaurantDetailsPage/> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
