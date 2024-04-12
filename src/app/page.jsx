import React from 'react';
import PropTypes from 'prop-types';
import SkillsWidget from '../components/SkillsWidget Component/SkillsWidget.jsx';
import '../components/SkillsWidget Component/SkillsWidget.css';
import WorkWidget from '../components/WorkWidget Component/WorkWidget.jsx';
import '../components/WorkWidget Component/WorkWidget.css';
import Navbar from '../components/Navbar component/Navbar.jsx';
import Footer from '../components/Footer component/Footer.jsx';
import '../components/Footer component/Footer.css';
// import SignupWidget from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SignupWidget Component/SignupWidget.jsx';
// import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SignupWidget Component/SignupWidget.css';

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
  experiences: [],
};

// const SignUp = ({ title, content, simulateNetworkRequestTime }) => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [busy, setBusy] = useState(false);

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     setBusy(true);
  //     await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
  //     setMessage(`Thanks for subscribing, ${email}!`);
  //     setIsSubscribed(true);
  //   } finally {
  //     setBusy(false);
  //   }
  // }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>{title}</h2>
//       <p>{content}</p>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Your email address"
//         required
//       />
//       <button type="submit">Join</button>
//     </form>
//   );
// }

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
 const Footer = ({ links }) => (
    <footer data-testid="footer" className="footer">
      <ul>
        {links.map((link, index) => (
          <li key={index} data-testid={`footerLink${index}`}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      <p data-testid="footerContent">© {new Date().getFullYear()}</p>
    </footer>
  );
  Footer.propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  };

  Footer.defaultProps = {
    links: [],
  };

  const options = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/users', label: 'Users' },
  ];
  return (
    <div>
      <header>
        <Navbar options={options} />
      </header>
      <main>
        <h1>Software Engineer, Father, and Believer</h1>
        <section>
          <WorkWidget
            title={workExperiences.title}
            content={workExperiences.content}
            experiences={workExperiences.experiences}
          />
        </section>
        <section>
          <SkillsWidget
            title="Skills"
            content="Skilled in Java, JavaScript, HTML, and CSS"
            skills={skillsData}
          />
        </section>
      </main>
      <aside>
        <section>
          {/* Other content goes here */}
        </section>
      </aside>
        <footer className="footer">
    <ul className="nav-links" style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '10px' }}>
            <a href="/">Home</a>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
            <a href="/about">About</a>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
            <a href="/projects">Projects</a>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
            <a href="/users">Users</a>
        </li>
    </ul>
    <div className="copyright">
        © 2024 John Doe, All rights reserved.
    </div>
</footer>
    </div>
  );
  }
