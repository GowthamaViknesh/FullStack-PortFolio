import Ecom from '../Assests/e-com.png';
import Manage from '../Assests/Mange.png';
import ToDo from '../Assests/todo.jpg';
import Calc from '../Assests/calc.png';
import survey from '../Assests/survey.png';
import Blog from '../Assests/Blog.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

const Frontend = () => {
  return (
    <>
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
              <img src={Ecom} class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title mt-3'>E-Commerce</h5>
                <p class='card-text'>
                  E-Commerce project using Context API and 'Add to Cart' feature
                  is a frontend application that allows users to browse and
                  purchase products.
                </p>
                <a
                  href='https://github.com/GowthamaViknesh/Context-API'
                  target='_blank'
                  className='btns'
                >
                  <FontAwesomeIcon icon={faCode} /> Code
                </a>
                <a
                  href='https://master--luminous-dasik-9de5ca.netlify.app/'
                  target='_blank'
                  className='btns btn-primary'
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
              <img src={Manage} class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title mt-3'>Books Management System</h5>
                <p class='card-text'>
                  A Books Management System with form validation and CRUD
                  functionalities is a frontend project that facilitates the
                  efficient management of books.
                </p>
                <a
                  href='https://github.com/GowthamaViknesh/FormValidation'
                  className='btns  btn-primary'
                  target='_blank'
                >
                  <FontAwesomeIcon icon={faCode} /> Code
                </a>
                <a
                  href='https://regal-pasca-388503.netlify.app/'
                  className='btns btn-primary'
                  target='_blank'
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
                src={ToDo}
                class='card-img-top'
                alt='...'
                style={{ height: '17.9vh' }}
              />
              <div class='card-body'>
                <h5 class='card-title mt-3'>ToDo-App</h5>
                <p class='card-text'>
                  A ToDo-App is a simple yet essential application for task
                  management. It enables users to create, organize, and manage
                  their to-do lists, helping them stay organized and productive
                </p>
                <a
                  href='https://github.com/GowthamaViknesh/TodoAPP-React'
                  className='btns  btn-primary'
                  target='_blank'
                >
                  <FontAwesomeIcon icon={faCode} /> Code
                </a>
                <a
                  href='https://cosmic-fairy-759b41.netlify.app/'
                  className='btns  btn-primary'
                  target='_blank'
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
              <img src={Calc} class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title mt-3'>Calculator</h5>
                <p class='card-text'>
                  A Calculator frontend project built with HTML5, CSS3, and
                  JavaScript is a web application that provides basic arithmetic
                  operations. It allows users to perform calculations within
                  their web browser.
                </p>
                <a
                  href='https://github.com/GowthamaViknesh/Calculator-App-JS-HTML-CSS'
                  className='btns  btn-primary'
                  target='_blank'
                >
                  <FontAwesomeIcon icon={faCode} /> Code
                </a>
                <a
                  href='https://gowthamaviknesh.github.io/Calculator-App-JS-HTML-CSS/'
                  className='btns  btn-primary'
                  target='_blank'
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
              <img src={survey} class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title mt-3'>Survey Form</h5>
                <p class='card-text'>
                  A Survey Form frontend project developed with HTML5, CSS3, and
                  JavaScript features both data collection and CRUD (Create,
                  Read, Update, Delete) functions. Users can create, fill out,
                  and manage survey forms.
                </p>
                <a
                  href='https://github.com/GowthamaViknesh/Survey_Form-DOM'
                  className='btns  btn-primary'
                  target='_blank'
                >
                  <FontAwesomeIcon icon={faCode} /> Code
                </a>
                <a
                  href='https://gowthamaviknesh.github.io/Survey_Form-DOM/'
                  className='btns  btn-primary'
                  target='_blank'
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
              <img src={Blog} class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title mt-3'>Blog Site</h5>
                <p class='card-text'>
                  A Blog Website project for creating and navigating through
                  blog content. It offers seamless page routing and easy
                  navigation, while exploring a collection of blogs and
                  articles.
                </p>
                <a
                  href='https://github.com/GowthamaViknesh/Router-Dom/tree/main'
                  className='btns  btn-primary'
                  target='_blank'
                >
                  <FontAwesomeIcon icon={faCode} /> Code
                </a>
                <a
                  href='https://radiant-axolotl-2296dd.netlify.app/'
                  className='btns  btn-primary'
                  target='_blank'
                >
                  <FontAwesomeIcon icon={faGlobeEurope} /> Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
