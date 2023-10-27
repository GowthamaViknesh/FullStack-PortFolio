import {
  faGraduationCap,
  faSchool,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const QualiPage = () => {
  return (
    <>
      <div className='text-center text-container'>
        <h2 style={{ fontFamily: 'Dancing Script', fontSize: '40px' }}>
          <FontAwesomeIcon icon={faSchool} className='shake-icon' /> Education
        </h2>
      </div>
      <div className='container text-center content-cont'>
        <div className='row '>
          <div className='col-md-4'>
            <h3 className='text-content'>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className='icon-quali'
                style={{ color: '#FF713D' }}
              />{' '}
              Bachelor's Degree
            </h3>
            <h5 className='text-contents mt-3'>
              Bsc - Computer Technology ( 2017 - 2020 )
            </h5>
            <h5 className=' text-contents-cont mt-3'>
              Nallamuthu Gounder Mahalingam College Coimbatore
            </h5>
            <h5 className='text-contents-cont mt-3'>CGPA : 6.2%</h5>
          </div>

          <div className='col-md-4'>
            <h3 className='text-content'>
              <FontAwesomeIcon
                icon={faUserGraduate}
                className='icon-quali'
                style={{ color: '#FF713D' }}
              />{' '}
              High School
            </h3>
            <h5 className='text-contents mt-3'>
              Computer Science ( 2016 - 2017 )
            </h5>
            <h5 className=' text-contents-cont mt-3'>
              T.R.H.S School Coimbatore
            </h5>
            <h5 className=' text-contents-cont mt-3'>CGPA : 6.4%</h5>
          </div>

          <div className='col-md-4'>
            <h3 className='text-content'>
              <FontAwesomeIcon
                icon={faUserGraduate}
                className='icon-quali'
                style={{ color: '#FF713D' }}
              />{' '}
              Secondary School
            </h3>
            <h5 className='text-contents mt-3'>State Board ( 2014 - 2015 )</h5>
            <h5 className=' text-contents-cont mt-3'>
              T.R.H.S School Coimbatore
            </h5>
            <h5 className=' text-contents-cont mt-3'>CGPA : 8.4%</h5>{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default QualiPage;
