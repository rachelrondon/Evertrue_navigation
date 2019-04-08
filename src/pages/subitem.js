import React from "react";

const SubItem = (props) => {
  return(
    <div className="sub-item">
      <h1 key={props.key}>This is the subitem: {props.name}</h1>
    </div>
  )
}

export default SubItem;
