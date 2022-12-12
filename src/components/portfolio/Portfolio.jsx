import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
import IMG7 from '../../assets/portfolio7.png';
import IMG8 from '../../assets/portfolio8.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dashbord App',
    github: 'https://github.com/sauravburjwal/syncfusion-dashboard',
    demo: 'https://saurav-syncfusion-dashboard.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Expense Tracker',
    github: 'https://github.com/sauravburjwal/expense-tracker',
    demo: 'https://saurav-expense-tracker.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Youtube Clone App',
    github: 'https://github.com/sauravburjwal/youtube-clone',
    demo: 'https://saurav-youtube-clone.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio-Site',
    github: 'https://github.com/sauravburjwal/profile-site',
    demo: 'https://saurav-profile-site.netlify.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Fighting Game',
    github: 'https://github.com/sauravburjwal/Fighting-Game',
    demo: 'https://saurav-fighting-game.netlify.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Forkify',
    github: 'https://github.com/sauravburjwal/forkify',
    demo: 'https://saurav-forkify.netlify.app/',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Omnifood',
    github: 'https://github.com/sauravburjwal/Omnifood',
    demo: 'https://saurav-omnifood-site.netlify.app/',
  },
  {
    id: 8,
    image: IMG8,
    title: 'Other Projects',
    github: 'https://github.com/sauravburjwal/projects',
    demo: 'https://saurav-other-projects.netlify.app/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt="portfolio preview" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
