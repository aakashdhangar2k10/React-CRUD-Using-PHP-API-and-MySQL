import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (

    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container"> 
          <Link to="/" className="navbar-brand" >Web Developer</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/userlist" className="nav-link" href="#">User List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/adduser" className="nav-link" href="#">Add User</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/productlist" className="nav-link" href="#">Product List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/addproduct" className="nav-link" href="#">Add Product</NavLink>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
