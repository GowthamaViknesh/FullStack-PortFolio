import {
  faBriefcaseClock,
  faCertificate,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Info = () => {
  return (
    <div className='about_info grid'>
      <div className='about_box'>
        <FontAwesomeIcon icon={faMedal} className='about_icon' />

        <h3 className='about_title'>Experience</h3>
        <span className='about_subtitle'>6 Months of Working</span>
      </div>

      <div className='about_box'>
        <FontAwesomeIcon icon={faBriefcaseClock} className='about_icon' />
        <h3 className='about_title'>Completed</h3>
        <span className='about_subtitle'>5+ Projects</span>
      </div>

      <div className='about_box'>
        <FontAwesomeIcon icon={faCertificate} className='about_icon' />
        <h3 className='about_title'>Ceritificate</h3>
        <span className='about_subtitle'>Guvi-IIT Madras</span>
      </div>
    </div>
  );
};

export default Info;
