import React from 'react';

const Banner = ({ imageUrl, text }) => {
  return (
    <div className='banner' style={{ backgroundImage: `url("${imageUrl}")` }}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </div>
  )
}

export default Banner;