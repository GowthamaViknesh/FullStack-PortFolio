import Gold from '../Assests/Gold.png';
import Auth from '../Assests/auth.png';
import Url from '../Assests/url.png';
import Chat from '../Assests/caht.png';
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
              src={Url}
              class='card-img-top'
              alt='...'
              style={{ height: '24vh' }}
            />
            <div class='card-body'>
              <h5 class='card-title mt-4'>Url Shortner</h5>
              <p class='card-text'>
                Converting long URLs into concise, easy-to-share short links.
                Users can input lengthy web addresses and receive shortened
                versions, which are especially useful for social media sharing
                and tracking link clicks. Share with your friends shortlinks to
                share easy and neat UI
              </p>
              <a
                href='https://github.com/GowthamaViknesh/Url-ForntEnd'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> FrontEnd
              </a>
              <a
                href='https://github.com/GowthamaViknesh/Url-Shortner-Backend'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> Backend
              </a>
              <a
                href='https://moonlit-marshmallow-122de1.netlify.app/'
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
            <img src={Auth} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title mt-4'>Email Authentication</h5>
              <p class='card-text'>
                Application that implements user registration, login, and
                email-based authentication. It allows users to securely sign up,
                confirm their email addresses, and access protected features
                while ensuring data privacy and security
              </p>
              <a
                href='https://github.com/GowthamaViknesh/FrontEnd-Login'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> FrontEnd
              </a>
              <a
                href='https://github.com/GowthamaViknesh/BackEnd-Login'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> Backend
              </a>
              <a
                href='https://dazzling-fox-d46d7b.netlify.app/'
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
