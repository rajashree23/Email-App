import { Link } from "react-router-dom";

import { useMailProviderContext } from "../context/MailProvider";
import { Button } from "./Button";

export const EmailCard = ({ email, trash, spam }) => {
  const { dispatch } = useMailProviderContext();
  return (
    <div className={`email-card ${email.unread ? "unread" : ""}`}>
      <div className="sub-star-container">
        <h2>Subject: {email.subject}</h2>
        <Button
          type="star"
          payload={email.mId}
          buttonLabel={email.isStarred ? "Unstar" : "Star"}
        />
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
        <div>
          <Button
            type="delete"
            payload={email.mId}
            buttonLabel={trash ? "Move to Inbox" : "Delete"}
            timeout
          
          />
          <Button
            type="read"
            payload={email.mId}
            buttonLabel={email.unread ? "Mark as Read" : "Mark as Unread"}
          />
   
          <Button
            type="spam"
            payload={email.mId}
            buttonLabel={spam ? "Move to Inbox" : " Report spam"}
            timeout
          
          />
        </div>
      </div>
    </div>
  );
};
