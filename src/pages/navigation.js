import React from "react";
import data from './testData';
import NavItem from './navitem';
import SubItem from './subitem';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propertyName: [],
      properyId: '',
      theProperty: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const property = [];
    e.properties.map((i) => {
      property.push({
        propertyName: i.name,
        properyId: i.id,
        propertyKey: i.app_keys,
        propertyType: i.data_type
      })
   })

   console.log('this is e.properties');
   console.log(e.properties);

   this.setState({
     theProperty: property
   })
 }

  render() {
    return (
        <div className="the-navigation">
          <div className="the-nav-item">
              {data.data.map((item) =>
                <NavItem
                  name={item.name}
                  key={item.id}
                  onClick={event => this.handleClick(item.containing_object, event)}
                />
              )}
            </div>
            <div className="the-sub-item">
              {this.state.theProperty.map((i) =>
                <SubItem
                  name={i.propertyName}
                  key={i.propertyId}
                  propertyKey={i.propertyKey}
                  propertyType={i.propertyType}
                />
              )}
          </div>
      </div>
    )
  }
}

export default Navigation
