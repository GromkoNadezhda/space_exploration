import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAstronomyPicture } from "@store/thunk";
import { updateHeaderContent } from "@store/appSettings";
import { selectAstronomyPicture } from "@store/selectors";
import { BASIC_BLOCKS_ID } from "@constants/constants";
import "./AstronomyPicture.scss";

export const AstronomyPicture = () => {
  const astronomyPicture = useSelector(selectAstronomyPicture);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { date } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      fetchAstronomyPicture(
        ` https://api.nasa.gov/planetary/apod?api_key=tH8n33Z1IX9p6dFVlvL1RvaYg8xhjFMQSewTNQYY&date=${date}`
      )
    );
    
    dispatch(updateHeaderContent(BASIC_BLOCKS_ID.astronomyPicture));
  }, []);

  if (!astronomyPicture) return null;

  const { date: _date, url, title, explanation } = astronomyPicture;

  return (
    astronomyPicture && (
      <div className="astronomy-picture">
        <button
          className="astronomy-picture__button"
          onClick={() => navigate("/")}
        >
          Back to picture selection
        </button>
        <div className="astronomy-picture__wrapper-card">
          <h2 className="astronomy-picture__description">{_date}</h2>
          <img src={url} alt={title} className="astronomy-picture__img" />
          <p className="astronomy-picture__title">{astronomyPicture.title}</p>
          <p className="astronomy-picture__description">{explanation}</p>
        </div>
      </div>
    )
  );
};
