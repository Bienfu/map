import React, { useState } from "react";

function Avatar(props) {
    const img = props.img;

    
    return (
      <div class="Avatar">
        <div class="circle">{img}</div>
      </div>
    );
  }

export default Avatar;