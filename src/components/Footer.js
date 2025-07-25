import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [visitCount, setVisitCount] = useState(() => {
    const savedCount = localStorage.getItem("visitCount");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      const newCount = visitCount + 1;
      setVisitCount(newCount);
      localStorage.setItem("visitCount", newCount);
      isInitialMount.current = false;
    }
  }, []); // Empty array is fine now, as we control the logic with ref

  return (
    <footer className="gradient-bg text-white pt-8 pb-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left slide-in">
          <div>
            <h4 className="font-bold text-2xl mb-2">
              <i className="fa-brands fa-youtube text-red-600 mr-2"></i>
              Pom-Player
            </h4>
            <p className="text-sm text-gray-300">
              Your ultimate video player for productivity & fun!
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-3">Quick Links</h5>
            <ul className="space-y-2">
              {["Home", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-red-500 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-3">Connect</h5>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://instagram.com/sarthak03dot"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-red-500 text-xl transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="mailto:sarthak03december@gmail.com"
                className="text-gray-300 hover:text-red-500 text-xl transition"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Pom-Player | Designed by @sarthak03dot |
          Page Visits: {visitCount}
        </div>
      </div>
    </footer>
  );
};

export default Footer;