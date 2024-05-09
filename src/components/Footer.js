import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='text'>
          <p>MediPark &copy; 2023</p>
          <p>Site by Starcom</p>
        </div>
        <div className='social-medias'>
          <Link to='#' target='_blank'>
            <img src='https://www.api.medipark.az/uploads/social_media_icon/instagram_2.webp' alt='İnstagram Bakı' />
          </Link>
          <Link to='#' target='_blank'>
            <img src='https://www.api.medipark.az/uploads/social_media_icon/facebook_3.webp' alt='Facebook' />
          </Link>
          <Link to='#' target='_blank'>
            <img src='https://www.api.medipark.az/uploads/social_media_icon/instagram_2_gkVXEgx.webp' alt='İnstagram Mİngəçevir' />
          </Link>
          <Link to='#' target='_blank'>
            <img src='https://www.api.medipark.az/uploads/social_media_icon/whatsapp.webp' alt='WP' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;