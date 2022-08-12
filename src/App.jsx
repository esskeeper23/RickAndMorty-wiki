import { useState } from 'react'
import './App.css'
import CartResidents from './components/CartResidents'
import LocationInfo from './components/LocationInfo'
import useFetch from './hooks/useFetch'
import banner from '../public/rick-morty-banner.jpg'

function App() {

  const randomId =  Math.ceil(Math.random() * (126 - 1) +1)
 

  const location = useFetch(`https://rickandmortyapi.com/api/location/${randomId}`)


  return (
    <div className="App">
      <img className='banner' src={banner} alt="" />
      <LocationInfo location={location}/>
      <div className='resident-container'>
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
