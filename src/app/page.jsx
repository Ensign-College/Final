import React from 'react';
import PropTypes from 'prop-types';
import SkillsWidget from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SkillsWidget Component/SkillsWidget.jsx';
import '/src/components/SkillsWidget Component/SkillsWidget.css';
import WorkWidget from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/WorkWidget Component/WorkWidget.jsx';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/WorkWidget Component/WorkWidget.css';
import Navbar from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Navbar component/Navbar.jsx';
export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
}

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number,
    })
  ),
};

WorkWidget.defaultProps = {
 Experience: [],
};

export default function Home() {

  const skillsData = [
    {
      icon: 'path/to/html-icon.jpg',
      name: 'HTML',
      proficiency: 90,
    },
    {
      icon: 'path/to/css-icon.jpg',
      name: 'CSS',
      proficiency: 85,
    },
    {
      icon: 'path/to/javascript-icon.jpg',
      name: 'JavaScript',
      proficiency: 80,
    },
  ];
  const workExperiences = {
    title: 'Work',
    content: 'My work experience.',
    experiences: [
      {
        logo: '/slack.png',
        organization: 'Slack',
        jobTitle: 'Software Engineer',
        startYear: 2016,
        endYear: null,
      },
      {
        logo: '/spotify.png',
        organization: 'Spotify',
        jobTitle: 'Software Engineer',
        startYear: 2014,
        endYear: 2015,
      },
      {
        logo: '/audible.png',
        organization: 'Audible',
        jobTitle: 'Software Engineer',
        startYear: 2012,
        endYear: 2013,
      },
      {
        logo: '/microsoft.png',
        organization: 'Microsoft',
        jobTitle: 'Software Engineer',
        startYear: 2010,
        endYear: 2011,
      },
    ]
  };

  return (
    <div>
      <header>
       <Navbar  />
        {/* Navigation bar goes here */}
      </header>
      <main>
        <h1>Biography</h1>
        {/* Biography goes here */}
        <section>
          <h2>Work Experience</h2>
          <WorkWidget title={workExperiences.title} content={workExperiences.content} experiences={workExperiences.experiences} />
        </section>
        <SkillsWidget title="Skills" content="Skilled in Java, JavaScript, HTML, and CSS" skills={skillsData} />
      </main>
      <aside>
        <section>
          <h2>Subscription</h2>
          {/* Subscription form goes here */}
        </section>
      </aside>
      <footer>
        {/* Footer links go here */}
      </footer>
    </div>
  );
};
