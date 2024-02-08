import { useEffect, useState } from "react";
import { FiltrationInputs } from "@components/FiltrationInputs/FiltrationInputs";
import { Sorting } from "@components/Sorting/Sorting";
import "./Header.scss";

export const Header = ({
  headerContent,
}: {
  headerContent: {
    id: string;
    title: string;
    mainPart: string;
  };
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    handleShowFiltration();
  }, [headerContent]);

  const handleShowFiltration = () =>
    headerContent.id === "primary" ? setShow(true) : setShow(false);

  return (
    <div className="header">
      <h1 className="header__title">{headerContent.title}</h1>
      <p className="header__main-part">{headerContent.mainPart}</p>
      {show && (
        <div className="header__filtration">
          <Sorting />
          <FiltrationInputs />
        </div>
      )}
    </div>
  );
};
