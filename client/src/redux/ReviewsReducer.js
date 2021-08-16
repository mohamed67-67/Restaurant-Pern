const ReviewsReducer = (state =[],action) =>{
    switch(action.type){
        case 'FETCHONEREVIEW':
            return state = action.payload
        case 'ADDINGrEVIEW':
            return state = [...state, action.payload]
        default: return state 
    }
}

export default ReviewsReducer;