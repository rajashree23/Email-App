import { useMailProviderContext } from "../context/MailProvider";

export const Toaster = (toasterDispatch) => {
  const { state, dispatch } = useMailProviderContext();

  return (
    <div className="toaster-container">
      <p>Conversation moved to {state.toaster.actionPerformed}</p>
      <button
        onClick={() => {
          dispatch(toasterDispatch);
          dispatch({ type: "SET_TOASTER", payload: { showToaster: false } });
        }}
      >
        {" "}
        Undo
      </button>
    </div>
  );
};
