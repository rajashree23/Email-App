import { Link } from "react-router-dom";

import { useMailProviderContext } from "../context/MailProvider";

export const EmailCard = ({ email, trash, spam }) => {
  const { dispatch } = useMailProviderContext();
  return (
    <div className={`email-card ${email.unread ? "unread" : ""}`}>
      <div className="sub-star-container">
        <h2>Subject: {email.subject}</h2>
        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_STAR_UNSTAR", payload: email.mId })
          }
          className="star"
        >
          {email.isStarred ? "Unstar" : "Star"}
        </button>
      </div>

      <p>{email.content}</p>

      <div className="action-container">
        <Link
          className="view-details"
          to={`/email/${email.mId}`}
          onClick={() =>
            dispatch({ type: "TOGGLE_READ_UNREAD", payload: email.mId })
          }
        >
          View Details
        </Link>
        <div className="button-container">
          <button
            className="delete"
            onClick={() => {
              dispatch({
                type: "SET_TOASTER",
                payload: {
                  showToaster: true,
                  actionPerformed: "Trash",
                  emailId: email.mId,
                },
              });
              dispatch({ type: "TOGGLE_DELETE", payload: email.mId });
              setTimeout(() => {
                dispatch({
                  type: "SET_TOASTER",
                  payload: { showToaster: null },
                });
              }, 5000);
            }}
          >
            {trash ? "Move to Inbox" : "Delete"}
          </button>

          <button
            className="read-unread"
            onClick={() =>
              dispatch({ type: "TOGGLE_READ_UNREAD", payload: email.mId })
            }
          >
            {email.unread ? "Mark as Read" : "Mark as Unread"}
          </button>
          <button
            className="spam"
            onClick={() => {
              dispatch({
                type: "SET_TOASTER",
                payload: {
                  showToaster: true,
                  actionPerformed: "Spam",
                  emailId: email.mId,
                },
              });

              dispatch({ type: "TOGGLE_SPAM", payload: email.mId });
              setTimeout(() => {
                dispatch({
                  type: "SET_TOASTER",
                  payload: { showToaster: null },
                });
              }, 5000);
            }}
          >
            {spam ? "Move to Inbox" : " Report spam"}
          </button>
        </div>
      </div>
    </div>
  );
};
