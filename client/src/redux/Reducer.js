

const RestaurantReducer = (state = [], action) =>{
    switch(action.type){
        case 'GETTINGREST':
            return state = action.payload
        case 'ADDING':
            return state = [...state, action.payload]
        case 'DELETE' :
            return state = state.filter(rest => rest.id !== action.payload);
        case 'UPDATING':
            return state = state.map(rest => rest.id === action.payload.id ? action.payload : rest);
        case 'FETCHONE':
            return  state = action.payload
        default : return state
    }
}

export default RestaurantReducer;