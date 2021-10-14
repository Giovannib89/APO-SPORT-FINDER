// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './footer.scss';

// == Component
const Footer = ({
  onClickCloseSettings,
}) => {
  const now = new Date();
  const year = now.getFullYear();
  const handleCloseSettings = () => {
    onClickCloseSettings();
  };
  return (
    <footer className="footer">
      <p className="footer__contact hover-underline-animation">
        <Link
          to="/contact"
          onClick={handleCloseSettings}
        >
          Contact
        </Link>
      </p>
      <p className="footer__aboutus hover-underline-animation">
        <Link
          to="/about"
          onClick={handleCloseSettings}
        >
          A propos
        </Link>
      </p>
      <p className="footer__copyright">Sport Finder - {year} ©</p>
    </footer>
  );
};

Footer.propTypes = {
  onClickCloseSettings: PropTypes.func.isRequired,
};

// == Export
export default Footer;
