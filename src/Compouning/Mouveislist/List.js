import React from 'react'
import Moviecard from '../Mouviecard/Moviecard'

const List = ({mouvies,inputserch,Rating}) => {
  return (
    <div className='movie-list'>
{
   mouvies
   .filter(mouvie=> mouvie.title.toLowerCase().includes(inputserch.toLowerCase())
   &&
   mouvie.rate >= Rating
   )
   .map ((mouvie)=>< Moviecard mouvie={mouvie} key={mouvie.id}/> )
}
    </div>
  )
}

export default List