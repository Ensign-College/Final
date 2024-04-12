import './Navbar.css';
import PropTypes from 'prop-types';
const options = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];
function Navbar({ options }) {
  return (
    
    <nav data-testid="nav" className={'navbar'}>
      <ul data-testid="ul">
        <li data-testid="li0">
          <a data-testid="a0" className="link" href="/">
            Home
          </a>
        </li>
        <li data-testid="li1">
          <a data-testid="a1" className="link" href="/about">
            About
          </a>
        </li>
        <li data-testid="li2">
          <a data-testid="a2" className="link" href="/contact">
            Projects
          </a>
        </li>
        <li data-testid="li2">
          <a data-testid="a2" className="link" href="/contact">
            Users
          </a>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
