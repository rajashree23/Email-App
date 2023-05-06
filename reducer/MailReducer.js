export const mailReducer = (state, action) => {
  console.log(action)
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
            selectedCheckbox: [
              ...state.selectedFilters.selectedCheckbox,
              filterValue,
            ],
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

    case "SET_TOASTER":
      return {
        ...state,
        toaster: {
          showToaster: action.payload.showToaster,
          actionPerformed: action.payload?.actionPerformed ?? null,
          emailId: action.payload?.emailId ?? null,
        },
      };
    default:
      return state;
  }
};
