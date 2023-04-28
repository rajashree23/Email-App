import { NavLink } from "react-router-dom";

export const Headers = () => {
  const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav>
      <NavLink className={`${getActiveClass} link`} to="/">
        <span class="material-symbols-outlined">mail</span>Inbox
      </NavLink>
      <NavLink className={`${getActiveClass} link`} to="/spam">
        <span class="material-symbols-outlined">error</span>
        Spam
      </NavLink>
      <NavLink className={`${getActiveClass} link`} to="/trash">
        <span class="material-symbols-outlined">delete</span>
        Trash
      </NavLink>
    </nav>
  );
};
