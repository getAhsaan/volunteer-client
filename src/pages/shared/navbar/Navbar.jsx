import React from "react";
import logo from "../../../../src/assets/logos/volunteer.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-lg btn-ghost normal-case text-xl"
        >
          <img
            src={logo}
            alt="volunteer logo"
            className="w-36 h-12"
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donation"}>Donation</Link>
          </li>
          <li>
            <Link to={"/events"}>Events</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <Link to={"/register"} className="mx-2">
            <button className="btn btn-sm btn-primary">Register</button>
          </Link>
          <Link to={"/admin"} className="mx-2">
            <button className="btn btn-sm btn-secondary">Admin</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
