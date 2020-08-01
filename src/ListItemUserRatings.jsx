import React, { useState } from "react";
import ListItemRating from "./ListItemRating";

function ListItemUserRatings(props) {
  const ratings = props.userRatings;

  const userReviews = ratings.map((rating) => (
    <div className="userRating">
      <img className="UserAvatarImage" src={"/avatar.jpg"} />
      <div className="userRating-userName">{rating.userName}</div>
      <ListItemRating
        rating={rating.rating}
        className="userRating-userRating"
      ></ListItemRating>
      <div className="userRating-review">
        <i className="fas fa-quote-left"/>
        <div className="userRating-reviewText">
          {rating.review}
        </div>
        <i className="fas fa-quote-right"/>
        </div>
    </div>
  ));
  return <div className="ListItemUserRatings"> 
            {userReviews}
        </div>;
}

export default ListItemUserRatings;
