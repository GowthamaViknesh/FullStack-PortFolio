import {
  faGithub,
  faLinkedin,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faE, faLeaf, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  const handleEmailClick = (event) => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      event.preventDefault();
      window.location.href =
        'googlegmail:///co?to=gowthampostbox18@gmail.com&subject=subject%20text';
    }
  };

  return (
    <footer class='py-3 my-4'>
      <h4 className='text-center border-bottom pb-3 mb-3'>Contact Me</h4>
      <ul class='nav justify-content-center '>
        <li class='nav-item'>
          <a
            href='mailto:gowthampostbox18@gmail.com?subject=subject%20text'
            class='nav-link px-2 text-links'
            onClick={handleEmailClick}
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              className='foot-icon'
              style={{ color: '#2FA3D9' }}
            />
            gowthampostbox18@gmail.com
          </a>
        </li>
        <li class='nav-item'>
          <a
            href='https://www.linkedin.com/in/gowtham1820?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            class='nav-link px-2 text-links'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: '#0073B1' }}
              className='foot-icon'
            />
            LinkedIn
          </a>
        </li>
        <li class='nav-item'>
          <a
            href='https://github.com/GowthamaViknesh'
            class='nav-link px-2 text-links'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: 'white' }}
              className='foot-icon'
            />
            GitHub
          </a>
        </li>
        <li class='nav-item'>
          <a href='#' class='nav-link px-2 text-links'>
            <FontAwesomeIcon
              icon={faMobileAlt}
              style={{ color: 'white' }}
              className='foot-icon'
            />{' '}
            8825646069
          </a>
        </li>
      </ul>
      <p class='text-center mt-4' style={{ color: 'white' }}>
        <FontAwesomeIcon
          icon={faLeaf}
          style={{ color: '#449D45' }}
          className='icons'
        />{' '}
        <FontAwesomeIcon
          icon={faE}
          style={{ color: '#DD4B25' }}
          className='icons'
        />
        <FontAwesomeIcon
          icon={faReact}
          style={{ color: '#85E3FC' }}
          className='icons'
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          style={{ color: '#8DC94C' }}
          className='icons'
        />
      </p>
    </footer>
  );
};

export default Footer;
