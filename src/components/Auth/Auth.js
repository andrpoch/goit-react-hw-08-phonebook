import { NavLink } from 'react-router-dom';

import s from './Auth.module.css';

export default function Auth() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Sign In
      </NavLink>
    </div>
  );
}
