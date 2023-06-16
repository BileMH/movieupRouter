import { Rate } from 'antd';
import React from 'react'
import './Raiting.css'

const desc= ['terrible','bad','normal','good','wonderful'];
const Raiting = ({Rating,isMovieRating,movieRating,setRating}) => {
const handelchange = value =>{
    setRating(value);
};
  return (
    
      isMovieRating?
    <span className='ratingContent'>
        <Rate disabled value={movieRating}/>
    </span>
    :
    <span className='ratingContent'>
    <Rate tooltips={desc} onChange={handelchange} value={Rating}/>    
        </span>
    



    
  )
}

export default Raiting