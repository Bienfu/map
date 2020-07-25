import React, { useState } from "react";


function ShopList(props) {
    const shops = props.repairShops;
    const handleClick = (evt) => {
      const shopName = evt.currentTarget.dataset.name;
      const shop = shops.find(x => x.name === shopName);
      return props.onClickFunction(shop)
    };
    const listItems = shops.map((shop) => (
      <li key={shop.name}>
        <button className={(shop==props.activeShop) ? "active" : null} onClick={handleClick} data-name={shop.name}>
          {shop.name}
          <br />
          {shop.address}
        </button>
      </li>
    ));
    return <ul>{listItems}</ul>;
  }

export default ShopList;