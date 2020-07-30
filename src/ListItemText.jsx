import React, { useState } from "react";

function ListItemText(props) {
    const address = props.address;

    
    return (
      <div class="ListItemText">
        <h5>{address}</h5>
      </div>
    );
  }

export default ListItemText;