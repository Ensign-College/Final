import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar component/Navbar.jsx";
import Footer from "../../components/Footer component/Footer.jsx";
import "../../components/Footer component/Footer.css";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
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
    { path: "/page", label: "Home" },
    { path: "/", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/users", label: "Users" },
  ];
  return (
    <div>
      <header>
        <Navbar options={options} />
      </header>
      <main>
        <h1>Software Engineer, Father, and Believer</h1>
        <section></section>
        <section></section>
      </main>
      <aside>
        <section>{/* Other content goes here */}</section>
      </aside>
      <footer className="footer">
        <ul className="nav-links" style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/">Home</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/about">About</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/projects">Projects</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/users">Users</a>
          </li>
        </ul>
        <div className="copyright">© 2024 John Doe, All rights reserved.</div>
      </footer>
    </div>
  );
}
