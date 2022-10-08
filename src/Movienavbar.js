import React, { PureComponent } from 'react';
import './App.css';
export default class Movienavbar extends PureComponent {
  render() {
    return (
    <div className='div_'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <p className="navbar-brand" >Movie_flix</p>   
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <p className="nav-link" >Home <span className="sr-only">(current)</span></p>
      </li>
      <li className="nav-item">
        <p className="nav-link" >Latest 2022</p>
      </li>
      <li className="nav-item dropdown">
        <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Genere
        </p>
      </li>
      <li className="nav-item">
        <p className="nav-link disabled"  aria-disabled="true">Premium</p>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
    )
  }
}
