import React from "react";
import '../components/layout.css';

const SubItem = (props) => {
  return(
    <div className="sub-item-layout" key={props.key}
    style={{
      display: {props.display}
    }}>
      <h3>Type: {props.name}</h3>
      <h3>Usage: {props.propertyKey}</h3>
      <h3>EverTrue Field Name: {props.propertyType}</h3>
    </div>
  )
}

export default SubItem;
