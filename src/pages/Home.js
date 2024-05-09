import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main style={{ height: 'calc(100vh - 52px)' }}>
      <div className='text'>
        <div></div>
        <p>Davam etmək istədiyiniz şəhəri seçin!</p>  
      </div>
      <div className='places'>
        <Link to='/baki'>
          <div  style={{ backgroundImage: 'url("https://www.api.medipark.az/uploads/places/image_baki.webp")' }}></div>
          <h3>Bakı</h3>
        </Link>
        <Link to='/mingecevir'>
          <div style={{ backgroundImage: 'url("https://www.api.medipark.az/uploads/places/Photo_M%C4%B0ngechevir-2.webp")' }}></div>
          <h3>Mingəçevir</h3>
        </Link>
      </div>
    </main>
  )
}

export default Home;