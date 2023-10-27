import { faCode, faMailForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Backend = () => {
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
            <img
              src='https://res.cloudinary.com/practicaldev/image/fetch/s--Zsv72sL7--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9yuemykvb9cegdy6gqak.png'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title mt-4'>File System - NodeJs</h5>
              <p class='card-text'>
                Is a built-in module that allows developers to interact with the
                file system, enabling operations like reading, writing,
                updating, and deleting files. It provides the tools necessary to
                manage file-related tasks in server-side JavaScript applications
              </p>
              <a
                href='https://github.com/GowthamaViknesh/Node/tree/main'
                target='_blank'
                className='btns  btn-primary'
              >
                <FontAwesomeIcon icon={faCode} /> Code
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
              src='https://www.cgsinc.com/sites/default/files/images/workplace-mentor-illustration.jpg'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title mt-4'>Assign Mentor</h5>
              <p class='card-text'>
                Is a built-in module that allows developers to interact with the
                file system, enabling operations like reading, writing,
                updating, and deleting files. It provides the tools necessary to
                manage file-related tasks in server-side JavaScript applications
              </p>
              <a
                href='https://github.com/GowthamaViknesh/assign-mentor'
                target='_blank'
                className='btns  btn-primary'
              >
                <FontAwesomeIcon icon={faCode} /> Code
              </a>
              <a
                href='https://documenter.getpostman.com/view/28641216/2s9XxsVGWg'
                target='_blank'
                className='btns  btn-primary'
              >
                <FontAwesomeIcon icon={faMailForward} /> Postman
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
              src='https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg'
              class='card-img-top'
              alt='...'
              style={{ height: '26.4vh' }}
            />
            <div class='card-body'>
              <h5 class='card-title mt-4'>MongoDB</h5>
              <p class='card-text'>
                Performing MongoDB queries for specific documents and designing
                the database involves creating a structured data model and
                executing queries to retrieve, update, or delete specific
                records within a MongoDB database
              </p>
              <a
                href='https://github.com/GowthamaViknesh/DatabaseCreation-MDB'
                target='_blank'
                className='btns  btn-primary'
              >
                <FontAwesomeIcon icon={faCode} /> Code
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
            <img
              src='https://allvectorlogo.com/wp-content/uploads/2016/03/mysql-logo.png'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title mt-4'>My SQL</h5>
              <p class='card-text'>
                Executing MySQL queries for specific tables and designing the
                database involves defining the schema and performing queries to
                retrieve, modify, or delete data within MySQL database tables
              </p>
              <a
                href='https://github.com/GowthamaViknesh/MySQL-Task/tree/main/MySql'
                target='_blank'
                className='btns  btn-primary'
              >
                <FontAwesomeIcon icon={faCode} /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
