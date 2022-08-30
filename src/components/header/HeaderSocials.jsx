import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/sauravburjwal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/sauravburjwal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://instagram.com/SauravBurjwal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
