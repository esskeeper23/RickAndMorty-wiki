import { useState } from 'react'
import './App.css'
import CardResidents from './components/CardResidents'
import LocationInfo from './components/LocationInfo'
import banner from '../public/rick-morty-banner.jpg'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  const [location, setLocation] = useState()

  const [queryFetch, setQueryFetch] = useState("")

  useEffect(() => {
    let locationId

    if (queryFetch === "") {
      locationId =  Math.ceil(Math.random() * (126 - 1) +1)
    }else if (queryFetch > 0 && queryFetch < 127) {
      locationId = queryFetch
    }

    const URL = `https://rickandmortyapi.com/api/location/${locationId}`

    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))

  }, [queryFetch])

  const submitQuery = e => {
    e.preventDefault()
    setQueryFetch(e.target.query.value)
  }

  return (
    <div className="App">
      <img className='banner' src={banner} alt="" />
      <form onSubmit={submitQuery}>
        <input  id='query' type="text"  placeholder='Search for locations between 1 - 126'/>
      </form>
      <LocationInfo location={location}/>
      <div className='resident-container'>
        {
          location?.residents.map(url =>(
            <CardResidents
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
