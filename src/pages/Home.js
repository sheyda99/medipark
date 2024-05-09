import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchData } from '../utils/fetchData';

const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchPlaceData = async () => {
      const data = await fetchData('https://www.api.medipark.az/place/');
      setPlaces([...data]);
    }
    fetchPlaceData();
  }, []);

  return (
    <main style={{ height: 'calc(100vh - 52px)' }}>
      <div className='text'>
        <div></div>
        <p>Davam etmək istədiyiniz şəhəri seçin!</p>  
      </div>
      <div className='places'>
        {places.map((place, index) => (
          <Link key={index} to={`/${place.slug}`}>
            <div style={{ backgroundImage: `url("${place.image}")` }}></div>
            <h3>{place.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home;