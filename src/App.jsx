import { useState } from 'react'
import './App.css'
import CartResidents from './components/CartResidents'
import LocationInfo from './components/LocationInfo'
import useFetch from './hooks/useFetch'

function App() {

  const randomId =  Math.ceil(Math.random() * (126 - 1) +1)
 

  const location = useFetch(`https://rickandmortyapi.com/api/location/${randomId}`)


  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <LocationInfo location={location}/>
      <div>
        {
          location?.residents.map(url =>(
            <CartResidents
              key={url}
              url={url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
