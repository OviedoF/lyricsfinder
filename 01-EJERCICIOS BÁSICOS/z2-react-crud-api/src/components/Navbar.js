import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul
          style={{
            display: "flex",
            width: "1000px",
            justifyContent: "space-around",
          }}
        >
          <li>
            <Link to={'/'}>Portales</Link>
          </li>
          <li>
            <Link to={'/useref'}>useRef</Link>
          </li>
          <li>
            <Link to={'/pelicula/343611'}>peli 1</Link>
          </li>
          <li>
            <Link to={'/pelicula/343612'}>peli 2</Link>
          </li>
          <li>
            <Link to={'/pelicula/343613'}>peli 3</Link>
          </li>
          <li>
            <Link to={'/pelicula/343614'}>peli 4</Link>
          </li>
          <li>
            <Link to={'/pelicula/343615'}>peli 5</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
