import React, { useState } from "react";

function Avatar(props) {
    const img = props.img;

    
    return (
      <div class="Avatar">
        <img src={img}/>
      </div>
    );
  }

export default Avatar;