import { NavLink } from 'react-router-dom';

const SideBar = () => (
  <nav className="navbar">
    <NavLink to="/" className="logo">
      <h1>Dev Hub</h1>
    </NavLink>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/developers" className="nav-link">
          Developers
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/create_dev" className="nav-link">
          New Developer
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/reservations" className="nav-link">
          Reservations
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/create_reservation" className="nav-link">
          New Reservation
        </NavLink>
      </li>
    </ul>

    <div className="navbar-social">
      <a
        href="https://www.facebook.com/groups/react.js.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-social-item"
      >
        <i className="bi bi-facebook" />
      </a>
      <a
        href="https://www.instagram.com/reactjs.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-social-item"
      >
        <i className="bi bi-instagram" />
      </a>
      <a
        href="https://www.instagram.com/reactjs.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-social-item"
      >
        <i className="bi bi-pinterest" />
      </a>
    </div>
  </nav>
);

export default SideBar;
