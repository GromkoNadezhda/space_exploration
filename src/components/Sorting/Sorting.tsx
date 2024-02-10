import { useDispatch, useSelector } from "react-redux";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { updateSortingType } from "@store/astronomyPicturesSlice";
import { selectSortingType } from "@store/selectors";
import "./Sorting.scss";

export const Sorting = () => {
  const sortingType = useSelector(selectSortingType);

  const dispatch = useDispatch();

  const changeSortingType = () => dispatch(updateSortingType(-sortingType));

  return (
    <div className="btn-sorting" >
      <button className="btn-sorting__icon" onClick={changeSortingType}>
        <SwapHorizIcon />
      </button>
      <span className="btn-sorting__text">Sort by date</span>
    </div>
  );
};
