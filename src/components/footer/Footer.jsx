import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        SAURAV BURJWAL
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sauravburjwal" target="_blank">
          <BsLinkedin />
        </a>
        <a href="http://facebook.com/sauravburjwal" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://github.com/sauravburjwal" target="_blank">
          <FaGithub />
        </a>
        <a href="http://twitter.com/sauravburjwal" target="_blank">
          <IoLogoTwitter />
        </a>
        <a href="https://leetcode.com/SauravBurjwal" target="_blank">
          <SiLeetcode />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Saurav Burjwal. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
