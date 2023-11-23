import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import Pro1 from '../Assests/pro.jpg';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import {
  faConnectdevelop,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import QualiPage from './QualiPage';
import Certification from './Certification';
import ProjectsPage from './ProjectsPage';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='home-container'>
              <div className='home-content'>
                <div className='home-info'>
                  <h2>
                    Hello{' '}
                    <span style={{ color: 'red', letterSpacing: '2px' }}>
                      I'm !
                    </span>
                    <FontAwesomeIcon icon={faHand} style={{ color: 'red' }} />
                  </h2>
                  <h2 className='home-title'>
                    Gowthama <span style={{ color: 'red' }}>Viknesh</span>
                  </h2>
                  <h3 className='home-subtitle'>
                    <FontAwesomeIcon icon={faConnectdevelop} className='icon' />{' '}
                    <span id='spin'></span>
                  </h3>
                  <p className='home-description'>
                    I'm a Web <span className='home-desc'>developer.</span>
                    <span className='home-desc me-1'>
                      {' '}
                      Passionate MERN Stack Developer
                    </span>
                    creating innovative web solutions
                  </p>
                  <a href='/' className='btn'>
                    Say Hello
                  </a>
                  <button className='btn-git '>
                    <a
                      href='https://github.com/GowthamaViknesh'
                      target='_blank'
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className='home-icon'
                        style={{ color: 'white' }}
                      />
                    </a>
                  </button>
                  <a
                    className='btn-git '
                    href='https://www.linkedin.com/in/gowtham1820?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                    target='_blank'
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className='home-icon'
                      style={{ color: '#0A66C2' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 '>
            <div className='home-container'>
              <div className='home-content'>
                <div className='home-info'>
                  <img className='home_img' src={Pro1} alt='lgo' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutPage />

      <SkillsPage />

      <QualiPage />

      <Certification />

      <ProjectsPage />

      <Footer />
    </>
  );
};

export default HomePage;
