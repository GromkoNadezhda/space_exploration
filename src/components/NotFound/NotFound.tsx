import { useEffect } from "react";
import "./NotFound.scss";

export const NotFound = ({
  updateHeaderContent,
  headerContent,
}: {
  updateHeaderContent: (id: string) => void;
  headerContent: {
    title: string;
    mainPart: string;
  };
}) => {
  useEffect(() => {
    updateHeaderContent("id");
    return () => updateHeaderContent("id");
  }, [headerContent]);

  return <div className="not-found"></div>;
};
