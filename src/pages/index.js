import React from "react";
import Navigation from './navigation';
import SubItem from './SubItem';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>General Info</h1>
        <Navigation />
        <SubItem />
      </div>
    )
  }
}

export default IndexPage
