import { useSelector } from "react-redux";
import { IHEADER_CONTENT } from "@types";
import "./Header.scss";

export const Header = () => {
  const headerContent = useSelector(
    (state: { appSettings: { headerContent: IHEADER_CONTENT } }) =>
      state.appSettings.headerContent
  );

  return (
    <div className="header">
      <h1 className="header__title">{headerContent.title}</h1>
      <p className="header__main-part">{headerContent.mainPart}</p>
    </div>
  );
};
