import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/other">Other</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
