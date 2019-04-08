import React from "react";

const NavTitle = (props) => {
  return(
    <div>
      <h3 key={props.key}>{props.title}</h3>
    </div>
  )
}

export default NavTitle;
