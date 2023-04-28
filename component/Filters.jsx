import { CHECKBOX } from "../constant";
import { useMailProviderContext } from "../context/MailProvider";

export const Filters = () => {
  const { dispatch, state } = useMailProviderContext();

  return (
    <div className="filters-container">
      <p className="title">Filters</p>

      {CHECKBOX.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={option.key}
            checked={state.selectedFilters.selectedCheckbox.includes(option.key)}
            onChange={(e) => dispatch({ type: "HANDLE_FILTERS", payload: e })}
          />
          Show {option.value} mails
        </label>
      ))}
    </div>
  );
};
