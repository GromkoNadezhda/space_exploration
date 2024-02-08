import { useDispatch } from "react-redux";
import { useState } from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { addSortingType } from "@store/astronomyPicturesSlice";
import "./Sorting.scss";

export const Sorting = () => {
  const [sortingType, setSortingType] = useState(1);

  const dispatch = useDispatch();

  const updateSortingType = () => dispatch(addSortingType(sortingType));

  return (
    <div className="sorting">
      <div
        onClick={() => {
          setSortingType(-sortingType), updateSortingType();
        }}
      >
        <SwapHorizIcon className="sorting__icon " />
      </div>
      <p className="sorting__text">Sort by date</p>
    </div>
  );
};
