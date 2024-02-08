import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFilteringValues } from "../../store/astronomyPicturesSlice";
import {
  BUTTON_THEME,
  FILTRATION_TITLE,
  FILTRATION_TITLE_LIST,
} from "../../constants/constants";
import { TFILTERING_VALUES } from "../../types/types";
import "./FiltrationInputs.scss";

const INITIAL_STATE = {
  selectInput: FILTRATION_TITLE.DATE,
  buttonTheme: {
    [FILTRATION_TITLE.DATE]: BUTTON_THEME.active,
    [FILTRATION_TITLE.TITLE]: BUTTON_THEME.unactive,
  },
  inputValue: null,
};

export const FiltrationInputs = () => {
  const [selectInput, setSelectInput] = useState(INITIAL_STATE.selectInput);
  const [buttonTheme, setButtonTheme] = useState(INITIAL_STATE.buttonTheme);
  const [inputValue, setInputValue] = useState<
    | TFILTERING_VALUES
    | {
        [key: string]: string;
      }
    | null
  >(INITIAL_STATE.inputValue);

  const dispatch = useDispatch();

  useEffect(() => {
    updateFilteringValue();
  }, [inputValue]);

  const updateInputValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue({ [event.target.id]: event.target.value });

  const updateFilteringValue = () =>
    dispatch(addFilteringValues(inputValue as TFILTERING_VALUES));

  const handleChangeTheme = (id: string) => {
    id !== FILTRATION_TITLE.DATE
      ? setButtonTheme({
          [FILTRATION_TITLE.DATE]: BUTTON_THEME.unactive,
          [FILTRATION_TITLE.TITLE]: BUTTON_THEME.active,
        })
      : setButtonTheme({
          [FILTRATION_TITLE.DATE]: BUTTON_THEME.active,
          [FILTRATION_TITLE.TITLE]: BUTTON_THEME.unactive,
        });

    setInputValue(null);
  };

  return (
    <div className="filtration">
      <div className="filtration__wrapper-button">
        {FILTRATION_TITLE_LIST.map((filtrationTitle) => (
          <button
            key={filtrationTitle}
            className={buttonTheme[filtrationTitle]}
            id={filtrationTitle}
            onClick={() => {
              setSelectInput(filtrationTitle),
                handleChangeTheme(filtrationTitle);
            }}
          >
            {filtrationTitle}
          </button>
        ))}
      </div>
      {selectInput === FILTRATION_TITLE.DATE ? (
        <input
          className="filtration__input"
          value={inputValue?.Date || ""}
          id={FILTRATION_TITLE.DATE}
          type="date"
          min="2024-01-01"
          onChange={updateInputValue}
        />
      ) : (
        <input
          className="filtration__input"
          value={inputValue?.Title || ""}
          id={FILTRATION_TITLE.TITLE}
          type="text"
          onChange={updateInputValue}
        />
      )}
    </div>
  );
};
