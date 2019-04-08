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
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({
      clicked: true
    })
    const property = [];
    e.properties.map((i) => {
      property.push({
        propertyName: i.name,
        properyId: i.id
      })
   })

   this.setState({
     theProperty: property
   })
 }

  render() {
    console.log('this is this.state.property');
    console.log(this.state.theProperty);

    return (
      <div>
        <nav>
          {data.data.map((item) =>
            <NavItem
              name={item.name}
              key={item.id}
              onClick={event => this.handleClick(item.containing_object, event)}
            />
          )}
          {this.state.theProperty.map((i) =>
            <SubItem
              name={i.propertyName}
              key={i.propertyId}
            />
          )}
        </nav>
      </div>
    )
  }

}

export default Navigation
