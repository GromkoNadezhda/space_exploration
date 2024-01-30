import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAstronomyPicture } from "../../store/thunk";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { ISTORE } from "../../types/types";
import { Preloader } from "../Preloader/Preloader";
import { useNavigate } from "react-router-dom";
import "./AstronomyPictures.scss";

export const AstronomyPictures = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      fetchAstronomyPicture(
        " https://api.nasa.gov/planetary/apod?api_key=tH8n33Z1IX9p6dFVlvL1RvaYg8xhjFMQSewTNQYY&start_date=2024-01-01"
      )
    );
  }, []);

  const astronomyPictures = useSelector(
    (store: { astronomyPictures: ISTORE }) =>
      store.astronomyPictures.astronomyPictures
  );
  const loading = useSelector(
    (store: { astronomyPictures: ISTORE }) =>
      store.astronomyPictures.loadingStatus
  );

  return loading ? (
    <Preloader />
  ) : (
    <div className="astronomy-picture">
      {astronomyPictures.map((astronomyPicture) => (
        <div
          className="astronomy-picture__wrapper-item"
          key={astronomyPicture.date}
          id={astronomyPicture.date}
          onClick={() => navigate(`/${astronomyPicture.date}`)}
        >
          <img
            src={astronomyPicture.url}
            alt={astronomyPicture.title}
            className="astronomy-picture-img"
          />
          <p className="astronomy-picture-data">{astronomyPicture.date}</p>
        </div>
      ))}
    </div>
  );
};
