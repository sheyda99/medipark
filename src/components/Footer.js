import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchData } from '../utils/fetchData';

const Footer = () => {
  const [socialMedias, setSocialMedias] = useState([]);
  useEffect(() => {
    const fetchSocialMediasData = async () => {
      const data = await fetchData('https://www.api.medipark.az/social-media/');
      setSocialMedias([...data]);
    }
    fetchSocialMediasData();
  }, []);

  return (
    <footer>
      <div className='container'>
        <div className='text'>
          <p>MediPark &copy; 2023</p>
          <p>Site by Starcom</p>
        </div>
        <div className='social-medias'>
          {socialMedias.map((socialMedia, index) => (
            <Link key={index} to={`${socialMedia.link}`} target='_blank'>
              <img src={`${socialMedia.icon}`} alt={`${socialMedia.title}`} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer;