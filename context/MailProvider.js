import React from "react";

import { mails } from "../constant";
import { mailReducer } from "../reducer/MailReducer";

const MailContext = React.createContext();

export const MailContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(mailReducer, {
    emails: mails,
    toaster: {
      showToaster: false,
      actionPerformed: null,
      emailId: null,
    },
    selectedFilters: {
      selectedCheckbox: [],
    },
  });

  return (
    <MailContext.Provider value={{ state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
};

export const useMailProviderContext = () => React.useContext(MailContext);
