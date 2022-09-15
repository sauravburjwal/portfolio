import React from 'react';
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Resume" className="btn">
        Resume <FaDownload />
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
