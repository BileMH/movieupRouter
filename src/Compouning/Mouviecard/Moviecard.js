import React from 'react'
import Card from 'react-bootstrap/Card';
import MovieRating from '../Raiting/Raiting';
import { useNavigate } from 'react-router-dom';
import './Moviecard.css';
const Moviecard = ({mouvie}) => {
  const navigate = useNavigate ();
  return (
    <div className='Cards' style={{marginRight:'20px'}}>
      <Card style={{ width: '18rem' , margin :'30px auto' }}>
      <Card.Img variant="top" src= {mouvie.posterUrl} />
      <Card.Body>
        <Card.Title>{mouvie.title}</Card.Title>
        <Card.Text> {mouvie.description} </Card.Text>
        <MovieRating movieRating={mouvie.rate} isMovieRating={true}/>
        <button className='click' onClick={()=>navigate (`/Description/${mouvie.id}`)}>Description </button>
      <button className='click'onClick={()=>navigate(`/Trailer/${mouvie.id}`)}>Trailer</button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Moviecard