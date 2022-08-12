import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className='container-location'>
        <ul className='location'>
            <li className='location-item'><span>Name: </span>{location?.name}</li>
            <li className='location-item'><span>Type: </span>{location?.type}</li>
            <li className='location-item'><span>Dimention: </span>{location?.dimension}</li>
            <li className='location-item'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo