import { useMailProviderContext } from "../context/MailProvider";

const createDispatch = (type, payload) => {
  if (type === "star") {
    return [
      {
        type: "TOGGLE_STAR_UNSTAR",
        payload: payload,
      },
    ];
  }
  if (type === "read") {
    return [
      {
        type: "TOGGLE_READ_UNREAD",
        payload: payload,
      },
    ];
  }
  if (type === "delete") {
    return [
      {
        type: "SET_TOASTER",
        payload: {
          showToaster: true,
          actionPerformed: "Delete",
          emailId: payload,
        },
      },
      { type: "TOGGLE_DELETE", payload: payload },
    ];
  }
  if (type === "spam") {
    return [
        {
          type: "SET_TOASTER",
          payload: {
            showToaster: true,
            actionPerformed: "Spam",
            emailId: payload,
          },
        },
        { type: "TOGGLE_SPAM", payload: payload },
      ];
  }
};

const returnClassName = type => {
  if (type === "star") return "star";
  if (type === "read") return "read-unread";
  if (type === "delete") return "delete";
  if (type === "spam") return "spam";
};

export const Button = ({ type, payload, buttonLabel, timeout }) => {
  const { dispatch } = useMailProviderContext();

  const dispatchValues = createDispatch(type, payload);
  const cssClass = returnClassName(type);

  return (
    <button
      className={cssClass}
      onClick={() => {
        dispatchValues.map((dispatchValue) => dispatch(dispatchValue));
        timeout &&
          setTimeout(() => {
            dispatch({
              type: "SET_TOASTER",
              payload: { showToaster: false },
            });
          }, 5000);
      }}
    >
      {buttonLabel}
    </button>
  );
};
