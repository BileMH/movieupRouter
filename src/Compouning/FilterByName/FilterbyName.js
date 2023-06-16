import React from 'react'
import { Form } from 'react-bootstrap'
import './FilterbyName.css'

const FilterbyName = ({inputserch,setinputserch}) => {
  return (
    <div>
        <Form.Control
          type='text' placeholder='enter movie title..'
          className='filter-name'
          style={{width: '850px'}} 
          onChange={(e)=>setinputserch (e.target.value)} 
          value={inputserch}
          />

    </div>
  )
}

export default FilterbyName