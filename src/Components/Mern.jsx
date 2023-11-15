import Gold from '../Assests/Gold.png';
import Auth from '../Assests/auth.png';
import Url from '../Assests/url.png';
import Chat from '../Assests/caht.png';
import ECom from '../Assests/E-come.png';
import blogs from '../Assests/blogs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

const Mern = () => {
  return (
    <div className='container front-cont'>
      <div className='row'>
        <div className='col-md-4'>
          <div
            class='card'
            style={{
              width: '20rem',
              backgroundColor: '#333333',
              color: 'white',
            }}
          >
            <img src={Gold} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title mt-4'>Gold Rate Calculator</h5>
              <p class='card-text'>
                MERN (MongoDB, Express.js, React, Node.js) project that combines
                real-time gold price data with user authentication and CRUD
                (Create, Read, Update, Delete) operations. Users can register
                and log in to track gold prices, perform calculations, and
                manage their gold-related data seamlessly
              </p>
              <a
                href='https://github.com/GowthamaViknesh/Gold-Rate-Calculator-ForntEnd'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> FrontEnd
              </a>
              <a
                href='https://github.com/GowthamaViknesh/Gold-Rate-Calculator-Backend'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> Backend
              </a>
              <a
                href='https://6505b09225bea31c9a9fd43a--silver-haupia-df4d2b.netlify.app/'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faGlobeEurope} /> Website
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div
            class='card'
            style={{
              width: '20rem',
              backgroundColor: '#333333',
              color: 'white',
            }}
          >
            <img
              src={Chat}
              class='card-img-top'
              alt='...'
              style={{ height: '21.3vh' }}
            />
            <div class='card-body'>
              <h5 class='card-title mt-4'>Chat Application</h5>
              <p class='card-text'>
                MERN (MongoDB, Express.js, React, Node.js) project platform for
                users to register, log in, and engage in real-time chat
                conversations. It combines user authentication with instant
                messaging, creating a private and authenticated chat
                environment.And create Groups and chat with your friends.
              </p>
              <a
                href='https://github.com/GowthamaViknesh/Chat-FrontEnd'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> FrontEnd
              </a>
              <a
                href='https://github.com/GowthamaViknesh/ChatApp-Backend'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> Backend
              </a>
              <a
                href='https://6533faf69c63b31013358f04--harmonious-kringle-de835c.netlify.app/'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faGlobeEurope} /> Website
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div
            class='card'
            style={{
              width: '20rem',
              backgroundColor: '#333333',
              color: 'white',
            }}
          >
            <img
              src={ECom}
              class='card-img-top'
              alt='...'
              style={{ height: '24vh' }}
            />
            <div class='card-body'>
              <h5 class='card-title mt-4'>E-Commerce</h5>
              <p class='card-text'>
                A seamlessly integrating a user-friendly interface, robust
                backend functionalities, and secure payment gateways. Empowered
                businesses to showcase and sell their products online, providing
                customers with a seamless and interactive shopping experience
              </p>
              <a
                href='https://github.com/GowthamaViknesh/E-Commerce/tree/main/frontend'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> FrontEnd
              </a>
              <a
                href='https://github.com/GowthamaViknesh/E-Commerce/tree/main/backend'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> Backend
              </a>
              <a
                href='https://e-commerce-65t4.onrender.com/'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faGlobeEurope} /> Website
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-4 mt-5'>
          <div
            class='card'
            style={{
              width: '20rem',
              backgroundColor: '#333333',
              color: 'white',
            }}
          >
            <img src={blogs} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title mt-4'>Blog Application</h5>
              <p class='card-text'>
                This MERN stack project serves as the frontend for a blogging
                platform, leveraging Redux and Material-UI for state management
                and UI components, authentication pages, and blog creation
                features.
              </p>
              <a
                href='https://github.com/GowthamaViknesh/BlogApp-FrontEnd'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> FrontEnd
              </a>
              <a
                href='https://github.com/GowthamaViknesh/BlogApp-BackEnd'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> Backend
              </a>
              <a
                href='https://6553bea955ce5113fdb3c8b0--eloquent-faloodeh-967857.netlify.app/'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faGlobeEurope} /> Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mern;
