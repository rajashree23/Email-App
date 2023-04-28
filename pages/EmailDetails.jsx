import { useParams } from "react-router-dom";
import { useMailProviderContext } from "../context/MailProvider";

export const EmailDetails = () => {
  const { emailId } = useParams();
  const { state } = useMailProviderContext();

  const email = state.emails.find((email) => email.mId === emailId);
  return (
    <div className="right-container">
      <h2 className="email-detail-sub">Subject: {email.subject}</h2>
      <p className="email-detail-content">{email.content}</p>
    </div>
  );
};
