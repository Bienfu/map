import React, { useState } from "react";
import ListItemRating from "./ListItemRating";

function ListItemUserRatings(props) {
  const ratings = props.userRatings;

  const userReviews = ratings.map((rating) => (
    <div class="userRating">
    <img class="UserAvatarImage" src={"/avatar.jpg"}/>
      <div class="userRating-userName">Username: {rating.userName}</div>
      <ListItemRating rating={rating.rating} className="userRating-userRating"></ListItemRating>
      <div class="userRating-review">Review: {rating.review}</div>
    </div>
  ));
  return <div class="ListItemUserRatings">{userReviews}</div>;

}

export default ListItemUserRatings;
