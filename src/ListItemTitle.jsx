import React, { useState } from "react";

function ListItemTitle(props) {
    const name = props.name;

    
    return (
      <div class="ListItemTitle">
        <h2>{name}</h2>
      </div>
    );
  }

export default ListItemTitle;