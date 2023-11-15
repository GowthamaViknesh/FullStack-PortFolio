import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Certification = () => {
  return (
    <div>
      <h2
        className='text-center certi-container'
        style={{ fontFamily: 'Dancing Script', fontSize: '40px' }}
      >
        <FontAwesomeIcon icon={faMedal} /> {''}
        Certification
      </h2>
      <div className='container'>
        <div className='row mb-4 mt-3'>
          <div className='col-md-4'>
            <div className='text-center'>
              <img
                src='https://www.guvi.in/build/images/guvi-white-logo.b7f929e677d3c604407e0f0cfb743ae8.webp'
                alt='logo'
                className='image-fluid'
              />
              <h4 className='text-center text-certi'>GUVI GEEK - IIT Madras</h4>
              <h5 className='text-center text-certi'>MERN - Stack Developer</h5>
              <a
                className='btn'
                href='https://drive.google.com/file/d/15BUgGANYuwLgdkNfcn4adko6i9xKStvy/view?usp=sharing'
                target='_blank'
              >
                <span>Certificate</span>
              </a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='text-center'>
              <img
                src='https://www.guvi.in/build/images/guvi-white-logo.b7f929e677d3c604407e0f0cfb743ae8.webp'
                alt='logo'
                className='image-fluid'
              />
              <h4 className='text-center text-certi mt-3'>
                GUVI GEEK - IIT Madras
              </h4>
              <h5 className='text-center text-certi'>JavaScript Developer</h5>
              <a
                className='btn'
                href='https://drive.google.com/file/d/16OpHPnE3tI6lSv2wPi8d_a0R8VlSyjT4/view?usp=sharing'
                target='_blank'
              >
                <span>Certificate</span>
              </a>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='text-center'>
              <img
                src='https://www.guvi.in/build/images/guvi-white-logo.b7f929e677d3c604407e0f0cfb743ae8.webp'
                alt='logo'
                className='image-fluid'
              />
              <h4 className='text-center text-certi mt-3'>
                GUVI GEEK - IIT Madras
              </h4>
              <h5 className='text-center text-certi'>FSD-101</h5>
              <a
                className='btn'
                href='https://drive.google.com/file/d/1rqbXblYcrtsrChYkICe2R6ffoBtLldDR/view?usp=sharing'
                target='_blank'
              >
                <span>Certificate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
