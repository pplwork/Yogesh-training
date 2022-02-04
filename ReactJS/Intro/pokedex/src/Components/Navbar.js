import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
// Link -> Prevent Browser to make call to server after a link is clicked, instead React loads the Component.
// NavLink -> does same work as Link, just adds extra class 'active' to the clicked link if we want to style our links.

const Navbar = (props) => {
  // // Programmatic Redirects
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Poke'Dex
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
