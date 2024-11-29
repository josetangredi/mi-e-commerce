import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          La Urdimbre
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle className="nav-link" id="navbarDropdown">
                  Productos
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/category/living">
                    Living
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/decoracion">
                    Decoración
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/usoDiario">
                    Uso Diario
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
