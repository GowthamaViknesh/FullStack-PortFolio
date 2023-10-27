import {
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faDatabase,
  faE,
  faGear,
  faGears,
  faLeaf,
  faMagicWandSparkles,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SkillsPage = () => {
  return (
    <>
      <div>
        <h1
          className='skills-content text-center'
          style={{ fontFamily: 'Dancing Script' }}
        >
          <FontAwesomeIcon icon={faGear} className='rotating-icon' /> Skills{' '}
          <FontAwesomeIcon icon={faGear} className='rotating-icon' />
        </h1>
      </div>
      <div className='container mt-5  cont text-center'>
        <div className='row'>
          <div className='col-md-4'>
            <div class='cardBox'>
              <div class='card cards-content'>
                <h2 className='h2-class'>
                  <FontAwesomeIcon
                    icon={faMagicWandSparkles}
                    className='h2-icon'
                  />
                  FrontEnd
                </h2>
                <span className='span-class'></span>
                <div class='content'>
                  <p className='p-class'>
                    <h6 className='text'>
                      <FontAwesomeIcon
                        icon={faHtml5}
                        className='icons'
                        style={{ color: '#DD4B25' }}
                      />
                      HTML 5
                    </h6>
                    <h6 className='text'>
                      {' '}
                      <FontAwesomeIcon
                        icon={faCss3}
                        className='icons'
                        style={{ color: '#379AD6' }}
                      />
                      CSS 3
                    </h6>
                    <h6 className='text'>
                      {' '}
                      <FontAwesomeIcon
                        icon={faBootstrap}
                        className='icons'
                        style={{ color: '#8311F6' }}
                      />
                      BootStrap
                    </h6>
                    <h6 className='text'>
                      {' '}
                      <FontAwesomeIcon
                        icon={faJs}
                        className='icons'
                        style={{ color: '#E8D44D' }}
                      />
                      JavaScript
                    </h6>
                    <h6 className='text'>
                      {' '}
                      <FontAwesomeIcon
                        icon={faReact}
                        className='icons'
                        style={{ color: '#09D6F6' }}
                      />
                      ReactJs
                    </h6>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class='cardBox'>
              <div class='card cards-content'>
                <h2 className='h2-class'>
                  <FontAwesomeIcon icon={faCode} className='h2-icon' />
                  BackEnd
                </h2>
                <span className='span-class'></span>
                <div class='content'>
                  <p className='p-class'>
                    <h6 className='text'>
                      <FontAwesomeIcon
                        icon={faNodeJs}
                        className='icons'
                        style={{ color: '#57A644' }}
                      />
                      Node Js
                    </h6>
                    <h6 className='text'>
                      {' '}
                      <FontAwesomeIcon
                        icon={faE}
                        className='icons'
                        style={{ color: '#4F4F4F' }}
                      />
                      Express Js
                    </h6>
                    <h6 className='text'>
                      {' '}
                      <FontAwesomeIcon
                        icon={faLeaf}
                        className='icons'
                        style={{ color: '#08EE69' }}
                      />
                      MongoDb
                    </h6>
                    <h6 className='text'>
                      {' '}
                      <FontAwesomeIcon
                        icon={faDatabase}
                        className='icons'
                        style={{ color: '#E8D44D' }}
                      />
                      My SQL
                    </h6>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class='cardBox'>
              <div class='card cards-content'>
                <h2 className='h2-class'>
                  <FontAwesomeIcon
                    icon={faScrewdriverWrench}
                    className='h2-icon'
                  />
                  Developer Tools
                </h2>
                <span className='span-class'></span>
                <div class='content'>
                  <p className='p-class'>
                    <h6 className='text'>
                      <FontAwesomeIcon
                        icon={faCode}
                        className='icons'
                        style={{ color: '#097DCD' }}
                      />
                      Visual Code
                    </h6>
                    <h6 className='text'>
                      {' '}
                      <FontAwesomeIcon
                        icon={faGithub}
                        className='icons'
                        style={{ color: 'white' }}
                      />
                      GitHub
                    </h6>
                    <h6 className='text'>
                      {' '}
                      <FontAwesomeIcon
                        icon={faGear}
                        className='icons'
                        style={{ color: '#FF713D' }}
                      />
                      Postman
                    </h6>
                    <h6 className='text'>
                      {' '}
                      <FontAwesomeIcon
                        icon={faLeaf}
                        className='icons'
                        style={{ color: '#08EE69' }}
                      />
                      MongoDB Compass / Atlas
                    </h6>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
