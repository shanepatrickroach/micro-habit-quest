import React from 'react'

const Avatar = (props) => {


  const {level, points} = props

  
  return (
    <div className='glassify flex items-center justify-center'>
      <img className='size-32' src={`/ranks/badge-${level}.png`} alt="User Badge" />
      <div className='place-content-center'>
        <h3 className='text-lg font-semibold'>Level: {level}</h3>
        <p>Total points: {points}</p>
      </div>
    </div>
  )
}

export default Avatar
