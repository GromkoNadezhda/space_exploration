import { useDispatch, useSelector } from "react-redux";
import "./AstronomyPicture.scss";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { fetchAstronomyPicture } from "../../store/thunk";
import { useParams } from "react-router-dom";
import { ISTORE } from "../../types/types";

export const AstronomyPicture = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { date } = useParams();

  useEffect(() => {
    dispatch(
      fetchAstronomyPicture(
        ` https://api.nasa.gov/planetary/apod?api_key=tH8n33Z1IX9p6dFVlvL1RvaYg8xhjFMQSewTNQYY&date=${date}`
      )
    );
  }, []);

  const astronomyPicture = useSelector(
    (store: { astronomyPictures: ISTORE }) =>
      store.astronomyPictures.astronomyPicture
  );

  return (
    astronomyPicture && (
      <div className="astronomy-picture">
        <h2>{astronomyPicture.date}</h2>
        <img src={astronomyPicture.url} alt={astronomyPicture.title} />
        <p>{astronomyPicture.title}</p>
        <p>{astronomyPicture.explanation}</p>
      </div>
    )
  );
};
