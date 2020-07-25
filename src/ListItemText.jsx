import React, { useState } from "react";

function ListItemText(props) {
    const address = props.address;

    
    return (
      <div class="ListItemText">
        <p>{address}</p>
      </div>
    );
  }

export default ListItemText;