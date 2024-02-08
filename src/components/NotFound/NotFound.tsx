import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateHeaderContent } from "@store/appSettings";
import { BASIC_BLOCKS_ID } from "@constants/constants";
import "./NotFound.scss";

export const NotFound = ({ error }: { error: string }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeaderContent(BASIC_BLOCKS_ID.otherPages));
  }, []);

  return (
    <div className="not-found">
      <p className="not-found__text">Something went wrong:</p>
      <p className="not-found__text">{error}</p>
      <button className="not-found__button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};
