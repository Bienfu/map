import React, { useState } from "react";

function ListItemTitle(props) {
    const name = props.name;

    
    return (
      <div class="ListItemTitle">
        <h1>{name}</h1>
      </div>
    );
  }

export default ListItemTitle;