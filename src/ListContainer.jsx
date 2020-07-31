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
          <ListItem shop={shop} activeShop={props.activeShop}></ListItem>
      </li>
    ));
    return <ul class="ListContainer">{listItems}</ul>;
  }

export default ListContainer;