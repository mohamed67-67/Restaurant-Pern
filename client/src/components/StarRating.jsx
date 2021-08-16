import React, { Fragment } from 'react'

const StarRating = ({rating}) => {

    
    const stars = []

    for(let i=1; i<=5; i++){
        if(i<= rating){
            stars.push(<i key={Math.random()} style={{color: 'gold'}} className="fas fa-star"></i>)
        } else if (i === Math.ceil(rating) && ! Number.isInteger(rating)){
            stars.push(<i key={Math.random()} style={{color: 'gold'}} className="fas fa-star-half-alt"></i>)
        }
        else{
            stars.push(<i key={Math.random()} style={{color: 'gold'}} className="far fa-star"></i>)
        }
    }
    return (
        !rating ? <span>no Reviews Yet</span> :
        <Fragment>
            {stars}
        </Fragment>
    )
}

export default StarRating
