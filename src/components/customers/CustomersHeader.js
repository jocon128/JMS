import React, { Component } from "react";
import { Input, Button , Icon} from "semantic-ui-react";

export default class CustomersHeader extends Component {
  render() {
    return (
      <div className="header-actions">
        <div className="left">
          <Input className="search" icon="search" placeholder="Search..." />
        </div>

        <Button color="blue">
          <Icon name="plus" />New Customer
        </Button>
      </div>
    );
  }
}