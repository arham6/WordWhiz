import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
        <hr/>
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-section">
            {/* <h3>Contact Us</h3> */}
            <p>Contact Email: info@wordwhiz.com</p>
            {/* <p>Phone: +1 (123) 456-7890</p> */}
          </div>
          <div className="footer-section">
            {/* <h3>Follow Us</h3> */}
            <div className="social-icons">
              {/* Include social media icons as needed */}
              <a href="https://facebook.com/wordlegame" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/wordlegame" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/wordlegame" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <strong>&copy; {new Date().getFullYear()} WordWhiz. All rights reserved.</strong>
          <br/>
          <p></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
