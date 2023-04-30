import { NavLink } from "react-router-dom";
import { useMailProviderContext } from "../context/MailProvider";

const calculateMailsCountByCategory = (state) =>
  state.emails.reduce(
    (countByCategory, currEmail) => {
      if (currEmail.isSpam) countByCategory["isSpam"]++;
      else if (currEmail.isTrash) countByCategory["isTrash"]++;
      else countByCategory["all"]++;

      return countByCategory;
    },
    { isSpam: 0, isTrash: 0, all: 0 }
  );

export const Headers = () => {
  const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

  const { state } = useMailProviderContext();
  const { isSpam, isTrash, all } = calculateMailsCountByCategory(state);


  return (
    <nav>
      <NavLink className={`${getActiveClass} link`} to="/">
        <span className="material-symbols-outlined">mail</span>Inbox({all})
      </NavLink>
      <NavLink className={`${getActiveClass} link`} to="/spam">
        <span className="material-symbols-outlined">error</span>
        Spam({isSpam})
      </NavLink>
      <NavLink className={`${getActiveClass} link`} to="/trash">
        <span className="material-symbols-outlined">delete</span>
        Trash({isTrash})
      </NavLink>
    </nav>
  );
};
