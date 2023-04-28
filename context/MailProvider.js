import React from "react";

import { mails } from "../constant";

const MailContext = React.createContext();

const mailReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_READ_UNREAD":
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.mId === action.payload
            ? { ...email, unread: !email.unread }
            : email
        ),
      };
    case "TOGGLE_STAR_UNSTAR":
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.mId === action.payload
            ? { ...email, isStarred: !email.isStarred }
            : email
        ),
      };
    case "TOGGLE_DELETE":
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.mId === action.payload
            ? {
                ...email,
                isTrash: !email.isTrash,
                isSpam: email.isSpam ? !email.isSpam : false,
              }
            : email
        ),
      };
    case "TOGGLE_SPAM":
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.mId === action.payload
            ? {
                ...email,
                isSpam: !email.isSpam,
                isTrash: email.isTrash ? !email.isTrash : false,
              }
            : email
        ),
      };
    case "HANDLE_FILTERS":
      const isChecked = action.payload.target.checked;
      const filterValue = action.payload.target.value;
      if (isChecked) {
        return {
          ...state,
          selectedFilters: {
            ...state.selectedFilters,
            selectedCheckbox: [...state.selectedFilters.selectedCheckbox, filterValue],
          },
        };
      } else {
        return {
          ...state,
          selectedFilters: {
            ...state.selectedFilters,
            selectedCheckbox: state.selectedFilters.selectedCheckbox.filter(
              (filter) => filter !== filterValue
            ),
          },
        };
      }
    default:
      return state;
  }
};

export const MailContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(mailReducer, {
    emails: mails,
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
