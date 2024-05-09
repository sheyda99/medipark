import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/medipark.webp';
import { fetchData } from '../utils/fetchData';

const Header = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchPlaceData = async () => {
      const data = await fetchData('https://www.api.medipark.az/place/');
      setPlaces([...data]);
    }
    fetchPlaceData();
  }, []);

  const [isCallCenterBoxVisible, setIsCallCenterBoxVisible] = useState(false);
  const openCloseCallCenterBox = () => {
    setIsCallCenterBoxVisible(!isCallCenterBoxVisible);
  };
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);
  const openCloseHamburgerMenu = () => {
    setIsHamburgerMenuVisible(!isHamburgerMenuVisible);
  };

  return (
    <header>
      <div className='container'>
        <a href='/'>
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </a>
        <div className='navbar-icons'>
          <Link to='#' onClick={ openCloseCallCenterBox } className="call-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path></svg>
            <p>Çağrı mərkəzi</p>
          </Link>
          <Link to='#'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>
          </Link>
          <Link to='#' onClick={ openCloseHamburgerMenu }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
          </Link>
        </div>
      </div>

      {isCallCenterBoxVisible &&
        <div className="call-center-box">
          <Link to='#' onClick={ openCloseCallCenterBox }>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="43" viewBox="0 0 40 43" fill="none"><path d="M30 10.5714L10 31.7143" stroke="#3f418e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 10.5714L30 31.7143" stroke="#3f418e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </Link>
          {places.map((place, index) => (
            <div key={index}>
              <h3>{place.title}</h3>
              <a href={`tel:${place.mobile_phone}`}>{place.mobile_phone}</a>
              <a href={`tel:${place.mobile_phone}`}>{place.city_phone}</a>
            </div>
          ))}
        </div>
      }

      {isHamburgerMenuVisible &&
        <div className="hamburger-menu">
          <Link to='#' onClick={ openCloseHamburgerMenu }>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="43" viewBox="0 0 40 43" fill="none"><path d="M30 10.5714L10 31.7143" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 10.5714L30 31.7143" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </Link>
          <div className="links">
            <a href="/haqqimizda">Haqqımızda</a>
            <a href="/hekimler">Həkimlər</a>
            <a href="/sobeler">Şöbələr</a>
            <a href="/check-up">Check-up Paketlər</a>
            <a href="/analizler/A">Analizlər</a>
            <a href="/elaqe">Əlaqə</a>
          </div>
        </div>
      }
    </header>
  )
}

export default Header;