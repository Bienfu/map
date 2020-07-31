import React, { useState } from "react";
import cx from "classnames";

function ListItemRating(props) {
  const rating = props.rating;
  const className = props.className;

  const ratingInt = Math.floor(rating);
  const ratingDec = rating-ratingInt;
  var ratingEmpty = 5;
  var ratingDisplay = [];

  for (var i = 0; i < ratingInt; i++) {
    ratingDisplay.push(<span class="star on"></span>);
  }
  if (ratingDec == 0.5){
    ratingDisplay.push(<span class="star half"></span>)
    ratingEmpty = 4-ratingInt;
  }
  else{
    ratingEmpty = 5-ratingInt;
  }
  for (var i = 0; i < ratingEmpty; i++) {
    ratingDisplay.push(<span class="star"></span>);
  }
  return (
    <div className={cx("ListItemRating", className)   }>
      <div class="stars">
        <div>Rating: {rating} out of 5</div>
        <div>{ratingDisplay}</div>
        {/* <p> {rating} out of 5</p> */}
      </div>
    </div>
  );
}

export default ListItemRating;
