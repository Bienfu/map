import React, { useState } from "react";
import ListItem from "./ListItem";


function ListContainer(props) {
    const shops = props.repairShops;
    const handleClick = (evt) => {
      const shopName = evt.currentTarget.dataset.name;
      const shop = shops.find(x => x.name === shopName);
      return props.onClickFunction(shop)
    };
    const listItems = shops.map((shop, index) => (
      <div key={shop.name} onClick={handleClick} data-name={shop.name}>
          <ListItem shop={shop} index={index} activeShop={props.activeShop}></ListItem>
      </div>
    ));
    return (
            <div className="ListContainer">
              <h1 className="ListContainerTitle">Automotive Repair Shops</h1>
              <div className="ListItemsContainer">{listItems}</div>
            </div>
           );
  }

export default ListContainer;