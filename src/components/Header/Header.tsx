import { useSelector } from "react-redux";
import { selectHeaderContent } from "@store/selectors";
import "./Header.scss";

export const Header = () => {
  const headerContent = useSelector(selectHeaderContent);

  return (
    <div className="header">
      <h1 className="header__title">{headerContent.title}</h1>
      <p className="header__main-part">{headerContent.mainPart}</p>
    </div>
  );
};
