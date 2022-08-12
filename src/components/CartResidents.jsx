import React from 'react'
import useFetch from '../hooks/useFetch'

const CartResidents = ({url}) => {
  const residents = useFetch(url)
  const bgColor = {
  }

      if (residents?.status === "Dead") {
        bgColor.backgroundColor = "red"
      }else if (residents?.status === "Alive") {
        bgColor.backgroundColor = "green"
      }else {
        bgColor.backgroundColor = "gray"
      }


    console.log(residents)
  return (
    <div className='resident'>
      <div className='status'><div className='circle' style={bgColor}></div> {residents?.status}</div>
      <img className='resident-img' src={residents?.image} alt="" />
      <h2 className='resident-name'>{residents?.name }</h2>
      <hr />
      <p className='resident-info'>Raza</p>
      <p className='resident-fetch'>{residents?.type }</p>

      <p className='resident-info'>Origen</p>
      <p className='resident-fetch'>{residents?.origin.name }</p>

      <p className='resident-info'>Aparicion en episodios</p>
      <p className='resident-fetch'>{residents?.episode.length}</p>
  </div>
  )
}

export default CartResidents