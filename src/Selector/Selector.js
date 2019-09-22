import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="lg">
        <DropdownToggle caret>
          Select a concert
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Concert 1</DropdownItem>
          <DropdownItem>Concert 2</DropdownItem>
          <DropdownItem>Concert 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}