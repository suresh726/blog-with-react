import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative p-2 my-5 w-full flex flex-wrap items-center justify-between text-gray-200 hover:text-gray-400 focus:text-gray-400 bg-gray-800">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <ul className="navbar-nav flex flex-row pl-0 list-style-none mr-auto font-bold space-x-20">
          <li className="nav-item p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item p-2">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="nav-item p-2">
            <Link to="/articles-list">Articles</Link>
          </li>
        </ul>
      </div>
    </nav>   
  );
}

export default Navbar;