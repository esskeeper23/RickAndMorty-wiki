import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article>
        <h2>{location?.name}</h2>
        <ul className='location'>
            <li className='location-item'><span>Type: </span>{location?.type}</li>
            <li className='location-item'><span>Dimension: </span>{location?.dimension}</li>
            <li className='location-item'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo