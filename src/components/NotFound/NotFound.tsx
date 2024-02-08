import { useEffect } from "react";
import "./NotFound.scss";

export const NotFound = ({
  updateHeaderContent,
  headerContent,
  error,
}: {
  updateHeaderContent: (id: string) => void;
  headerContent: {
    title: string;
    mainPart: string;
  };
  error:string
}) => {
  useEffect(() => {
    updateHeaderContent("id");
    return () => updateHeaderContent("id");
  }, [headerContent]);

  return <div className="not-found">{error}</div>;
};
