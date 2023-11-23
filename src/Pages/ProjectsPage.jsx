import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Frontend from '../Components/Fronend';
import Backend from '../Components/Backend';
import Mern from '../Components/Mern';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState('Mern');

  const handleFront = () => {
    setSelectedComponent('FrontEnd');
  };

  const handleBack = () => {
    setSelectedComponent('BackEnd');
  };

  const handleMern = () => {
    setSelectedComponent('Mern');
  };

  return (
    <div>
      <h3
        className='text-center text-pro'
        style={{ fontFamily: 'Dancing Script', fontSize: '40px' }}
      >
        <FontAwesomeIcon icon={faCodepen} /> Projects
      </h3>
      <div className='text-center'>
        <button className='btn' onClick={handleFront}>
          FrontEnd
        </button>
        <button className='btn' onClick={handleBack}>
          BackEnd
        </button>
        <button className='btn' onClick={handleMern}>
          Mern
        </button>
      </div>
      {selectedComponent === 'FrontEnd' && <Frontend />}
      {selectedComponent === 'BackEnd' && <Backend />}
      {selectedComponent === 'Mern' && <Mern />}
    </div>
  );
};

export default ProjectsPage;
