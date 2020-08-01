import React, { useState } from "react";
import Avatar from "./Avatar";
import ListItemTitle from "./ListItemTitle";
import ListItemText from "./ListItemText";
import ListItemRating from "./ListItemRating";
import ListItemUserRatings from "./ListItemUserRatings";
import cx from "classnames";

function ListItem(props) {
    const shop = props.shop;
    const [toggleRating, showRating] = useState(false);
    const buttonImage = (toggleRating) ? "fas fa-angle-up" : "fas fa-angle-down";
    // const butonToggle = () => showRating(!toggleRating);
    const handleClick = (evt) => {
      evt.stopPropagation();
      return showRating(!toggleRating);
    };
    const ratings = (toggleRating) ? <ListItemUserRatings userRatings={shop.userRatings}></ListItemUserRatings> : null;
    return (
      <div className={(shop==props.activeShop) ? "active ListItem" : "ListItem"} class="ListItem">
        <Avatar img={shop.img}></Avatar>
        <ListItemTitle name={shop.name}/>
        <ListItemText address={shop.address}/>
        <ListItemRating rating={shop.rating} className={"overallRating"}/>
        <div className="UserRatingsButton" onClick={handleClick}> 
        <i className={cx("showRatingButton", buttonImage)}/>
        <div className="UserRatingsTitle">User Ratings</div> 
        </div>
        {ratings}
      </div>
    );
  }

export default ListItem;

