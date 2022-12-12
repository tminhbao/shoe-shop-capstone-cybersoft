import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-black">
        <div className="container">
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <NavLink className="navbar-brand" to='/'><img src="../image/image 3 (1).png" alt="" /></NavLink>
          <div className="d-flex">
            <div className="d-sm-inline d-none">
              <form className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2 bg-black text-light" type="text" placeholder="Search" />
                <button className="btn text-light"><i className="fa fa-search" /></button>
                <NavLink className="btn text-light" to='/search'>Search</NavLink>
              </form>
            </div>
            <div>
              <NavLink className="btn text-light" to='/cart'><i className="fa fa-cart-arrow-down"><span className="ms-1">(1)</span></i></NavLink>
              <NavLink className="btn text-light" to='/login'>Login</NavLink>
              <NavLink className="btn text-light" to='/register'>Register</NavLink>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <div className="d-sm-none">
              <form className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                <NavLink className="btn text-dark" to='/search'>Search</NavLink>
              </form>
            </div>
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to='/' aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to='/' aria-current="page">Men</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to='/' aria-current="page">Woman</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to='/' aria-current="page">Kid</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to='/' aria-current="page">Sport</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
