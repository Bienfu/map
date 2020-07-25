import React, { useState } from "react";
import ListItem from "./ListItem";


function ListContainer(props) {
    const shops = props.repairShops;
    const handleClick = (evt) => {
      const shopName = evt.currentTarget.dataset.name;
      const shop = shops.find(x => x.name === shopName);
      return props.onClickFunction(shop)
    };
    const listItems = shops.map((shop) => (
      <li key={shop.name} onClick={handleClick} data-name={shop.name}>
          <ListItem className={(shop==props.activeShop) ? "active" : null} shop={shop}></ListItem>
      </li>
    ));
    return <ul>{listItems}</ul>;
  }

export default ListContainer;