import { EmailCard } from "../component/EmailCard";
import { Filters } from "../component/fIlters";
import { useMailProviderContext } from "../context/MailProvider";

const applyFilters = (state) => {
  let filteredEmails = [];

  filteredEmails = state.emails.filter(
    (email) => !(email.isSpam || email.isTrash)
  );

  if (state.selectedFilters.selectedCheckbox.length)
      filteredEmails = filteredEmails.filter((email) => state.selectedFilters.selectedCheckbox.every((f)=>email[f]));

  return filteredEmails;
};

export const Inbox = () => {
  const { state } = useMailProviderContext();

  const filteredEmails = applyFilters(state);

  const unreadEmails = filteredEmails.reduce(
    (totalUnread, currEmail) =>
      currEmail.unread ? ++totalUnread : totalUnread,
    0
  );

  return (
    <div className="right-container">
     <Filters/>
      <h2 className="unread-title">Unread: {unreadEmails} </h2>
      {filteredEmails.map((email) => (
        <EmailCard key={email.mId} email={email} />
      ))}
    </div>
  );
};
