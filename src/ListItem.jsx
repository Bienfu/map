import React, { useState } from "react";
import Avatar from "./Avatar";
import ListItemTitle from "./ListItemTitle";
import ListItemText from "./ListItemText";


function ListItem(props) {
    const shop = props.shop;    
    return (
      <div class="ListItem">
        <Avatar img={shop.img}></Avatar>
        <ListItemTitle name={shop.name}></ListItemTitle>
        <ListItemText address={shop.address}></ListItemText>
      </div>
    );
  }

export default ListItem;