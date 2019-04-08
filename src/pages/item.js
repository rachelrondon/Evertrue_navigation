import React from "react";

const Item = (props) => {
  return(
    <div className="nav-item" onClick={props.onClick}>
      <h3>{props.name}</h3>
      <h3>App Keys{props.appKey}</h3>
    </div>
  )
}

export default Item;
