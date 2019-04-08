import React from "react";
import Navigation from './navigation';
import SubItem from './SubItem';
import NavTitle from './NavTitle';
import '../components/layout.css';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="general-info-div">
        <h3 className="the-title">General Info</h3>
        <div className="general-info-layout">
          <div className="nav-div">
            <Navigation />
          </div>
          <div className="sub-item">
            <SubItem />
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
