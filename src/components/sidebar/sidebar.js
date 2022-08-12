import { Link } from 'react-router-dom';

const SideBar = () => (
  <nav className="navbar">
    <Link to="/">
      <img
        src="https://img.icons8.com/color/48/000000/github.png"
        className="logo"
        alt="Logo"
      />
    </Link>

    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/developers" className="nav-link">
          Developers
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/developers/new" className="nav-link">
          New Developer
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/reservation/new" className="nav-link">
          New Reservation
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/reservation" className="nav-link">
          Reservations
        </Link>
      </li>
    </ul>

    <div className="navbar-social">
      <a
        href="https://www.facebook.com/groups/react.js.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-social-item"
      >
        <img
          src="https://img.icons8.com/color/48/000000/facebook-new.png"
          className="navbar-social-item-icon"
          alt="Facebook"
        />
      </a>
      <a
        href="https://www.instagram.com/reactjs.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-social-item"
      >
        <img
          src="https://img.icons8.com/color/48/000000/instagram-new.png"
          className="navbar-social-item-icon"
          alt="Instagram"
        />
      </a>
    </div>
  </nav>
);

export default SideBar;
