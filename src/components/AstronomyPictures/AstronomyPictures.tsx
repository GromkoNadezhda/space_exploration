import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { fetchAstronomyPicture } from "@store/thunk";
import { addAstronomyPictures } from "@store/astronomyPicturesSlice";
import { updateHeaderContent } from "@store/appSettings";
import { selectLoadingStatus, sortedAstronomyPictures } from "@store/selectors";
import {
  BASIC_BLOCKS_ID,
  RENDERING_ASTRONOMY_PICTURES_BUTTON,
} from "@constants/constants";
import { IASTRONOMY_PICTURE } from "@types";
import { FiltrationInputs } from "@components/FiltrationInputs/FiltrationInputs";
import { Sorting } from "@components/Sorting/Sorting";
import "./AstronomyPictures.scss";

export const AstronomyPictures = () => {
  const astronomyPictures: IASTRONOMY_PICTURE[] = useSelector(
    sortedAstronomyPictures
  );
  const loading = useSelector(selectLoadingStatus);

  const [renderingAllAstronomyPictures, setRenderingAllAstronomyPictures] =
    useState(true);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      fetchAstronomyPicture(
        " https://api.nasa.gov/planetary/apod?api_key=tH8n33Z1IX9p6dFVlvL1RvaYg8xhjFMQSewTNQYY&start_date=2024-01-01"
      )
    );

    dispatch(updateHeaderContent(BASIC_BLOCKS_ID.allAstronomyPictures));
  }, []);

  return loading ? (
    <CircularProgress />
  ) : (
    <div className="astronomy-pictures">
      <div className="astronomy-pictures__filtration">
        <Sorting />
        <FiltrationInputs />
      </div>
      <div className="astronomy-pictures__wrapper-card">
        {astronomyPictures.map(({ date, url, title }) => (
          <div
            className="astronomy-pictures__card"
            key={date}
            id={date}
            onClick={() => navigate(`/${date}`)}
          >
            <img src={url} alt={title} className="astronomy-pictures-img" />
            <p className="astronomy-pictures-date">{date}</p>
            <p>{title}</p>
          </div>
        ))}
      </div>
      <button
        className="astronomy-pictures__button"
        onClick={() => {
          dispatch(addAstronomyPictures(renderingAllAstronomyPictures)),
            setRenderingAllAstronomyPictures(!renderingAllAstronomyPictures);
        }}
      >
        {renderingAllAstronomyPictures
          ? RENDERING_ASTRONOMY_PICTURES_BUTTON.SHOW_ALL
          : RENDERING_ASTRONOMY_PICTURES_BUTTON.SHOW_MIN}
      </button>
    </div>
  );
};
