import React, { useState } from "react";

const SearchBar = ({ onFormSubmit, toggleTheme, isDarkTheme }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <nav className="gradient-bg sticky top-0 z-10 py-4 px-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-bold text-2xl flex items-center text-white">
          <i className="fa-brands fa-youtube text-red-600 mr-2"></i> Pom-Player
        </a>

        {/* Search and Actions */}
        <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto">
          {/* Search Form */}
          <form onSubmit={onSubmit} className="flex w-full md:w-auto">
            <input
              type="search"
              placeholder="Search Here..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-l-full px-4 py-2 focus:outline-none w-full md:w-64"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white rounded-r-full px-4 py-2 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </form>

          {/* User Icon */}
          <div className="text-white hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-white hover:text-yellow-400 transition"
            title="Toggle Theme"
          >
            <i className={`fa-solid fa-${isDarkTheme ? "sun" : "moon"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
