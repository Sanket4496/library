import React from "react";
import PropTypes from "prop-types";
import { Star, StarBorder } from "@mui/icons-material";
import "./Rating.css";

const Rating = ({ item }) => {
  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    ratings.push(
      <button
        className="ratingButton"
        data-value={i}
        key={i}
      >
        {item.rating < i ? <StarBorder /> : <Star />}
      </button>
    );
  }
  return ratings;
};

Rating.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};
export default Rating;
