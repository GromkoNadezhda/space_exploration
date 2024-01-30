import { useState } from "react";
import { HeaderContent } from "../../constants/constants";
import "./Header.scss";

export const Header = () => {
  const [contentPart, setContentPart] = useState(
    HeaderContent.allAstronomyPictures
  );

  return (
    <div className="header">
      <h1 className="header__title">{contentPart.title}</h1>
      <p className="header__main-part">{contentPart.mainPart}</p>
    </div>
  );
};
