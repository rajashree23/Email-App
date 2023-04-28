import { useParams } from "react-router-dom";
import { useMailProviderContext } from "../context/MailProvider";

export const EmailDetails = () => {
  const { emailId } = useParams();
  const { state } = useMailProviderContext();

  const email = state.emails.find((email) => email.mId === emailId);
  return (
    <div className="right-container">
      <h3>Subject: {email.subject}</h3>
      <p>{email.content}</p>
    </div>
  );
};
