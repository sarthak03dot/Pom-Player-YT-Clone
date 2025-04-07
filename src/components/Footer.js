import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>
            <i className="fa-brands fa-youtube"></i>&nbsp; Pom-Player
          </h2>
          <p>
            Your personal YouTube-style player for productivity & entertainment.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Connect</h4>
          <div className="social-icons">
            <a
              href="https://instagram.com/sarthak03dot"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:sarthak03december@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Pom-Player | Designed by @sarthak03dot
        </p>
      </div>
    </section>
  );
};

export default Footer;
