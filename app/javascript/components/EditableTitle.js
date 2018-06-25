import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { StaticTitle } from './StaticTitle';

class EditableTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  render() {
    return (
      <StaticTitle titleName={this.props.titleName} />
    )
  }
}

export default EditableTitle;
