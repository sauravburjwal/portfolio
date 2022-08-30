import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward, FaCogs } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me photo">
          <div className="about__me-image">
            <img src={ME} alt="admin" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about__card">
              <FaCogs className="about__icon" />
              <h5>Skills</h5>
              <small>FrontEnd Developer</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            <br /> I'm quietly confident, naturally curious, and perpetually
            working on improving my chops one design problem at a time.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
