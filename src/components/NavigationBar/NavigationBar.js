import { NavLink } from "react-router-dom";

import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <nav>
      <ul className="navigation">
        <li className="navigation_item">
          <NavLink to="/welcome" activeclassname="navigation__item--active">
            Home
          </NavLink>
        </li>
        <li className="navigation_item">
          <NavLink to="/spacecrafts" activeclassname="navigation__item--active">
            Spacecrafts
          </NavLink>
        </li>
        <li className="navigation_item">
          <NavLink to="/planets" activeclassname="navigation__item--active">
            Planets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
