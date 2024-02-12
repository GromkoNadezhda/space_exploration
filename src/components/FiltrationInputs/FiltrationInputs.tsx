import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFilteringValues } from "@store/astronomyPicturesSlice";
import {
  BUTTON_THEME,
  FILTRATION_TITLE,
  FILTRATION_TITLE_LIST,
  INPUT_DATA,
} from "@constants/constants";
import { TFILTERING_VALUES } from "@types";
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
  const [buttonTheme, setButtonTheme] = useState<{ [key: string]: string }>(
    INITIAL_STATE.buttonTheme
  );
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

  const handleChangeTheme = (
    activeId: FILTRATION_TITLE.DATE | FILTRATION_TITLE.TITLE,
    unactiveId: FILTRATION_TITLE.DATE | FILTRATION_TITLE.TITLE
  ) => {
    if (activeId !== unactiveId) {
      setButtonTheme({
        [activeId]: BUTTON_THEME.active,
        [unactiveId]: BUTTON_THEME.unactive,
      });

      setInputValue(null);
    }
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
                handleChangeTheme(filtrationTitle, selectInput);
            }}
          >
            {filtrationTitle}
          </button>
        ))}
      </div>
      <input
        className="filtration__input"
        value={inputValue !== null ? inputValue[selectInput] : ""}
        id={INPUT_DATA[selectInput].id}
        type={INPUT_DATA[selectInput].type}
        min={INPUT_DATA[selectInput].type}
        onChange={updateInputValue}
      />
    </div>
  );
};
