import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAstronomyPicture } from "@store/thunk";
import { sortedAstronomyPictures } from "@store/selectors";
import { addAstronomyPictures } from "@store/astronomyPicturesSlice";
import { ISTORE } from "@types";
import { Preloader } from "@components/Preloader/Preloader";
import {
  BASIC_BLOCKS_ID,
  RENDERING_ASTRONOMY_PICTURES_BUTTON,
} from "@constants/constants";
import "./AstronomyPictures.scss";

export const AstronomyPictures = ({
  updateHeaderContent,
  headerContent,
}: {
  updateHeaderContent: (id: string) => void;
  headerContent: {
    title: string;
    mainPart: string;
  };
}) => {
  const astronomyPictures = useSelector(sortedAstronomyPictures);
  const loading = useSelector(
    (store: ISTORE) => store.astronomyPictures.loadingStatus
  );

  const [renderingAstronomyPictures, setRenderingAstronomyPictures] = useState({
    astronomyPictures: astronomyPictures,
    content: RENDERING_ASTRONOMY_PICTURES_BUTTON.show,
  });

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      fetchAstronomyPicture(
        " https://api.nasa.gov/planetary/apod?api_key=tH8n33Z1IX9p6dFVlvL1RvaYg8xhjFMQSewTNQYY&start_date=2024-01-01"
      )
    );
  }, []);

  useEffect(() => {
    updateHeaderContent(BASIC_BLOCKS_ID.allAstronomyPictures);

    return () => updateHeaderContent(BASIC_BLOCKS_ID.allAstronomyPictures);
  }, [headerContent]);

  const updsteRenderingAstronomyPictures = (id: string) =>
    id === RENDERING_ASTRONOMY_PICTURES_BUTTON.show.id
      ? setRenderingAstronomyPictures({
          ...renderingAstronomyPictures,
          content: RENDERING_ASTRONOMY_PICTURES_BUTTON.hidden,
        })
      : setRenderingAstronomyPictures({
          ...renderingAstronomyPictures,
          content: RENDERING_ASTRONOMY_PICTURES_BUTTON.show,
        });

  return loading ? (
    <Preloader />
  ) : (
    <div className="astronomy-pictures">
      <div className="astronomy-pictures__wrapper-card">
        {astronomyPictures.map((astronomyPicture) => (
          <div
            className="astronomy-pictures__card"
            key={astronomyPicture.date}
            id={astronomyPicture.date}
            onClick={() => navigate(`/${astronomyPicture.date}`)}
          >
            <img
              src={astronomyPicture.url}
              alt={astronomyPicture.title}
              className="astronomy-pictures-img"
            />
            <p className="astronomy-pictures-date">{astronomyPicture.date}</p>
            <p>{astronomyPicture.title}</p>
          </div>
        ))}
      </div>
      <button
        id={renderingAstronomyPictures.content.id}
        className="astronomy-pictures__button"
        onClick={() => {
          dispatch(addAstronomyPictures(renderingAstronomyPictures)),
            updsteRenderingAstronomyPictures(
              renderingAstronomyPictures.content.id
            );
        }}
      >
        {renderingAstronomyPictures.content.content}
      </button>
    </div>
  );
};
