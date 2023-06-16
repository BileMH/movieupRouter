
import { useState } from 'react';
import './App.css';

import { moviesData } from './Compouning/Mouviedata/Data';
import List from './Compouning/Mouveislist/List';
import AddMovie from './Compouning/AddMovie/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterbyName from './Compouning/FilterByName/FilterbyName';
import FilterByRate from './Compouning/Raiting/Raiting';
function App() {
  const [mouvies,setmouvies]=useState(moviesData);
  const[inputserch,setinputserch]=useState ("")
  const [Raiting,setRaiting]=useState(1);

  const add= (newMovie) => {
    setmouvies([...mouvies,newMovie]);
  }
  return (
    <div className="App">
      <h1>MOVIE APP</h1>
      <FilterbyName inputserch={inputserch} setinputserch={setinputserch} />
      <FilterByRate isMovieRating={false} Raiting={Raiting} setRating={setRaiting} />
      <List mouvies={mouvies} inputserch={inputserch} Rating={Raiting} />
      <AddMovie add={add} />

    </div>
  );
}

export default App;
