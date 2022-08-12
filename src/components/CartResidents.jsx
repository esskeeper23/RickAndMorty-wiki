import React from 'react'
import useFetch from '../hooks/useFetch'

const CartResidents = ({url}) => {
    const residents = useFetch(url)
    console.log(residents)
  return (
    <div className='resident'>
        <img className='resident-img' src={residents?.image} alt="" />
        <h2>{residents?.name}</h2>
        <hr />
        <p className='resident-type'>Raza</p>
        <p>{residents?.type}</p>

        <p className='resident-origin'>Origen</p>
        <p>{residents?.origin.name}</p>

        <p className='resident-episode'>Aparicion en episodios</p>
        <p>{residents?.episode.length}</p>
    </div>
  )
}

export default CartResidents